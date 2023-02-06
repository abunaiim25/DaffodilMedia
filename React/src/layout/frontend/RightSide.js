import React from 'react'
import profile2 from './assets/images/profile-2.jpg'
import profile3 from './assets/images/profile-3.jpg'
import profile4 from './assets/images/profile-4.jpg'
import profile5 from './assets/images/profile-5.jpg'
import profile6 from './assets/images/profile-6.jpg'


const RightSide = () => {
    return (
        <>
            <div className="fixed-right">
                <div className="messages">
                    <div className="heading">
                        <h4>Messages</h4>
                        <i className="uil uil-edit"></i>
                    </div>


                    <div className="search-bar">
                        <i className="uil uil-search"></i>
                        <input type="search" placeholder="Searching..." id="messages-search" />
                    </div>


                    <div className="category">
                        <h6 className="active">Primary</h6>
                        <h6>General</h6>
                        <h6 className="message-requests">Requests(7)</h6>
                    </div>


                    <div className="message">
                        <div className="profile-photo">
                            <img src={profile2} alt="" />
                            <div className="active"></div>
                        </div>
                        <div className="message-body">
                            <h5>Edem Quist</h5>
                            <p className="text-muted">Just wake up bruth</p>
                        </div>
                    </div>
                    <div className="message">
                        <div className="profile-photo">
                            <img src={profile3} alt="" />
                            <div className="active"></div>
                        </div>
                        <div className="message-body">
                            <h5>Anil Kumar</h5>
                            <p className="text-bold">2 new messages</p>
                        </div>
                    </div>
                    <div className="message">
                        <div className="profile-photo">
                            <img src={profile4} alt="" />
                        </div>
                        <div className="message-body">
                            <h5>Edem Quist</h5>
                            <p className="text-muted">lol you are</p>
                        </div>
                    </div>
                    <div className="message">
                        <div className="profile-photo">
                            <img src={profile5} alt="" />
                        </div>
                        <div className="message-body">
                            <h5>Edem Quist</h5>
                            <p className="text-bold">Birthbay Tonorrow!</p>
                        </div>
                    </div>

                </div>
            </div>


        </>
    )
}

export default RightSide