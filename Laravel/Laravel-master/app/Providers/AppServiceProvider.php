<?php

namespace App\Providers;

use Illuminate\Support\ServiceProvider;
use App\Example;
use App\ExampleNew;
use App\Collaborator;

class AppServiceProvider extends ServiceProvider
{
    /**
     * Register any application services.
     *
     * @return void
     */
    public function register()
    {
        // or bind
        $this->app->singleton('App\Example', function () {
            $collaborator = new Collaborator;
            $foo = config('services.foo');
            return new Example($collaborator, $foo);
        });

        $this->app->bind('example', function () {
            return new ExampleNew('XXL');
        });
    }

    /**
     * Bootstrap any application services.
     *
     * @return void
     */
    public function boot()
    {
        //
    }
}
