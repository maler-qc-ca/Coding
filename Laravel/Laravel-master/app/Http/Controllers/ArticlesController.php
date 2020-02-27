<?php

namespace App\Http\Controllers;

use App\Article;
use App\Tag;
use Illuminate\Http\Request;

class ArticlesController extends Controller
{
    public function index()
    {
        $tag = request('tag');
        if (isset($tag)) {
            $articles = Tag::where('name', $tag)->firstOrFail()->articles;
        } else {
            $articles = Article::latest()->get();
        }

        return view('articles.index', ['articles' => $articles]);
    }

    public function show(Article $article)
    {
        return view('articles.show', ['article' => $article]);
    }

    public function create()
    {
        return view('articles.create');
    }

    public function store()
    {
        $validatedAttributes = $this->validatedArticle();

        Article::create($validatedAttributes);

        return redirect(route('articles.index'));
    }

    public function edit(Article $article)
    {
        // return view('/articles.edit', ['article' => $article]);
        return view('/articles.edit', compact('article'));
    }

    public function update(Article $article)
    {
        $validatedAttributes = $this->validatedArticle();

        $article->update($validatedAttributes);

        return redirect($article->path());
    }

    public function destroy()
    {
    }

    protected function validatedArticle()
    {
        return request()->validate([
            'title' => 'required',
            'excerpt' => 'required',
            'body' => 'required'
        ]);
    }
}
