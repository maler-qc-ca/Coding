<?php

/*
app()->bind('App\Example', function(){
	return new \App\Example;
});

app()->bind('example', function(){
	return new \App\Example;
});

app()->singleton('App\Services\Twitter', function(){
	return new \App\Services\Twitter('KEY KEY');
});


app()->singleton('twitter', function(){
	return new \App\Services\Twitter('KEY KEY');
});

app()->singleton('example', function(){
	return new \App\Example;
});

 */

use App\Services\Twitter;
use App\Repositories\UserRepository;
use Illuminate\Http\Request;


Route::get('/', function (Request $request) {
	// dd($users);
	// dd(app('App\Example'));

	// session(['user' => 'Moe']);
	// session()->forget('user');
	// return session('user');	
	// return session('userXX', 'Default');
	
	// $request->session()->put('foo', 'bar');
	// return $request->session()->get('foo');
	// return $request->session()->get('foox', 'default');

	return view('welcome');
});

Route::resource('projects', 'ProjectsController')->middleware('can:update,project'); // will apply to all methods

Route::post('/projects/{project}/tasks', 'ProjectTasksController@store');

// Route::patch('/tasks/{task}', 'ProjectTasksController@update');

Route::post('/completed-tasks/{task}/', 'CompletedTasksController@store');
Route::delete('/completed-tasks/{task}/', 'CompletedTasksController@destroy');
Auth::routes();

Route::get('/home', 'HomeController@index')->name('home');
