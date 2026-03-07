<?php

namespace App\Http\Controllers;

use Illuminate\Http\Request;
use Illuminate\Http\RedirectResponse;
use Illuminate\Support\Facades\Auth;
use App\Models\User;
use Illuminate\Support\Facades\Hash;

class AuthController extends Controller
{
    //
    public function login(Request $request){

        $credentials = $request->validate([
            'email' => ['required','email'],
            'password' => ['required']
        ]);

        $user = User::where('email', $request->email)->first(); //fetch user

        //verify user credentials
        if (!$user || !Hash::check($request->password, $user->password)) {
            return response()->json([
                'message' => 'Invalid credentials'
            ], 401);
        }

        $token = $request->user()->createToken($request->token_name);//create token
        

        if (Auth::attempt($credentials)) {
            
 
            return redirect()->intended('dashboard');
        }
 
    }
}
