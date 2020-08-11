<?php

namespace App\Http\Controllers;

use Illuminate\Support\Facades\Mail;

class ContactController extends Controller
{
    public function store()
    {
        request()->validate(['email' => 'required|email']);

        $email = request('email');
        Mail::raw('plain text message', function ($message) {
            $message->to(request('email'))
            ->subject('Subject');
        });

        return redirect('/articles/create')->with('message', 'Email Sent!');
    }
}
