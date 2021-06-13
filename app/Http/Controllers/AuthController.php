<?php

namespace App\Http\Controllers;

use App\Models\User;
use Illuminate\Http\Request;
use Illuminate\Support\Facades\Auth;
use Illuminate\Support\Facades\Cookie;
use Illuminate\Support\Facades\Hash;
use Symfony\Component\HttpFoundation\Response;
use Laravel\Sanctum\PersonalAccessToken;

class AuthController extends Controller
{

	// Auth checking is handled by middleware
	public function authcheck(Request $request)
	{
		return '1';
	}

	// API to allow creating account from other services, need more work tho, ie add validate. times running out
	public function make(Request $request)
	{
		return User::create([
			'name' => $request->input('name'),
			'email' => $request->input('email'),
			'password' => Hash::make($request->input('password')),
			'birthdate' => $request->input('birthdate')
		]);
	}

	public function login(Request $request)
	{
		if (!Auth::attempt($request->only('email', 'password'))) {
			return response([
				'message' => 'Invalid credentials!'
			], Response::HTTP_UNAUTHORIZED);
		}

		$user = Auth::user();
		Auth::login($user);

		$token = $user->createToken('token')->plainTextToken;

		$cookie = cookie('shouldbeasecretphrase', $token, 60 * 24, null, null, null, true, false, 'none');

		return response('1')->withCookie($cookie);
	}

	public function user()
	{
		return Auth::user();
	}

	public function logout()
	{
		$cookie = Cookie::forget('shouldbeasecretphrase');
		Auth::guard('web')->logout();

		return response('1')->withCookie($cookie);
	}
}
