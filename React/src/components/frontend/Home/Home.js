import React from 'react'

import Stories from './Stories'
import CreatePost from './CreatePost'
import Feeds from './Feeds'
import bg from '../assets/images/banner.jpg'

const Home = () => {
  return (
    <>
      <div className="bg-home-div">
        <img className='bg-home' src={bg} alt="" />
      </div>

      <CreatePost />

      <Feeds />
    </>
  )
}

export default Home
