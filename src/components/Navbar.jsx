import React, { useState, useEffect } from "react"
import { Link } from "react-router-dom";
import Logo from '/images/logo.png'
import Axios, { web as AxiosWeb } from '../helper/axios'

function Navbar() {
    const [menu, setMenu] = useState(false);
    useEffect(() => {
        AxiosWeb.get("/menuHead/menu")
            .then(result => {
                if (result.data.status == 200)
                    setMenu(result.data.data)
            })
    }, [])
    return (
        <>
            <div className="navbar-area">
                <div className="mobile-responsive-nav">
                    <div className="container">
                        <div className="mobile-responsive-menu">
                            <div className="logo">
                                <a href="index">
                                    <img style={{ height: "52px" }} src={Logo} className="main-logo" alt="logo" />
                                    <img style={{ height: "52px" }} src={Logo} className="white-logo" alt="logo" />
                                </a>
                            </div>
                        </div>
                    </div>
                </div>
                <div className="desktop-nav">
                    <div className="container-fluid">
                        <nav className="navbar navbar-expand-md navbar-light">
                            <a className="navbar-brand" href="/">
                                <img style={{ height: "52px" }} src={Logo} alt="logo" />
                            </a>
                            <div className="collapse navbar-collapse mean-menu" id="navbarSupportedContent">
                                <ul className="navbar-nav ms-auto">
                                    <li className="nav-item">
                                        <Link to="/" className="nav-link">Home</Link>
                                    </li>
                                    {menu && menu.map((item, i) => {
                                        return (
                                            <li className="nav-item" key={i}>
                                                <a href="#" className="nav-link dropdown-toggle">
                                                    {item.menuName}
                                                </a>
                                                <ul className="dropdown-menu">

                                                    {item.courseTypes.map((page, j) => {
                                                        return (
                                                            <li className="nav-item" key={j}>
                                                                <Link to={`/course-type/${page.id}`} className="nav-link">{page.courseTypeName}</Link>
                                                            </li>
                                                        )
                                                    })}

                                                    {item.eventTypes.map((page, j) => {
                                                        return (
                                                            <li className="nav-item" key={j}>
                                                                <Link to={`/event-type/${page.id}`} className="nav-link">{page.eventTypeName}</Link>
                                                            </li>
                                                        )
                                                    })}

                                                    {item.pages.map((page, j) => {
                                                        return (
                                                            <li className="nav-item" key={j}>
                                                                <Link to={`/${item.menuBreadcrumb}/${page.pageBreadcrumb}`} className="nav-link">{page.pageName}</Link>
                                                            </li>
                                                        )
                                                    })}

                                                    {item.menuBreadcrumb == "news-blogs" && <>
                                                        <li className="nav-item">
                                                            <Link to={`/${item.menuBreadcrumb}/news`} className="nav-link">Latest News</Link>
                                                        </li>
                                                        <li className="nav-item">
                                                            <Link to={`/${item.menuBreadcrumb}/blog`} className="nav-link">Blog</Link>
                                                        </li>
                                                    </>}

                                                </ul>
                                            </li>
                                        )
                                    })}
                                    {/* <li className="nav-item">
                                    <a href="#" className="nav-link dropdown-toggle">
                                        About Us
                                    </a>
                                    <ul className="dropdown-menu">
                                        <li className="nav-item">
                                            <Link to="/about-us/sus-plan" className="nav-link">Sus-Plan</Link>
                                        </li>
                                        <li className="nav-item">
                                            <Link to="/about-us/academic" className="nav-link">Academics</Link>
                                        </li>
                                        <li className="nav-item">
                                            <Link to="/about-us/resource" className="nav-link">Resources</Link>
                                        </li>
                                        <li className="nav-item">
                                            <Link to="/about-us/alumni" className="nav-link">ALUMNI</Link>
                                        </li>
                                    </ul>
                                </li>
                                <li className="nav-item">
                                    <a href="#" className="nav-link dropdown-toggle">
                                        Study
                                    </a>
                                    <ul className="dropdown-menu">
                                        <li className="nav-item">
                                            <Link to="/study" className="nav-link">Training Courses</Link>
                                        </li>
                                        <li className="nav-item">
                                            <Link to="/study" className="nav-link">Certificate Courses</Link>
                                        </li>
                                        <li className="nav-item">
                                            <Link to="/study" className="nav-link">Diploma Courses</Link>
                                        </li>
                                        <li className="nav-item">
                                            <Link to="/study" className="nav-link">PGD Courses</Link>
                                        </li>
                                    </ul>
                                </li>
                                <li className="nav-item">
                                    <a href="#" className="nav-link dropdown-toggle">
                                        Research
                                    </a>
                                    <ul className="dropdown-menu">
                                        <li className="nav-item">
                                            <a href="research-works" className="nav-link">Research Works</a>
                                        </li>
                                        <li className="nav-item">
                                            <a href="research-courses" className="nav-link">Research Courses</a>
                                        </li>
                                        <li className="nav-item">
                                            <a href="sustainability-management" className="nav-link">Sustainability Management</a>
                                        </li>
                                        <li className="nav-item">
                                            <a href="business-economics" className="nav-link">Business & Economics</a>
                                        </li>
                                        <li className="nav-item">
                                            <a href="customized-research" className="nav-link">Customized Research</a>
                                        </li>
                                    </ul>
                                </li>
                                <li className="nav-item">
                                    <a href="#" className="nav-link dropdown-toggle">
                                        Stories
                                    </a>
                                    <ul className="dropdown-menu">
                                        <li className="nav-item">
                                            <a href="success-stories" className="nav-link">Success Stories</a>
                                        </li>
                                        <li className="nav-item">
                                            <a href="sustainable-innovation" className="nav-link">Sustainable Innovation</a>
                                        </li>
                                    </ul>
                                </li>
                                <li className="nav-item">
                                    <a href="#" className="nav-link dropdown-toggle">
                                        Events
                                    </a>
                                    <ul className="dropdown-menu">
                                        <li className="nav-item">
                                            <a href="trainings" className="nav-link">Trainings</a>
                                        </li>
                                        <li className="nav-item">
                                            <a href="workshops" className="nav-link">Workshops</a>
                                        </li>
                                        <li className="nav-item">
                                            <a href="collaboration" className="nav-link">Collaboration</a>
                                        </li>
                                    </ul>
                                </li>
                                <li className="nav-item">
                                    <a href="#" className="nav-link dropdown-toggle">
                                        News & Blog
                                    </a>
                                    <ul className="dropdown-menu">
                                        <li className="nav-item">
                                            <a href="latest-news" className="nav-link">Latest News</a>
                                        </li>
                                        <li className="nav-item">
                                            <a href="blog" className="nav-link">Blog</a>
                                        </li>
                                    </ul>
                                </li>

                                <li className="nav-item">
                                    <a href="#" className="nav-link dropdown-toggle">
                                        Registration
                                    </a>
                                    <ul className="dropdown-menu">
                                        <li className="nav-item">
                                            <a href="#" className="nav-link">General Query</a>
                                        </li>
                                        <li className="nav-item">
                                            <a href="#" className="nav-link">Request Admission</a>
                                        </li>
                                        <li className="nav-item">
                                            <a href="#" className="nav-link">Enrollment</a>
                                        </li>
                                    </ul>
                                </li> */}

                                    <li>
                                        <a href="login" className="default-btn btn">My Account</a>
                                    </li>

                                </ul>
                                <div className="others-options">
                                    <div className="icon">
                                        <i className="ri-menu-3-fill" data-bs-toggle="modal" data-bs-target="#sidebarModal"></i>
                                    </div>
                                </div>
                            </div>
                        </nav>
                    </div>
                </div>
                <div className="others-option-for-responsive">
                    <div className="container">
                        <div className="dot-menu">
                            <div className="inner">
                                <div className="icon">
                                    <i className="ri-menu-3-fill" data-bs-toggle="modal" data-bs-target="#sidebarModal"></i>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>

                <div className="sidebarModal modal right fade" id="sidebarModal" role="dialog">
                    <div className="modal-dialog" role="document">
                        <div className="modal-content">
                            <button type="button" className="close" data-bs-dismiss="modal"><i className="ri-close-line"></i></button>
                            <div className="modal-body">
                                <a href="index.html">
                                    <img style={{ height: "52px" }} src="/images/logo.png" className="main-logo" alt="logo" />
                                    <img style={{ height: "52px" }} src="/images/logo.png" className="white-logo" alt="logo" />
                                </a>
                                <div className="sidebar-content">

                                    <p>Sus-Plan project aims to aware professionals and professional bodies in developing and maintaining sustainable operations.</p>
                                    <div className="sidebar-btn">
                                        <a href="contact.html" className="default-btn">Let’s Talk</a>
                                    </div>
                                </div>
                                <div className="sidebar-contact-info">
                                    <h3>Contact Information</h3>
                                    <ul className="info-list">
                                        <li><i className="ri-phone-fill"></i> <a href="tel:9901234567">+990-123-4567</a></li>
                                        <li><i className="ri-mail-line"></i><a href="#"><span>info@sustainability.com.bd</span></a></li>
                                        <li><i className="ri-map-pin-line"></i> 04, Sobhanbag, Mirpur Road, <br /> Dhaka-1207, Bangladesh</li>
                                    </ul>
                                </div>
                                <ul className="sidebar-social-list">
                                    <li>
                                        <a href="https://www.facebook.com/" target="_blank"><i className="flaticon-facebook"></i></a>
                                    </li>
                                    <li>
                                        <a href="https://www.twitter.com/" target="_blank"><i className="flaticon-twitter"></i></a>
                                    </li>
                                    <li>
                                        <a href="https://linkedin.com/?lang=en" target="_blank"><i className="flaticon-linkedin"></i></a>
                                    </li>
                                    <li>
                                        <a href="https://instagram.com/?lang=en" target="_blank"><i className="flaticon-instagram"></i></a>
                                    </li>
                                </ul>
                                <div className="contact-form">
                                    <h3>Ready to Get Started?</h3>
                                    <form id="contactForm">
                                        <div className="row">
                                            <div className="col-lg-12 col-md-6">
                                                <div className="form-group">
                                                    <input type="text" name="name" className="form-control" required data-error="Please enter your name" placeholder="Your name" />
                                                    <div className="help-block with-errors"></div>
                                                </div>
                                            </div>
                                            <div className="col-lg-12 col-md-6">
                                                <div className="form-group">
                                                    <input type="email" name="email" className="form-control" required data-error="Please enter your email" placeholder="Your email address" />
                                                    <div className="help-block with-errors"></div>
                                                </div>
                                            </div>
                                            <div className="col-lg-12 col-md-12">
                                                <div className="form-group">
                                                    <input type="text" name="phone_number" className="form-control" required data-error="Please enter your phone number" placeholder="Your phone number" />
                                                    <div className="help-block with-errors"></div>
                                                </div>
                                            </div>
                                            <div className="col-lg-12 col-md-12">
                                                <div className="form-group">
                                                    <textarea name="message" className="form-control" cols="30" rows="6" required data-error="Please enter your message" placeholder="Write your message..."></textarea>
                                                    <div className="help-block with-errors"></div>
                                                </div>
                                            </div>
                                            <div className="col-lg-12 col-md-12">
                                                <button type="submit" className="default-btn">Send Message<span></span></button>
                                                <div id="msgSubmit" className="h3 text-center hidden"></div>
                                                <div className="clearfix"></div>
                                            </div>
                                        </div>
                                    </form>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </>
    )
}

export default Navbar
