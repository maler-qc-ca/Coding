@extends('layout')

@section('title', 'CREATE')
@section('content')
	
    <h1 class="title">Create Project</h1>
    <input type="text" class="input" name="id" value="1000">

    <form method="POST" action="/projects">

    @csrf

		<div class="field">

			<label class="label">Title</label>

			<div class="control">

				<input type="text" class="input {{ $errors->has('title') ? 'is-danger' : '' }}" name="title" placeholder="Title" value="{{ old('title') }}" required>

			</div>

		</div>

		<div class="field">

			<label class="label">Desc</label>

			<div class="control">

				<textarea name="description" class="textarea {{ $errors->has('description') ? 'is-danger' : '' }}" required>{{ old('description') }}</textarea>

			</div>

		</div>

		<div class="field">

			<div class="control">

				<button type="submit" class="button is-link">Create</button>

			</div>

		</div>

		@include ('errors')

    </form>

@endsection