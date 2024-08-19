<?php

namespace App\Http\Controllers;

use App\Models\Category;
use Illuminate\Http\Request;

class CategoryController extends Controller
{
    public function index(){
        $categories=Category::all();
        return response()->json([
            'categories'=>$categories
        ],200);
    }

    public function show($id){
        $categories=Category::find($id);
        if(!$categories){
            return response()->json([
                'message'=>'Category not found '
            ],404);
        };

        return response()->json([
            'categories'=>$categories
        ],200);
    }
}
