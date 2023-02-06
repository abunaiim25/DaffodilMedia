import React from 'react'
import profile from '../assets/images/profile-1.jpg'
import profile2 from '../assets/images/profile-2.jpg'
import profile3 from '../assets/images/profile-3.jpg'
import profile4 from '../assets/images/profile-4.jpg'
import profile5 from '../assets/images/profile-5.jpg'
import profile6 from '../assets/images/profile-6.jpg'
import story from '../assets/images/story-1.jpg'
import story2 from '../assets/images/story-2.jpg'
import story3 from '../assets/images/story-3.jpg'
import story4 from '../assets/images/story-4.jpg'
import story5 from '../assets/images/story-5.jpg'
import story6 from '../assets/images/story-6.jpg'

var storyBg = {
    backgroundImage: `url(${story})`
  };
  var storyBg2 = {
    backgroundImage: `url(${story2})`
  };
  var storyBg3 = {
    backgroundImage: `url(${story3})`
  };
  var storyBg4 = {
    backgroundImage: `url(${story4})`
  };
  var storyBg5 = {
    backgroundImage: `url(${story5})`
  };
  var storyBg6 = {
    backgroundImage: `url(${story6})`
  };
  

const Stories = () => {
    return (
        <>
            <div className="stories" >

                <div className="story" style={storyBg}>
                    <div className="profile-photo">
                        <img src={profile} alt="" />
                    </div>
                    <p className="name">Your Story</p>
                </div>
                <div className="story" style={storyBg2}>
                    <div className="profile-photo">
                        <img src={profile2} alt="" />
                    </div>
                    <p className="name">Alia khan</p>
                </div>
                <div className="story" style={storyBg3}>
                    <div className="profile-photo">
                        <img src={profile3} alt="" />
                    </div>
                    <p className="name">Alina Islam</p>
                </div>
                <div className="story" style={storyBg4}>
                    <div className="profile-photo">
                        <img src={profile4} alt="" />
                    </div>
                    <p className="name">Kausar</p>
                </div>
                <div className="story" style={storyBg5}>
                    <div className="profile-photo">
                        <img src={profile5} alt="" />
                    </div>
                    <p className="name">Aimona</p>
                </div>
                <div className="story" style={storyBg6}>
                    <div className="profile-photo">
                        <img src={profile6} alt="" />
                    </div>
                    <p className="name">Alina Islam</p>
                </div>
            </div>
        </>
    )
}

export default Stories