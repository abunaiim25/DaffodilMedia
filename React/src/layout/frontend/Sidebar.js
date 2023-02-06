import { useState } from "react";
import { useEffect } from "react";
import axios from "axios";
import { Link } from "react-router-dom";
import profile from "./assets/images/profile-1.jpg";
import { PUBLIC_URL } from "../../PUBLIC_URL";
import swal from "sweetalert";
import { useHistory } from "react-router-dom";
import { Button } from "primereact/button";
import { Dialog } from "primereact/dialog";
import BioAdd from "../../components/frontend/Profile/BioAdd";
import PostCreate from "../../components/frontend/CreatePostModal/PostCreate";

const Sidebar = () => {
  //=============== START JAVASCRIPT ===============

  //=============== ACTIVE SIDEBAR ===============
  /*
    useEffect(() => {
        const menuItem = document.querySelectorAll('.menu-item');

        //remove active class from all menu item
        const removeActiveItem = () => {
            menuItem.forEach(item => {
                item.classList.remove('active');
            });
        }
        //ACTIVE NAV ITEM
        menuItem.forEach(item => {
            item.addEventListener('click', () => {
                item.classList.add('active');//after add
                removeActiveItem();//before remove
                item.classList.add('active');//after add


                //NOTIFICATION SHOW
                if (item.id != 'notifications') {
                    document.querySelector('.notification-popup').style.display = 'none';
                }
                else {
                    document.querySelector('.notification-popup').style.display = 'block';
                    //REMOVE NOTIFICATION COUNT
                    document.querySelector('#notifications .notification-count').style.display = 'none';
                }

            });
        });
    }, [])
*/
  //=============== THEME CUSTOMIZE ===============
  useEffect(() => {
    const theme = document.querySelector("#theme");
    const themeModal = document.querySelector(".customize-theme");

    //open modal
    const openThemModel = () => {
      themeModal.style.display = "grid";
    };
    theme.addEventListener("click", openThemModel);

    //close modal
    const closeThemModel = (e) => {
      if (e.target.classList.contains("customize-theme")) {
        themeModal.style.display = "none";
      }
    };
    themeModal.addEventListener("click", closeThemModel);
  }, []);


  //=============== MESSAGES ===============
  useEffect(() => {
    const messagesNotification = document.querySelector(
      "#messeges-notifications"
    );
    const messages = document.querySelector(".messages");
    //SEARCH
    const message = messages.querySelectorAll(".message");
    const messageSearch = document.querySelector("#messages-search");

    //SEARCH BAR MESSAGES
    const searchMessage = () => {
      const val = messageSearch.value.toLowerCase();
      message.forEach((user) => {
        let name = user.querySelector("h5").textContent.toLowerCase();
        if (name.indexOf(val) != -1) {
          user.style.display = "flex";
        } else {
          user.style.display = "none";
        }
      });
    };
    messageSearch.addEventListener("keyup", searchMessage); //search chat

    //highlight messages card when messages menu  item is clicked
    messagesNotification.addEventListener("click", () => {
      messages.style.boxShadow = "0 0 1rem var(--color-primary)";
      //REMOVE COUNT
      messagesNotification.querySelector(".notification-count").style.display =
        "none";
      //time
      setTimeout(() => {
        messages.style.boxShadow = "none";
      }, 2000);
    });
  }, []);

  useEffect(() => {
    var header = document.getElementById("myDIV");
    var btns = header.getElementsByClassName("menu-item");
    for (var i = 0; i < btns.length; i++) {
      btns[i].addEventListener("click", function () {
        var current = document.getElementsByClassName("active");
        current[0].className = current[0].className.replace(" active", "");
        this.className += " active";
      });
    }
  }, []);

  //=============== END JAVASCRIPT ===============
  //******************************************************************************************/

  const history = useHistory();

  const [user, setUser] = useState("");
  useEffect(() => {
    axios.get("/api/me").then((response) => {
      //console.log(response.data.name);
      setUser(response.data);
    });
  }, []);

  const [myProfile, setMyProfile] = useState([]);
  useEffect(() => {
    axios.get(`/api/my_profile_view_2`).then((res) => {
      if (res.data.status === 200) {
        setMyProfile(res.data.myProfile);
        //setLoading(false);//loading
      } else if (res.data.status === 404) {
        swal("Error", res.data.message, "error");
      } else if (res.data.status === 401) {
        //unauthorize(without login)
        history.push("/");
        swal("Oops! Unauthorised", res.data.message, "warning");
      }
    });
  }, []);

  const img =
    "https://t3.ftcdn.net/jpg/03/46/83/96/360_F_346839683_6nAPzbhpSkIpb8pmAwufkC7c5eD7wYws.jpg";

  var user_me = "";
  if (user) {
    user_me = (
      <div>
        <a className="profile">
          <div className="profile-photo">
            <img
              class="profile-user"
              src={
                myProfile.profile_image
                  ? `${PUBLIC_URL}/${myProfile.profile_image}`
                  : img
              }
            />
          </div>

          <div className="handle">
            <h4>{user.name}</h4>
            <small
              className="text-muted"
              style={{ textTransform: "lowercase" }}
            >
              @{user.name}
            </small>
          </div>
        </a>
      </div>
    );
  }

  const [visibleProfile, setVisibleProfile] = useState(false);
  const [visiblePost, setVisiblePost] = useState(false);


  const addBio = (
    <div>
      <a
        className="menu-item"
        label="Profile"
        icon="uil uil-user"
        onClick={() => setVisibleProfile(true)}
      >
        <span>
          <i className="uil uil-user"></i>
        </span>
        <h3>Profile</h3>
      </a>
      <Dialog
        header="Personal Information"
        visible={visibleProfile}
        style={{ width: "50vw" }}
        onHide={() => setVisibleProfile(false)}
      >
        <BioAdd />
      </Dialog>
    </div>
  );

  const profileLink = (
    <Link to={`/profile/${user.id}`} className="menu-item ">
      <span>
        <i className="uil uil-user"></i>
      </span>
      <h3>Profile</h3>
    </Link>
  );

  return (
    <>
      <div id="myDIV">
        <div className="fixed">
          {user_me}

          <div className="sidebar">
            <Link to="/" className="menu-item Link active">
              <span>
                <i className="uil uil-home"></i>
              </span>
              <h3>Home</h3>
            </Link>

            {!myProfile.created_at ? addBio : profileLink}

            <div>
              <a
                className="menu-item"
                label="Create Post"
                icon="fa-solid fa-circle-plus"
                onClick={() => setVisiblePost(true)}
              >
                <span>
                <i className="fa-solid fa-circle-plus"></i>
                </span>
                <h3>Create Post</h3>
              </a>
              <Dialog
                header="Create Post"
                visible={visiblePost}
                maximizable 
                style={{ width: "80vw" }}
                onHide={() => setVisiblePost(false)}
              >
                <PostCreate />
              </Dialog>
            </div>



            <a className="menu-item" id="messeges-notifications">
              <span>
                <i className="uil uil-envelope">
                  <small className="notification-count">6</small>
                </i>
              </span>
              <h3>Messages</h3>
            </a>
            <a className="menu-item">
              <span>
                <i className="uil uil-bookmark"></i>
              </span>
              <h3>Bookmarks</h3>
            </a>

            <a className="menu-item" id="theme">
              <span>
                <i className="uil uil-palette"></i>
              </span>
              <h3>Theme</h3>
            </a>

            <a className="menu-item">
              <span>
                <i className="uil uil-setting"></i>
              </span>
              <h3>Settings</h3>
            </a>
          </div>
        </div>
      </div>
    </>
  );
};

export default Sidebar;
