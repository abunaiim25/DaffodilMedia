import React from "react";
import $ from "jquery";
import { useEffect } from "react";
import { useState } from "react";
import axios from "axios";
import swal from "sweetalert";
import { useHistory } from "react-router-dom";
import { PUBLIC_URL } from "../../../PUBLIC_URL";

const BioAdd = () => {
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
  const [picture, setPicture] = useState([]);
  const [profileInput, setProfile] = useState({
    status: "",
    status_id: "",
    department: "",
    batch: "",
    bio: "",
  });
  //===========Input Fielde============
  const handleInput = (e) => {
    e.persist();
    setProfile({ ...profileInput, [e.target.name]: e.target.value });
  };
  const handleImage = (e) => {
    setPicture({ profile_image: e.target.files[0] });
  };

  //user me take
  const [user, setUser] = useState([]);
  useEffect(() => {
    axios.get("/api/me").then((response) => {
      setUser(response.data);
    });
  }, []);

  //==========Form Submit==========
  const submit_profile = (e) => {
    e.preventDefault();

    const formData = new FormData();
    //img
    formData.append("profile_image", picture.profile_image);
    //text
    formData.append("user_id", user.id);
    formData.append("status", profileInput.status);
    formData.append("status_id", profileInput.status_id);
    formData.append("department", profileInput.department);
    formData.append("batch", profileInput.batch);
    formData.append("bio", profileInput.bio);

    //post
    axios.post(`/api/profile-store`, formData).then((res) => {
      if (res.data.status === 200) {
        setError([]);
        history.push('/');
        swal("Success", res.data.message, "success");
      } else if (res.data.status === 422) {
        setError(res.data.errors);
      }
    });
  };

  return (
    <>
      <div>
        <form onSubmit={submit_profile} encType="multipart/form-data">
         
          <div className="row mb-4">
            <div className="profile_upload ">
              <div className="small-12 medium-2 large-2 columns">
                <div className="circle">
                  <img
                    className="profile-pic"
                    src="https://t3.ftcdn.net/jpg/03/46/83/96/360_F_346839683_6nAPzbhpSkIpb8pmAwufkC7c5eD7wYws.jpg"
                  />

                  <div className="p-image">
                    <i className="fa fa-camera upload-button"></i>
                    <input
                      style={{ display: "none" }}
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
            <small className="text-danger mt-3">{errorlist.profile_image}</small>
          </div>

          <div className="mt-2">
            <select
              name="status"
              className="form-select"
              onChange={handleInput}
              aria-label="Default select example"
            >
              <option selected>Choose your status</option>
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
              className="form-control"
              placeholder="Student Id / Employee Id"
              onChange={handleInput}
            />
            <small className="text-danger">{errorlist.status_id}</small>
          </div>

          <div className="mt-2">
            <input
              type="text"
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
              className="form-control"
              name="bio"
              placeholder="Write something about yourself..."
              rows="3"
              onChange={handleInput}
            ></textarea>
            <small className="text-danger">{errorlist.bio}</small>
          </div>

          <button type="submit" className="btn btn-primary float-end">
            Save
          </button>
        </form>
      </div>
    </>
  );
};

export default BioAdd;
