import React from "react";
import $ from "jquery";
import { useState } from "react";
import axios from "axios";
import swal from "sweetalert";
import { useHistory, useParams } from "react-router-dom";
import { PUBLIC_URL } from "../../../PUBLIC_URL";

const BioEdit = (props) => {
  /*********************Profile Image Jquery******************** */
  $(document).ready(function () {
    var readURL = function (input) {
      if (input.files && input.files[0]) {
        var reader = new FileReader();
        reader.onload = function (e) {
          $(".profile-pic").attr("src", e.target.result);
        };
        reader.readAsDataURL(input.files[0]);
      }
    };
    $(".file-upload").on("change", function () {
      readURL(this);
    });
    $(".upload-button").on("click", function () {
      $(".file-upload").click();
    });
  });

  //************************************************************* */

  const history = useHistory();

  const [errorlist, setError] = useState([]);
  const [profileInput, setProfile] = useState(props);
  const [picture, setPicture] = useState(props);

  //===========Input Fielde============
  const handleInput = (e) => {
    e.persist();
    setProfile({ ...profileInput, [e.target.name]: e.target.value });
  };
  const handleImage = (e) => {
    setPicture({ profile_image: e.target.files[0] });
  };

  //==========Form Submit==========
  const submit_profile_update = async (e) => {
    e.preventDefault();

    const formData = new FormData();
    //img
    formData.append("profile_image", picture.profile_image);
    //text
    formData.append("user_id", props.user_id);
    formData.append("status", profileInput.status);
    formData.append("status_id", profileInput.status_id);
    formData.append("department", profileInput.department);
    formData.append("batch", profileInput.batch);
    formData.append("bio", profileInput.bio);
    console.log(formData);

    //post
    const profile_id = props.id;
    try {
      await axios
        .post(`/api/profile-update/${profile_id}`, formData)
        .then((res) => {
          //axios.post(`/api/profile-update`, formData).then(res => {
          if (res.data.status === 200) {
            swal("Success", res.data.message, "success");
            setError([]);
            history.push('/');
          } else if (res.data.status === 422) {
            setError(res.data.errors);
          }
        });
    } catch (e) {
      alert(e);
    }
  };

  const img =
    "https://t3.ftcdn.net/jpg/03/46/83/96/360_F_346839683_6nAPzbhpSkIpb8pmAwufkC7c5eD7wYws.jpg";

  var profile_addOrEdit = "";
  if (props.created_at) {
    profile_addOrEdit = (
      <form onSubmit={submit_profile_update} encType="multipart/form-data">
       
        <div className="row mb-4">
          <div className="profile_upload">
            <div className="small-12 medium-2 large-2 columns">
              <div className="circle">
                <img
                  class="profile-pic"
                  src={
                    picture.profile_image
                      ? `${PUBLIC_URL}/${picture.profile_image}`
                      : img
                  }
                />

                <div className="p-image">
                  <i className="fa fa-camera upload-button"></i>
                  <input
                    className="file-upload"
                    name="profile_image"
                    onChange={handleImage}
                    type="file"
                    accept="image/*"
                  />
                </div>
              </div>
            </div>
          </div>
        </div>

        <div>
          <div className="mt-2">
            <select
              name="status"
              defaultValue={profileInput.status}
              className="form-select"
              onChange={handleInput}
            >
              <option value="Student">Student</option>
              <option value="Faculty">Faculty</option>
              <option value="Offical Member">Offical Member</option>
              <option value="Genaral Person">Genaral Person</option>
            </select>
            <small className="text-danger">{errorlist.status}</small>
          </div>

          <div className="mt-2">
            <input
              type="text"
              name="status_id"
              value={profileInput.status_id}
              className="form-control"
              placeholder="Student Id / Employee Id"
              onChange={handleInput}
            />
            <small className="text-danger">{errorlist.status_id}</small>
          </div>

          <div className="mt-2">
            <input
              type="text"
              defaultValue={profileInput.department}
              name="department"
              className="form-control"
              placeholder="Department"
              onChange={handleInput}
            />
            <small className="text-danger">{errorlist.department}</small>
          </div>

          <div className="mt-2">
            <input
              type="text"
              defaultValue={profileInput.batch}
              name="batch"
              className="form-control"
              placeholder="Batch (only for student)"
              onChange={handleInput}
            />
            <small className="text-danger">{errorlist.batch}</small>
          </div>

          <div className="my-2">
            <textarea
              style={{  resize: "none" }} 
              value={profileInput.bio}
              className="form-control"
              name="bio"
              placeholder="Write something about yourself..."
              rows="3"
              onChange={handleInput}
            ></textarea>
            <small className="text-danger">{errorlist.bio}</small>
          </div>
        </div>
        <button type="submit" className="btn btn-primary float-end">
          Update
        </button>
      </form>
    );
  } else {
    profile_addOrEdit = <div>Intro Not Found</div>;
  }

  return <>{profile_addOrEdit}</>;
};

export default BioEdit;
