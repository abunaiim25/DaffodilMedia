<?php

namespace App\Http\Controllers\API;

use App\Http\Controllers\Controller;
use App\Models\Profile;
use Illuminate\Http\Request;
use Illuminate\Support\Facades\Auth;
use Illuminate\Support\Facades\File; //for delete image
use Illuminate\Support\Facades\Validator;

class ProfileController extends Controller
{
    public function my_profile_view($id)
    {
        if (auth('sanctum')->check()) {
            //$id = auth('sanctum')->user()->id;
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
    //=================Store on DB========================
    public function profile_store(Request $request)
    {
        //validation
        $validator = Validator::make($request->all(), [
            'status' => 'required|max:191',
            'status_id' => 'required|max:191',
            'department' => 'required|max:191',
            'batch' => 'required|max:191',
            'bio' => 'required|max:500',
            'profile_image' => 'required|image|mimes:jpeg,png,jpg',
        ]);

        if (auth('sanctum')->check()) {
            //post fail or post Database
            if ($validator->fails()) {
                return response()->json([
                    'status' => 422,
                    'errors' => $validator->messages(),
                ]);
            } else {
                $item = new Profile();
                //'user_id' => auth()->id(),
                $item->user_id = $request->input('user_id');
                $item->status = $request->input('status');
                $item->status_id = $request->input('status_id');
                $item->department = $request->input('department');
                $item->batch = $request->input('batch');
                $item->bio = $request->input('bio');

                if ($request->hasFile('profile_image')) {
                    $file = $request->file('profile_image');
                    $ext = $file->getClientOriginalExtension();
                    $filename = time() . '.' . $ext;
                    $file->move('Img_DB/Profile/', $filename);
                    $item->profile_image = 'Img_DB/Profile/' . $filename;
                }
                $item->save();

                return response()->json([
                    'status' => 200,
                    'message' => 'Profile Added Successfully',
                ]);
            }
        } else {
            return response()->json([
                'status' => 401,
                'message' => "You can't access profile page without login",
            ]);
        }
    }

    public function profile_update(Request $request, $profile_id)
    {
        //validation
        $validator = Validator::make($request->all(), [
            'status' => 'required|max:191',
            'status_id' => 'required|max:191',
            'department' => 'required|max:191',
            'batch' => 'required|max:191',
            'bio' => 'required|max:500',
        ]);

        if (auth('sanctum')->check()) {
            //post fail or post Database
            if ($validator->fails()) {
                return response()->json([
                    'status' => 422,
                    'errors' => $validator->messages(),
                ]);
            } else {
                $item = Profile::find($profile_id);
                //$id = auth('sanctum')->user()->id;
                //$item = Profile::where('user_id', $id);
                //$item = new Profile();

                $item->user_id = $request->input('user_id');
                //'user_id' => auth()->id(),
                $item->status = $request->input('status');
                $item->status_id = $request->input('status_id');
                $item->department = $request->input('department');
                $item->batch = $request->input('batch');
                $item->bio = $request->input('bio');

                if ($request->hasFile('profile_image')) {
                    $path = 'Img_DB/Profile/' . $item->profile_image;
                    if (File::exists($path)) {
                        File::delete($path);
                    }
                    $file = $request->file('profile_image');
                    $ext = $file->getClientOriginalExtension();
                    $filename = time() . '.' . $ext;
                    $file->move('Img_DB/Profile/', $filename);
                    $item->profile_image = 'Img_DB/Profile/' . $filename;
                }
                $item->save();

                return response()->json([
                    'status' => 200,
                    'message' => 'Profile Updated Successfully',
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
