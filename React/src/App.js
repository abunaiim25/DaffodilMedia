import { BrowserRouter as Router, Redirect, Route, Switch } from 'react-router-dom';
import './App.css';
import axios from 'axios';
import AuthMaster from './components/frontend/Auth/AuthMaster';
import ForgetPassword from './components/frontend/Auth/ForgetPassword';
import Page403 from './components/errors/Page403';
import Page404 from './components/errors/Page404';
import FrontendPublicRoute from './routes_items/FrontendPublicRoute';
import AdminPrivateRoute from './routes_items/AdminPrivateRoute';
import ResetPassword from './components/frontend/Auth/ResetPassword';
import Skeleton from 'react-loading-skeleton'
import 'react-loading-skeleton/dist/skeleton.css'



//===================== (Laravel API)===============================
axios.defaults.baseURL = "http://127.0.0.1:8000/";
axios.defaults.headers.post['Content-Type'] = 'application/json';
axios.defaults.headers.post['Accept'] = 'application/json';

axios.defaults.withCredentials = true;
//logout
axios.interceptors.request.use(function (config) {
  const token = localStorage.getItem('auth_token');
  config.headers.Authorization = token ? `Bearer ${token}` : '';
  return config;
});
//===================== (Laravel API)===============================


function App() {
  return (
    <>
      <Router>
        <Switch>

          {/** Auth */}
          <Route exact path={"/authentication"} component={AuthMaster} />
          <Route exact path={"/forget-password"} component={ForgetPassword} />
          <Route exact path={"/reset-password/:id"} component={ResetPassword} />

          {/** Error */}
          <Route path={"/403"} component={Page403} />
          <Route path={"/404"} component={Page404} />

          {/** Admin Panel */}
          <AdminPrivateRoute path='/admin' name="Admin" />  {/** 1 */}

          {/** Frontend */}
          <FrontendPublicRoute path='/' name="Home" /> {/** 1 */}
        </Switch>
      </Router>
    </>
  );
}

export default App;
