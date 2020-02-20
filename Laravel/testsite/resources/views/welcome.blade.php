@extends('layout')


@section('content')
    <h1>First WWWW {{ $foo }}</h1>

    <ul>
        @foreach ($tasks as $task)
            <li>{{ $task }}</li>
        @endforeach
    </ul>
@endsection