<?php

namespace App\Http\Controllers;

use App\Models\Product;
use Illuminate\Http\Request;

class ProductController extends Controller
{
    public function index(){
        $products=Product::all();

        return response()->json([
            'products' => $products
        ],200);
    }
    public function show($id){
        $product=Product::find($id);
      if(!$product){
        return response()->json([
            'message'=>'Product not found'
        ],404);
      }
        return response()->json([
            'product'=> $product
        ],200);
    }
}
