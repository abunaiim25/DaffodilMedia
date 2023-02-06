/** 4 */

//import CreatePostModal from "../components/frontend/CreatePostModal/CreatePostModal";
import Home from "../components/frontend/Home/Home";
import Profile from "../components/frontend/Profile/Profile";






const FrontendRouteList =
[
    // Pages
    { path:'/', exact:true, name:'Home' , component:Home },
    { path:'/profile/:id', exact:true, name:'Profile' , component:Profile },
    //{ path:'/create-post', exact:true, name:'CreatePostModal' , component:CreatePostModal },
   
];

export default FrontendRouteList;



