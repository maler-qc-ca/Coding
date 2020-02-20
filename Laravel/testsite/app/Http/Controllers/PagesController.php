<?php

namespace App\Http\Controllers;

use Illuminate\Http\Request;

class PagesController extends Controller
{
    public function home()
    {
        $tasks = [
            'test 1',
            'test 2',
            'test 3'
        ];

        return view('welcome')->with([
            'tasks' => $tasks,
            'foo' => 'test'
        ]);
    }

    public function about()
    {
        return view('about');
    }

    public function contact()
    {
        return view('contact');
    }
}
