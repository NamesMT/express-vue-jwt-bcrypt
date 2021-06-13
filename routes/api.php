<?php

use App\Http\Controllers\AuthController;
use Illuminate\Http\Request;
use Illuminate\Support\Facades\Route;

/*
|--------------------------------------------------------------------------
| API Routes
|--------------------------------------------------------------------------
|
| Here is where you can register API routes for your application. These
| routes are loaded by the RouteServiceProvider within a group which
| is assigned the "api" middleware group. Enjoy building your API!
|
*/

Route::post('/', [AuthController::class, 'login']);
Route::post('/make', [AuthController::class, 'make']);

Route::middleware('auth:sanctum')->group(function () {
	Route::get('/', [AuthController::class, 'user']);
	Route::post('/authcheck', [AuthController::class, 'authcheck']);
	Route::post('/logout', [AuthController::class, 'logout']);
});
