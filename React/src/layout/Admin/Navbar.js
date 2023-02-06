import React from 'react'
import img4 from './assets/img/avatars/avatar-4.jpg'

const Navbar = () => {
  return (
    <>
      <nav className="navbar navbar-expand navbar-light navbar-bg">

        <div className="navbar-collapse collapse">
          <ul className="navbar-nav navbar-align">

            <li className="nav-item dropdown">
              <a className="nav-icon dropdown-toggle d-inline-block d-sm-none" href="#"
                data-bs-toggle="dropdown">
                <i class="fa-solid fa-bars"></i>
              </a>

              <a className="nav-link dropdown-toggle d-none d-sm-inline-block" href="#"
                data-bs-toggle="dropdown">
                <img src={img4} className="avatar img-fluid rounded me-1"
                  alt="Charles Hall" /> <span className="text-dark">Charles Hall</span>
              </a>
              <div className="dropdown-menu dropdown-menu-end">
                <a className="dropdown-item" href="pages-profile.html"><i class="fa-solid fa-user"></i> Profile</a>
                <a className="dropdown-item" href="#"><i class="fa-solid fa-chart-line"></i> Analytics</a>
                <div className="dropdown-divider"></div>
                <a className="dropdown-item" href="index.html"><i class="fa-solid fa-bars"></i> Settings & Privacy</a>
                <div className="dropdown-divider"></div>
                <a className="dropdown-item" href="#"><i class="fa-solid fa-arrow-right-from-bracket"></i> Log out</a>
              </div>
            </li>
          </ul>
        </div>
      </nav>
    </>
  )
}

export default Navbar
