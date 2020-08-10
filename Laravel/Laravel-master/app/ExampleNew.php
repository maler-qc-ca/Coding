<?php

namespace App;

Class ExampleNew
{
    private $key;

    public function __construct($key)
    {
        $this->key = $key;
    }

    public function handle()
    {
        die('here ' . $this->key);
    }
}
