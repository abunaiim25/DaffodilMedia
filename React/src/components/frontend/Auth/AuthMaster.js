import React from 'react';
import { useEffect } from 'react';
//import './AuthMaster.css';
import Login from './Login';
import Register from './Register';
import NavBar from '../../../layout/frontend/NavBar'

const AuthMaster = () => {

  //========== START JAVASCRIPT ==========
  useEffect(() => {
    const signUpButton = document.getElementById('signUp');
    const signInButton = document.getElementById('signIn');
    const container = document.getElementById('container');

    signUpButton.addEventListener('click', () => {
      container.classList.add("right-panel-active");
    });

    signInButton.addEventListener('click', () => {
      container.classList.remove("right-panel-active");
    });
  }, [])
  //========== END JAVASCRIPT ==========

  return (
    <>
  
      <div className='body-auth '>
        <div className="container" id="container">
       
          <Register />

          <Login />


          <div className="overlay-container">
            <div className="overlay">
              <div className="overlay-panel overlay-left">
                <h1>Welcome Back!</h1>
                <p>To keep connected with us please sign in with your personal info</p>
                <button className="ghost"  id="signIn">SIGN IN</button>
              </div>

              <div className="overlay-panel overlay-right">
                <h1>Hello!</h1>
                <p>Enter your personal details and start journey with us</p>
                <button className="ghost" id="signUp">REGISTER</button>
              </div>
            </div>
          </div>

        </div>
      </div>

    </>
  )
}

export default AuthMaster

