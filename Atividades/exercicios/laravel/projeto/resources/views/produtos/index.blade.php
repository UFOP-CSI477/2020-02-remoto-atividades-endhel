@extends('principal')

@section('conteudo')

    <table class="table table-bordered table-hover table-striped">
        <thead class="thead">
            <tr>
                <th>ID</th>
                <th>Nome</th>
                <th>Um</th>
            </tr>
        </thead>
        <tbody>

            @foreach($produtos as $e)
                <tr>
                    <td>{{ $e->id }}</td>
                    <td>{{ $e->nome }}</td>
                    <td>{{ $e->um }}</td>
                </tr>
            @endforeach
        </tbody>
    </table>

@endsection