import React from 'react'
import { Link } from 'react-router-dom';
import './assets/Page404.css'

const Page403 = () => {
  return (
    <>
      <div className='PageNotFound'>
        <div className="message-box">
          <h1>Oops! 403</h1>
          <p>Forbidden | Access Denied...! As you are not an admin..</p>
          <div className="buttons-con">
            <div class="action-link-wrap">
              <Link to='/' href="" className="link-button">Go to Home Page</Link>
            </div>
          </div>
        </div>
      </div>
    </>
  )
}

export default Page403
