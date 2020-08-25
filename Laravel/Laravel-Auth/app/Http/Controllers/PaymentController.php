<?php

namespace App\Http\Controllers;

// use Illuminate\Support\Facades\Notification;

use App\Notifications\PaymentReceived;

class PaymentController extends Controller
{
    public function store()
    {
        // Notification::send(request()->user(), new PaymentReceived());
        request()->user()->notify(new PaymentReceived());
    }
}
