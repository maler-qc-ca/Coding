@extends('layout')

@section('title', 'Show')
@section('content')	

		<div class="title">
			{{ $project->title }}
			
			@can('update', $project)
				<a href="">Edit PROJ</a>
			@endcan
		</div>

		<div class="content">
			{{ $project->description }}			
		</div>

		<a href="/projects/{{ $project->id }}/edit">Edit</a>


 		@if($project->tasks->count())
			<div class="box">
				TASKS:

				@foreach ($project->tasks as $task)
					<div>
						<form method="POST" action="/completed-tasks/{{ $task->id }}">
							
							@if ($task->completed)
								@method('DELETE')
							@endif

							@csrf
							<label class="checkbox {{ $task->completed ? 'is-completed' : '' }}" for="completed">
								<input type="checkbox" name="completed" onchange="this.form.submit()" {{ $task->completed ? 'checked' : '' }}>
								{{ $task->description }}
							</label>
						</form>
					</div>
				@endforeach

			</div>
		@endif

		<form class="box" method="POST" action="/projects/{{ $project->id }}/tasks">

			@csrf
			
			<div class="field">

				<label class="label" for="description">New Task

					<div class="control">
						<input type="text" class="input {{ $errors->has('description') ? 'is-danger' : '' }}" name="description" placeholder="New Task" required>
					</div>

				</label>

			</div>

			<div class="field">

				<div class="control">

					<button type="submit" class="button is-link">Add Task</button>

				</div>

			</div>

		</form>

		@include ('errors')


@endsection