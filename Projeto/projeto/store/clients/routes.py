from flask import redirect, render_template, url_for, flash, request, session, current_app
from flask_bcrypt import Bcrypt
from store import db, app, photos, bcrypt, login_manager
from .forms import RegistrationForm, LoginForm
import secrets
import os
from .models import Client, ClientRequest
from flask_login import login_required, current_user, login_user, logout_user
from store.products.routes import brands, categories


@app.route('/clients/register', methods=['GET', 'POST'])
def registerClient():
    form = RegistrationForm()
    if form.validate_on_submit():
        hash_password = bcrypt.generate_password_hash(form.password.data)
        new_client = Client(name=form.name.data, username=form.username.data, email=form.email.data,
        password=hash_password, country=form.country.data, state=form.state.data, city=form.city.data, contact=form.contact.data,
        address=form.address.data, zipcode=form.zipcode.data)
        db.session.add(new_client)
        flash(f'Usuário {form.name.data} registrado com sucesso!', 'success')
        db.session.commit()
        return redirect(url_for('loginClient'))
    return render_template('/clients/register.html', form=form, brands=brands(), categories=categories())


@app.route('/clients/login', methods=['GET', 'POST'])
def loginClient():
    form = LoginForm()
    
    if form.validate_on_submit():
        client = Client.query.filter_by(email=form.email.data).first()
        if client and bcrypt.check_password_hash(client.password, form.password.data):
            login_user(client)
            flash(f'Seja bem vindo, {form.email.data}!', 'success')
            next = request.args.get('next')
            return redirect(next or url_for('home'))
        flash('Não foi possível logar no sistema!', 'danger')
        return redirect(url_for('loginClient'))
    return render_template('/clients/login.html', form=form, brands=brands(), categories=categories())


@app.route('/clients/logout')
def logoutClient():
    logout_user()
    return redirect(url_for('home'))

@app.route('/clients/order')
@login_required
def orderClient():
    if current_user.is_authenticated:
        client_id = current_user.id
        invoice = secrets.token_hex(5)

        try:
            order = ClientRequest(invoice=invoice, client_id=client_id, request=session['StoreinCart'])
            db.session.add(order)
            db.session.commit()
            session.pop('StoreinCart')
            flash('O seu pedido foi salvo com sucesso!', 'success')
            return redirect(url_for('home'))
        except Exception as e:
            print(e)
            flash('Não foi possível processar o seu pedido!', 'danger')
            return redirect(url_for('getCart'))

@app.route('/clients/order/<invoice>')
@login_required
def ordersClient(invoice):
    if current_user.is_authenticated:
        gTotal = subtotal = 0
        client_id = current_user.id
        client = Client.query.filter_by(id=client_id).first()
        orders = ClientRequest.query.filter_by(client_id=client_id, invoice=invoice).order_by(ClientRequest.id.desc()).first()
        for _key, product in orders.request.items():
            discount = (product['discount']/100) * float(product['price'])
            subtotal += float(product['price']) * int(product['quantity'])
            subtotal -= discount
            tax = ("%.2f" % (.06 * float(subtotal)))
            gTotal = float("%.2f" % (1.06 * subtotal))
    else:
        return redirect(url_for('loginClient'))
    return render_template('clients/order.html', invoice=invoice, tax=tax, subtotal=subtotal, gTotal=gTotal, 
                                                 client=client, orders=orders, brands=brands(), categories=categories())