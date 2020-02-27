@extends('layout-t')

@section('content')
<div id="wrapper">
    <div id="page" class="container">
        @forelse ($articles as $article)
        <div id="content">
            <div class="title">
                <h2><a href="{{ $article->path() }}">{{ $article->title }}</a></h2>
                <span class="byline">{{ $article->body }}</span>
            </div>
        </div>
        @empty
            No related articles
        @endforelse
    </div>
</div>
@endsection
