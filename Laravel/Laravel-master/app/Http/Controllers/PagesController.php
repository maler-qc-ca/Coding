<?php

namespace App\Http\Controllers;

// use Illuminate\Http\Request;
use Illuminate\Support\Facades\View;
use Illuminate\Support\Facades\Request;
use Illuminate\Support\Facades\File;
use Illuminate\Support\Facades\Cache;
use Illuminate\Filesystem\Filesystem;


class PagesController extends Controller
{
    public function home()
    {
        // ddd(resolve('App\Example'), resolve('App\Example'));
        // return Request::input('name');
        // return View::make('welcome');
        // return File::get(public_path('index.php'));
        Cache::remember('key', 60, function () {
            return 'Moi';
        });
        return Cache::get('key');
    }

    // public function home(Filesystem $file)
    // {
    //     return $file->get(public_path('index.php')); // = return File::get(public_path('index.php'));
    // }
}
