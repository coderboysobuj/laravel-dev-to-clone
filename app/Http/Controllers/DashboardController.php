<?php

namespace App\Http\Controllers;

use App\Models\Post;
use Inertia\Inertia;

class DashboardController extends Controller
{
    public function index()
    {
        $posts = Post::with('user:id,name')->latest()->get();

        return Inertia::render('Dashboard', [
            'posts' => $posts
        ]);
    }
}
