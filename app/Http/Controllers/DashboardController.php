<?php

namespace App\Http\Controllers;

use Illuminate\Http\Request;
use App\Models\Post;
use Inertia\Inertia;

class DashboardController extends Controller
{
    public function index(Request $request)
    {
        $posts = Post::with('user:id,name')->where('user_id', $request->user()->id)->latest()->get();

        return Inertia::render('Dashboard', [
            'posts' => $posts
        ]);
    }
}
