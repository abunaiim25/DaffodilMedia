import React from 'react'
import { Link } from 'react-router-dom'
import { useState } from 'react';
import { useHistory } from 'react-router-dom';
import axios from 'axios';
import swal from 'sweetalert';
import { useEffect } from 'react';
import { Password } from 'primereact/password';


const Login = () => {

  //========== START JAVASCRIPT ==========
  useEffect(() => {
    const signUpButton = document.getElementById('signUpMobile');
    const container = document.getElementById('container');

    signUpButton.addEventListener('click', () => {
      container.classList.add("right-panel-active");
    });
  }, [])
  //========== END JAVASCRIPT ==========

    const history = useHistory();
    const [loginInput, setLogin] = useState({
      email: "",
      password: "",
      error_list: [],
    });
  
  
    const handleInput = (e) => {
      e.persist();
      setLogin({ ...loginInput, [e.target.name]: e.target.value });
    }
  
  
    const loginSubmit = (e) => {
      e.preventDefault();

      //button loading
      const thisClicked = e.currentTarget;
      thisClicked.innerText = "Please wait, Signing...";
  
      const data = {
        email: loginInput.email,
        password: loginInput.password,
      }
  
      // post using laravel api
      axios.get('/sanctum/csrf-cookie').then(response => {
        axios.post(`/api/login`, data).then(res => {
          if (res.data.status === 200) {
            localStorage.setItem('auth_token', res.data.token);
            localStorage.setItem('auth_name', res.data.username);
            swal("Success", res.data.message, "success");
            thisClicked.innerText = "SIGN IN"; //loading 
            if (res.data.role === 'admin') {
              history.push('/admin/dashboard');// 
            }
            else {
              history.push('/');// login to home page
              thisClicked.innerText = "SIGN IN"; //loading 
            }
          }
          else if (res.data.status === 401) {
            swal("Warning", res.data.message, "warning");
            thisClicked.innerText = "SIGN IN"; //loading 
          }
          else {
            setLogin({ ...loginInput, error_list: res.data.validation_errors });
            thisClicked.innerText = "SIGN IN"; //loading 
          }
        });
      });
    }



    return (
        <>
            <div className="form-container sign-in-container">
            <Link to="/" className='arow'><i class="fa-solid fa-arrow-left"></i></Link>
                <form>
                    <h2>Sign in</h2>
                    <div className="social-container">
                        <a href="#" className="social"><i className="fab fa-facebook-f"></i></a>
                        <a href="#" className="social"><i className="fab fa-google-plus-g"></i></a>
                        <a href="#" className="social"><i className="fab fa-linkedin-in"></i></a>
                    </div>
                    <span>or use your account</span>

                    <div className='margin_top'>
                        <label><p>Email:</p></label>
                        <input type="email" name='email' onChange={handleInput} value={loginInput.email} />
                        <span className="text-danger">{loginInput.error_list.email}</span>
                    </div>

                    <div className='margin_top'>
                        <label><p>Password:</p></label>
                        {/** 
                        <input type="password" name='password' onChange={handleInput} value={loginInput.password} id="checkPassword" />
                        */}
                        <Password style={{ width: "100%" }} name='password' onChange={handleInput}  value={loginInput.password} toggleMask />
                        
                        <span className="text-danger">{loginInput.error_list.password}</span>
                        {/** 
                        <span onClick={window['hideShow3']} className="fa fa-fw fa-eye field-icon toggle-password"></span>
                        */}
                        <Link to="/forget-password" className='forget_password'><small> Forgot your password?</small></Link>
                    </div>

                    <button type='submit'  onClick={(e)=>loginSubmit(e)} >SIGN IN</button>

                    <p className='signin_account' id="signUpMobile">Sign in your account <i class="fa-solid fa-arrow-right"></i></p>
                </form>
            </div>
        </>
    )
}

export default Login
