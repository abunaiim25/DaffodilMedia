<?php

namespace App\Http\Controllers\API;

use App\Http\Controllers\Controller;
use App\Models\Profile;
use Illuminate\Http\Request;

class HomeController extends Controller
{
    
    public function my_profile_view_2()
    {
        if (auth('sanctum')->check()) {

            $id = auth('sanctum')->user()->id;

            $myProfile = Profile::where('user_id', $id)->first();
            if ($myProfile) {
                return response()->json([
                    'status' => 200,
                    'myProfile' => $myProfile,
                ]);
            } else {
                return response()->json([
                    'status' => 404,
                    'myProfile' => "No Profile Found",
                ]);
            }
        } else {
            return response()->json([
                'status' => 401,
                'message' => "You can't access profile page without login",
            ]);
        }

    }
}
