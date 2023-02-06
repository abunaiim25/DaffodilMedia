import React from 'react';
import { Link } from 'react-router-dom';
import './assets/Page404.css'
//something add on index.html page

const Page404 = () => {
  return (
    <>
      <div className='PageNotFound'>
        <div className="message-box">
          <h1>Oops! 404</h1>
          <p>Page | Url you are searching not found.</p>
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

export default Page404
