<?php

Route::get('/', 'PagesController@home');

Route::get('/about', function () {
    // $articles = App\Article::all();
    // $articles = App\Article::take(2)->get();
    // $articles = App\Article::paginate(2);
    $articles = App\Article::take(3)->latest()->get();
    return view('about', [
        'articles' => $articles
    ]);
});

Route::get('/contact', function () {
    return view('contact');
});


// Route::get('/', function () {
//     $name = request('name');
//     return view('test', ['name' => $name]);
// });

Route::get('/welcome', function () {
    return ['foo' => 'bar'];
});

// Route::get('/posts/{post}', function ($post) {
//     $posts = [
//         'my-first-post' => 'My First Posts',
//         'my-second-post' => 'My Second Posts'
//     ];

//     if (!array_key_exists($post, $posts))
//         abort(404, 'Post not found!');

//     return view('post', [
//         'post' => $posts[$post]
//     ]);
// });

Route::get('/posts/{post}', 'PostsController@show');


Route::get('/articles', 'ArticlesController@index')->name('articles.index');

Route::get('/articles/create', 'ArticlesController@create');
Route::post('/articles', 'ArticlesController@store');

Route::get('/articles/{article}', 'ArticlesController@show')->name('articles.show');

Route::get('/articles/{article}/edit', 'ArticlesController@edit');
Route::put('/articles/{article}', 'ArticlesController@update');

Route::delete('/articles/{article}', 'ArticlesController@destroy');


// GET  /videos
// GET  /videos/2

// GET  /videos/create
// POST /videos

// GET /videos/2/edit
// PUT /videos/2

// DELETE /videos/2
