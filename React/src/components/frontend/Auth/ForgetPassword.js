import React from 'react'
import { useState } from 'react';
import axios from 'axios';
import swal from 'sweetalert';
import { useHistory } from 'react-router-dom';

const ForgetPassword = () => {

    document.title = "Forget Password";
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
     thisClicked.innerText = "Please wait, Password Forgetting...";
/*
    //after submit input field emtey
    setInput({
     email: '',
  });
*/
    const data = {
      email: Input.email,
    }

    axios.get('/sanctum/csrf-cookie').then(response => {
      axios.post(`/api/forget-password`, data).then(res => {
          swal("Success", "Reset Password Mail on Your Email!", "success");
          thisClicked.innerText = "RESET PASSWORD"; //loading 
      })
     .catch(() => {
      swal("Failed", "Forget Password Unsuccessfull!", "error");
        thisClicked.innerText = "RESET PASSWORD"; //loading 
      });
    });
  }

    return (
        <>
            <div className='body-auth '>
                <div className="container_forgetPassword" id="container">

                    <form>
                        <h2>Forgot Password?</h2>

                        <h6><i class="fa fa-lock fa-4x"></i></h6>

                        <div className='margin_top'>
                            <label><p>Email:</p></label>
                            <input type="email" name='email' onChange={handleInput}  value={Input.email} placeholder="Email" />
                        </div>

                        <button onClick={(e)=>formSubmit(e)} className='reset_btn'>RESET PASSWORD</button>
                    </form>
                </div>
            </div>
        </>

    )
}

export default ForgetPassword
