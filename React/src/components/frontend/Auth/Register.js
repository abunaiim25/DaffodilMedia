import React from 'react'
import axios from 'axios';
import { useState } from 'react';
import swal from 'sweetalert';
import { Link, useHistory } from 'react-router-dom'; 
import { useEffect } from 'react';
import { Password } from 'primereact/password';


const Register = () => {

  //========== START JAVASCRIPT ==========
  useEffect(() => {
    const signInButton = document.getElementById('signInMobile');
    const container = document.getElementById('container');

    signInButton.addEventListener('click', () => {
      container.classList.remove("right-panel-active");
    });
  }, [])
  //========== END JAVASCRIPT ==========

  const history = useHistory();
  const [registerInput, setRegister] = useState({
    name: "",
    email: "",
    password: "", 
    error_list: [],
  });

  const handleInput = (e) => {
    e.persist();
    setRegister({ ...registerInput, [e.target.name]: e.target.value });
  }



  const registerSubmit = (e) => {
    e.preventDefault();

     //button loading
     const thisClicked = e.currentTarget;
     thisClicked.innerText = "Please wait, Registering...";

    const data = {
      name: registerInput.name,
      email: registerInput.email,
      password: registerInput.password,
      password_confirmation: registerInput.password_confirmation,
    }

    // post using laravel api
    axios.get('/sanctum/csrf-cookie').then(response => {
      axios.post(`/api/register`, data).then(res => {
        if (res.data.status === 200) {
          localStorage.setItem('auth_token', res.data.token);
          localStorage.setItem('auth_name', res.data.username);
          swal("Success", res.data.message, "success");
          thisClicked.innerText = "REGISTER"; //loading 
          history.push('/');
        }
        else {
          setRegister({ ...registerInput, error_list: res.data.validation_errors });
          thisClicked.innerText = "REGISTER"; //loading 
        }
      });
    });
  }


  return (
    <>
      <div className="form-container sign-up-container">
  
      <form>
            <h2>Create Account</h2>
           
            <div className='margin_top'>
              <label><p>Name:</p></label>
              <input type="text" name='name' onChange={handleInput} value={registerInput.name} />
              <span className="text-danger">{registerInput.error_list.name}</span>
            </div>

            <div className='margin_top'>
              <label><p>Email:</p></label>
              <input type="email" name='email' onChange={handleInput} value={registerInput.email}   />
              <span className="text-danger">{registerInput.error_list.email}</span>
            </div>

            <div className='margin_top'>
              <label><p>Password:</p></label>
              {/**
              <input type="password" name='password' onChange={handleInput} value={registerInput.password} id="myPassword" />
               <span onClick={window['hideShow']} className="fa fa-fw fa-eye field-icon toggle-password"></span>
               */}
              <Password style={{ width: "100%" }} name='password' onChange={handleInput}  value={registerInput.password} toggleMask  id="myPassword"/>
              <span className="text-danger">{registerInput.error_list.password}</span>
            </div>

            <div className='margin_top'>
              <label><p>Confirm Password:</p></label>
              {/** 
              <input type="password" name='password_confirmation' onChange={handleInput} value={registerInput.password_confirmation}   id="confirm_password" />
               <span onClick={window['hideShow2']} className="fa fa-fw fa-eye field-icon toggle-password"></span>
              */}
              <Password style={{ width: "100%" }} name='password_confirmation' onChange={handleInput}  value={registerInput.password_confirmation} toggleMask id="confirm_password"/>

              <span className="text-danger">{registerInput.error_list.password}</span>
            </div>
            <button type='submit' onClick={(e)=>registerSubmit(e)} className='top'>REGISTER</button>

            <p className='signin_account' id="signInMobile"><i class="fa-solid fa-arrow-left"></i>  Sign in your account </p>

          </form>
        </div>
    </>
  )
}

export default Register
