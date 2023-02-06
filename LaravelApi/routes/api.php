<?php

use Illuminate\Http\Request;
use Illuminate\Support\Facades\Route;
use App\Http\Controllers\API\AuthController;
use App\Http\Controllers\API\HomeController;
use App\Http\Controllers\API\ProfileController;

//========================Register Login User Logout====================
Route::post('register', [AuthController::class, 'register']);
Route::post('login', [AuthController::class, 'login']);
Route::post('forget-password', [AuthController::class, 'forget_password']);
Route::post('reset-password', [AuthController::class, 'reset_password']);
Route::get('/me', [AuthController::class, 'me'])->middleware('auth:sanctum');
Route::middleware(['auth:sanctum'])->group(function() {
    Route::post('logout', [AuthController::class, 'logout']);
});

//===========================Admin==============================
Route::middleware(['auth:sanctum', 'isApiAdmin'])->group(function() {
    //protected
    Route::get('/checkingAuthenticated', function() {
        return response()->json(['message' => 'You are in', 'status'=>200], 200);
    });
});

//=======================Profile==============================
//Route::put('profile-store/{id}', [ProfileController::class, 'profile_store']);
Route::post('profile-store', [ProfileController::class, 'profile_store']);
Route::get('my_profile_view/{id}', [ProfileController::class, 'my_profile_view']);
Route::get('my_profile_view_2', [HomeController::class, 'my_profile_view_2']);
Route::post('profile-update/{profile_id}', [ProfileController::class, 'profile_update']);




/*

Route::middleware('auth:sanctum')->get('/user', function (Request $request) {
    return $request->user();
});*/