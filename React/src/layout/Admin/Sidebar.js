import React from 'react'
import { Link } from 'react-router-dom'

const Sidebar = () => {
    return (
        <>
            <nav id="sidebar" className="sidebar js-sidebar">
                <div className="sidebar-content js-simplebar">
                    <Link to="/admin/dashboard" className="sidebar-brand" >
                        <i class="fa-solid fa-a"></i> <span className="align-middle hidden_mobile"> Admin Panel</span>
                    </Link>

                    <ul className="sidebar-nav">
                        <li className="sidebar-header">
                            Pages
                        </li>

                        <li className="sidebar-item active">
                            <Link to="/admin/dashboard" className="sidebar-link">
                            <i class="fa-solid fa-laptop-code"></i> <span className="align-middle hidden_mobile">Dashboard</span>
                            </Link>
                        </li>

                        <li className="sidebar-item nav-item">
                            <Link to="/" target="_blank" className="sidebar-link" >
                            <i class="fa-solid fa-house"></i>  <span className="align-middle hidden_mobile">Home</span>
                            </Link>
                        </li>

                        <li className="sidebar-item nav-item dropdown active">
                            <a className="sidebar-link nav-link dropdown-toggle " href="#" id="navbarDropdown" role="button" data-bs-toggle="dropdown" aria-expanded="false">
                            <i className="fa-solid fa-user"></i> <span className="align-middle hidden_mobile">Dropdown</span>
                            </a>
                            <ul className="sidebar-nav dropdown-menu dropdownItem " aria-labelledby="navbarDropdown">
                                <li className="dropdownHead"><Link className="dropdown-item  sidebar-link" href="#">  <i className="fa-solid fa-house"></i> <span className="align-middle">Action</span></Link></li>

                                <li><Link className="dropdown-item sidebar-link" href="#">  <i className="fa-solid fa-house"></i> <span className="align-middle">Action Here</span></Link></li>
                            </ul>
                        </li>

                        <li className="sidebar-item nav-item">
                            <Link className="sidebar-link" href="pages-sign-in.html">
                                <i class="fa-solid fa-house"></i> <span className="align-middle hidden_mobile">Sign In</span>
                            </Link>
                        </li>

                        <li className="sidebar-item">
                            <Link className="sidebar-link" href="pages-sign-up.html">
                                <i class="fa-solid fa-house"></i> <span className="align-middle hidden_mobile">Sign Up</span>
                            </Link>
                        </li>

                        <li className="sidebar-item">
                            <Link className="sidebar-link" href="pages-blank.html">
                                <i class="fa-solid fa-house"></i> <span className="align-middle hidden_mobile">Blank</span>
                            </Link>
                        </li>

                        <li className="sidebar-header">
                            Tools
                        </li>

                        <li className="sidebar-item">
                            <Link className="sidebar-link" href="ui-buttons.html">
                                <i class="fa-solid fa-house"></i> <span className="align-middle hidden_mobile">Buttons</span>
                            </Link>
                        </li>

                        <li className="sidebar-item">
                            <Link className="sidebar-link" href="ui-forms.html">
                                <i class="fa-solid fa-house"></i> <span className="align-middle hidden_mobile">Forms</span>
                            </Link>
                        </li>

                    </ul>


                </div>
            </nav>
        </>

    )
}

export default Sidebar
