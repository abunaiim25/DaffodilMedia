import brand from './assets/banner.jpg'
import $ from 'jquery';
import React, { useState } from 'react'
import { useEffect } from 'react';
import axios from 'axios';
import { PUBLIC_URL } from '../../../PUBLIC_URL';
import swal from 'sweetalert';
import PacmanLoader from "react-spinners/PacmanLoader"; 
import { useHistory } from 'react-router-dom';
import { Button } from 'primereact/button';
import { Dialog } from 'primereact/dialog';
import BioEdit from './BioEdit';


const Profile = (props) => {

  /********************************Profile Image Jquery*************************** */
  $(document).ready(function () {
    var readURL = function (input) {
      if (input.files && input.files[0]) {
        var reader = new FileReader();
        reader.onload = function (e) {
          $('.profile-pic').attr('src', e.target.result);
        }
        reader.readAsDataURL(input.files[0]);
      }
    }
    $(".file-upload").on('change', function () {
      readURL(this);
    });
    $(".upload-button").on('click', function () {
      $(".file-upload").click();
    });
  });


  document.title = "Profile - DIU";
  const history = useHistory();
  const [visible, setVisible] = useState(false);
  const [user, setUser] = useState('');
  const [myProfile, setMyProfile] = useState([]);
  const [loading, setLoading] = useState(true);//loading



  //========Auth user=============
  useEffect(() => {
    axios.get('/api/me')
      .then(response => {
        setUser(response.data);
      });
  }, []);


const id = props.match.params.id;
useEffect(() => {
    axios.get(`/api/my_profile_view/${id}`).then(res => {
        if (res.data.status === 200) {
          setMyProfile(res.data.myProfile);
           setLoading(false);//loading
        } 
        else if (res.data.status === 404)
        {
          swal("Error", res.data.message, "error");
          console.log(res.data.message)
        }
        else if (res.data.status === 401) {//unauthorize(without login)
          history.push('/')
          setLoading(false);//loading
          swal("Oops! Unauthorised", res.data.message, "warning");
      }
    });
}, [props.match.params.id]);



if (loading)//Loading 3 
{//npm install --save react-spinners
    return <div className='loading_profile'>
        <PacmanLoader color='hsl(252, 75%, 60%)'/>
    </div>
}


  var profile_intro = '';
  if (myProfile.created_at) {
    profile_intro =
      <div className="l-cnt">
        <div className="cnt-label">
          <i className="l-i" id="l-i-i"></i>
          <span>Intro</span>
          <div className="lb-action">

          <Button className='btn_primary' icon="fa-solid fa-pencil" style={{ backgroundColor: "white" }}  onClick={() => setVisible(true)} />
            <Dialog header="Personal Information" visible={visible} style={{ width: '50vw' }} onHide={() => setVisible(false)}>
               <BioEdit  {...myProfile}/>
            </Dialog>

          </div>
        </div>

        <div id="i-box">
          <div id="u-loc"><i className="fa-solid fa-house-user p-2"></i>Status: {myProfile.status}</div>
          <div id="u-loc"><i className="fa-solid fa-house-user  p-2"></i>ID: {myProfile.status_id}</div>
          <div id="u-loc"><i className="fa-solid fa-house-user  p-2"></i>Department: {myProfile.department}</div>
          <div id="u-loc"><i className="fa-solid fa-house-user  p-2"></i>Batch: {myProfile.batch}</div>
          <div id="u-loc"><i className="fa-solid fa-house-user  p-2"></i>Bio: {myProfile.bio}</div>
        </div>
      </div>
  } 


  const img= 'https://t3.ftcdn.net/jpg/03/46/83/96/360_F_346839683_6nAPzbhpSkIpb8pmAwufkC7c5eD7wYws.jpg';
  return (
    <>
      <main className='Profile'>

        <div id="profile-upper">
          <div id="profile-banner-image">
            <img src={brand} alt="Banner image" />

            <div className="user">

            <img class="profile-user" src={myProfile.profile_image ? `${PUBLIC_URL}/${myProfile.profile_image}` : img} /> 

              <div className="user-name">
                {user.name}
              </div>
            </div>
          </div>

          <div id="black-grd"></div>
        </div>

        <div id="main-content">
          <div className="tb">
            <div className="td" id="l-col">

              {/**Intro */}
              {profile_intro}
            </div>
          </div>
        </div>
      </main>
    </>
  )
}

export default Profile
