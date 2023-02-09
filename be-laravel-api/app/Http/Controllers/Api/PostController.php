<?php

namespace App\Http\Controllers\Api;

use App\Http\Controllers\Controller;
use App\Http\Resources\PostResource;
use App\Models\Post;
use Illuminate\Http\Request;
use Illuminate\Support\Facades\Validator;

class PostController extends Controller
{
    public function index(Request $request)
    {
        // get post
        $posts = Post::query();

        if ($request->has('title')) {
            $posts->where('title', 'LIKE', '%' . $request->title . '%');
        } else if ($request->has('description')) {
            $posts->where('description', 'LIKE', '%' . $request->description . '%');
        }

        $posts_query = $posts->get();

        return $posts_query;

        // return collection of posts as a resource
        // return new PostResource(true, 'List data posts', $posts);
    }

    public function store(Request $request)
    {
        // define validoator rules
        $validator = Validator::make($request->all(), [
            'title'         => 'required',
            'description'   => 'required',
        ]);
        // check if validation fails
        if ($validator->fails()) {
            return response()->json($validator->errors(), 422);
        }
        // upload title
        $post = Post::create([
            'title'         => $request->title,
            'description'   => $request->description,
        ]);

        // return $post;
        // return response
        return new PostResource(true, "Data post berhasil ditambahkan", $post);
    }

    public function show(Post $post)
    {
        return $post;
        // return single post as a resource
        // return new PostResource(true, 'Data post ditemukan!', $post);
    }

    public function update(Request $request, Post $post)
    {
        // define validator rules
        $validator = Validator::make($request->all(), [
            'title'             => 'required',
            'description'       => 'required',
        ]);

        //check if validation fails
        if ($validator->fails()) {
            return response()->json($validator->errors(), 422);
        }
        
        $published = $request->has('published') ? $request->published : false;

        // upload title
        $post->update([
            'title'         => $request->title,
            'description'   => $request->description,
            'published'     => $published
        ]);

        // return response
        return new PostResource(true, 'Data post berhasil diupdate', $post);
    }
    public function destroy(Post $post)
    {
        // delete posts
        $post->delete();

        // return $post;

        // return response
        return new PostResource(true, 'Data post berhasail dihapus!', null);
    }
    public function destroyAll()
    {
        // delete posts
        Post::query()->delete();

        return;

        // return response
        // return new PostResource(true, 'Data post berhasail dihapus!', null);
    }
}
