<?php

namespace App;

use Illuminate\Database\Eloquent\Model;

class Article extends Model
{
    protected $fillable = ['title', 'excerpt', 'body'];
    // protected $guarded = [];

    // function getRouteKeyName()
    // {
    //     return 'title';
    // }

    public function path()
    {
        return route('articles.show', $this);
    }
}
