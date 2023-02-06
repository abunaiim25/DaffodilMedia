import React from 'react'
import profile from '../assets/images/profile-1.jpg'

const CreatePost = () => {
  return (
    <>
    <div className="create-post">
        <div className="profile-photo">
          <img src={profile} alt="" />
        </div>
        <input type="text" placeholder="What's on your mind?" id="create-post" />
        <input type="submit" value="Post" className="btn btn-primary" />
      </div>
    </>
  )
}

export default CreatePost