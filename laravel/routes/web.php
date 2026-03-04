<?php

use Illuminate\Support\Facades\Route;

//catch-all route that returns a single Blade view
Route::get('/{any}', function () {
    return view('welcome'); 
})->where('any', '.*');

