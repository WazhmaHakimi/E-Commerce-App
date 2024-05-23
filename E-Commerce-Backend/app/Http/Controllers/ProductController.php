<?php

namespace App\Http\Controllers;

use Illuminate\Http\Request;
use App\Models\Product;
use Illuminate\Support\Facades\Storage;

class ProductController extends Controller
{
    public function index(Request $request) {
        
        $product = new Product();
        $product->name = $request->name;
        $product->file_path = $request->file('path')->store('products');
        $product->description = $request->description;
        $product->price = $request->price;
        $product->save();

        return $product;
    }

    public function list() {
        return Product::all();
    }

    public function delete($id) {
        $result = Product::where('id', $id)->delete();
        if($result) {
            return ['success', 'The record has been deleted!'];
        }else {
            return ['error', 'Faild to delete the record!'];
        }
    }

    public function getSingleProduct($id) {

        $product = Product::find($id);  

        return $product;
    }

    public function update(Request $request, $id)
{
    $product = Product::find($id);
    if (!$product) {
        return response()->json(['error' => 'Product not found'], 404);
    }

    $product->name = $request->input('name');
    $product->description = $request->input('description');
    $product->price = $request->input('price');

    if ($request->hasFile('file')) {
        $file = $request->file('file');
        $path = $file->store('products');
    
        // Delete the old file if it exists
        if ($product->file_path) {
            Storage::delete($product->file_path);
        }
    
        $product->file_path = $path;
    }

    $product->save();

    return response()->json(['success' => 'The data has been successfully updated'], 200);
}

    public function search($key) {
        return Product::where('name', 'Like', "%$key%")->get();
    }
}
