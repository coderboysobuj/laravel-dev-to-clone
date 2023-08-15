<?php

namespace App\Http\Controllers;

use App\Models\Post;
use Illuminate\Support\Facades\Route;
use Illuminate\Foundation\Application;
use Inertia\Inertia;

class HomeController extends Controller
{
    //
    public function index()
    {
        $posts = Post::with('user:id,name,avatar')->latest()->get();
        return Inertia::render('Home', [
            'canLogin' => Route::has('login'),
            'canRegister' => Route::has('register'),
            'laravelVersion' => Application::VERSION,
            'phpVersion' => PHP_VERSION,
            'posts' => $posts
        ]);
    }
    public function view_article(string $slug)
    {
        $post = Post::with('user:id,name,avatar')->where('slug', $slug)->first();
        return Inertia::render("Article", [
            "post" => $post
        ]);
    }
}
