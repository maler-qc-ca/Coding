@extends('layout')

@section('content')

    @if(session('message'))
        {{ session('message') }}
    @endif

    <h1>Projects</h1>
	
	<ul>
    @foreach($projects as $project)
        <li><a href="/projects/{{ $project->id }}">{{ $project->title }}</a></li>
    @endforeach
	</ul>

	<hr>
	<a href="/projects/create">Create</a>

@endsection