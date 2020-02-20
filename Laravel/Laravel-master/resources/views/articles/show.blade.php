@extends('layout-t')

@section('content')
<div id="wrapper">
    <div id="page" class="container">
        <div id="content">
            <div class="title">
                <h2>{{ $article->title }}</h2>
                <span class="byline">{{ $article->body }}</span>
            </div>
        </div>
    </div>
</div>
@endsection