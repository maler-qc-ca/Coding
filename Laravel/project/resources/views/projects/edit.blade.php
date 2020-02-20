@extends('layout')

@section('title', 'EDIT')
@section('content')
	
	<h1 class="title">Edit</h1>

	<form method="POST" action="/projects/{{ $project->id }}">

		{{ method_field('PATCH') }}
		{{ csrf_field() }}
		
		<div class="field">

			<label class="label">Title</label>

			<div class="control">

				<input type="text" class="input" name="title" placeholder="Title" value="{{ $project->title }}">

			</div>

		</div>

		<div class="field">

			<label class="label">Desc</label>

			<div class="control">

				<textarea name="description" class="textarea">{{ $project->description }}</textarea>

			</div>

		</div>

		<div class="field">

			<div class="control">

				<button type="submit" class="button is-link">Update</button>

			</div>

		</div>

	</form>
	@include ('errors')

	<form method="POST" action="/projects/{{ $project->id }}">
		<div class="field">
			@method('DELETE')
			@csrf

			<div class="control">

				<button type="submit" class="button">Delete</button>

			</div>

		</div>
	</form>

@endsection