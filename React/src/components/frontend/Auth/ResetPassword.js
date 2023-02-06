import React from 'react'
import { useState } from 'react';
import axios from 'axios';
import swal from 'sweetalert';
import { useHistory } from 'react-router-dom';

const ResetPassword = () => {

  document.title = "Reset Password";
  const history = useHistory();
  const [errors, setErrors] = useState([]);
  const [Input, setInput] = useState({
    email: '',
    message: '',
  });

  const handleInput = (e) => {
    e.persist();
    setInput({ ...Input, [e.target.name]: e.target.value });
}

  
  const formSubmit = (e) => {
    e.preventDefault();

      //button loading
      const thisClicked = e.currentTarget;
      thisClicked.innerText = "Please wait, Password Resetting...";

    const data = {
      email: Input.email,
      token: Input.token,
      password: Input.password,
      password_confirmation: Input.password_confirmation,
    }

    axios.get('/sanctum/csrf-cookie').then(response => {
      axios.post(`/api/reset-password`, data).then(res => {
       
        swal("Successfull", res.data.message, "success");
        thisClicked.innerText = "REGISTER"; //loading 
        history.push('/authentication');
      })
      .catch(() => {
       swal("Failed", "Reset Password Unsuccessfull!", "error");
       thisClicked.innerText = "REGISTER"; //loading 
        });
    });
  }

  return (
    <>
      <div className='body-auth '>
        <div className="container_resetPassword" id="container">

          <form>
            <h2>Reset Password?</h2>



            <div className='margin_top'>
              <label><p>Token <small className='text-success'>(Checked on your email)</small>:</p></label>
              <input type="text" name='token' onChange={handleInput} value={Input.token} className='form-control' required />
            </div>

            <div className='margin_top'>
              <label><p>Email:</p></label>
              <input type="email" name='email' onChange={handleInput} value={Input.email}/>
            </div>

            <div className='margin_top'>
              <label><p>New Password:</p>  </label>
              <input type="password" name='password' onChange={handleInput} value={Input.password} className='form-control' required />
            </div>

            <div className='margin_top'>
              <label><p>Confirm Password:</p></label>
              <input type="password" name='password_confirmation' onChange={handleInput} value={Input.password_confirmation} className='form-control' required />
            </div>

            <button type='submit' onClick={(e) => formSubmit(e)} className='reset_btn'>PASSWORD SUBMIT</button>
          </form>
        </div>
      </div>
    </>
  )
}

export default ResetPassword