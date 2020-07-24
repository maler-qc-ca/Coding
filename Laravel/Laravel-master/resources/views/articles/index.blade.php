@extends('layout-t')

@section('content')
<div id="wrapper">
    <div id="page" class="container">
        @forelse ($articles as $article)
        <div class="content">
            <div class="title">
                <h2><a href="{{ $article->path() }}">{{ $article->title }}</a></h2>
                <span class="byline">{{ $article->body }}</span>
            </div>
        </div>
        <p>
            <img src="/images/banner.jpg" alt="" class="image image-full" />
        </p>

        {!! $article->excerpt !!}
        @empty
            <p>No related articles</p>
        @endforelse
    </div>
</div>
@endsection
