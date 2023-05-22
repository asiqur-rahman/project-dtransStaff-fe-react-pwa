import React, { useEffect } from 'react';
import MenuBar from './Menubar'
import Sidebar from './Sidebar'

function All() {
  const preventDefault = (event) => {
    // event.preventDefault(); // Prevents the default behavior of the anchor tag
    // Additional functionality can be added here if needed
  };

  useEffect(() => {

  }, []);

  return (
    <>
      <div className="page-wraper">

        <div id="preloader">
          <div className="spinner"></div>
        </div>

        <header className="header">
          <div className="main-bar">
            <div className="container">
              <div className="header-content">
                <div className="left-content">
                  <a href="#" className="back-btn">
                    <svg width="18" height="18" viewBox="0 0 10 16" fill="none" xmlns="http://www.w3.org/2000/svg">
                      <path d="M9.03033 0.46967C9.2966 0.735936 9.3208 1.1526 9.10295 1.44621L9.03033 1.53033L2.561 8L9.03033 14.4697C9.2966 14.7359 9.3208 15.1526 9.10295 15.4462L9.03033 15.5303C8.76406 15.7966 8.3474 15.8208 8.05379 15.6029L7.96967 15.5303L0.96967 8.53033C0.703403 8.26406 0.679197 7.8474 0.897052 7.55379L0.96967 7.46967L7.96967 0.46967C8.26256 0.176777 8.73744 0.176777 9.03033 0.46967Z" fill="#a19fa8" />
                    </svg>
                  </a>
                  <h5 className="mb-0 ms-2">Profile</h5>
                </div>
                <div className="mid-content">
                </div>
                <div className="right-content">
                </div>
              </div>
            </div>
          </div>
        </header>

        <div className="page-content bottom-content ">
          <div className="container profile-area">
            <div className="profile">
              <div className="media media-100">
                <img src="/images/message/pic6.jpg" alt="/" />
                <svg className="progress-style" height="100" width="100">
                  <circle id="round-1" cx="60" cy="60" r="50" stroke="#E8EFF3" strokeWidth="7" fill="none" />
                  <circle id="round-2" cx="60" cy="60" r="50" stroke="#C3AC58" strokeWidth="7" fill="none" />
                </svg>
              </div>
              <div className="mb-2">
                <h4>James Hawkins</h4>
                <h6 className="detail">GOLD MEMBER</h6>
              </div>
            </div>
            <div className="contact-section">
              <div className="d-flex justify-content-between align-item-center">
                <h5 className="title">Contacts</h5>
                <a href="#" className="btn-link">Edit</a>
              </div>
              <ul>
                <li>
                  <a href="messages.html">
                    <div className="icon-box">
                      <i className="fa-solid fa-phone"></i>
                    </div>
                    <div className="ms-3">
                      <div className="light-text">Mobile Phone</div>
                      <p className="mb-0">+12 345 678 92</p>
                    </div>
                  </a>
                </li>
                <li>
                  <a href="messages.html">
                    <div className="icon-box">
                      <i className="fa-solid fa-envelope"></i>
                    </div>
                    <div className="ms-3">
                      <div className="light-text">Email Address</div>
                      <p className="mb-0">jameshawkins@mail.com</p>
                    </div>
                  </a>
                </li>
                <li>
                  <a href="messages.html">
                    <div className="icon-box">
                      <i className="fa-solid fa-location-dot"></i>
                    </div>
                    <div className="ms-3">
                      <div className="light-text">Address</div>
                      <p className="mb-0">Franklin Avenue, Corner St.London, 24125151</p>
                    </div>
                  </a>
                </li>
              </ul>
            </div>
          </div>
        </div>

        <MenuBar/>

        <div className="offcanvas offcanvas-bottom" tabIndex="-1" id="offcanvasBottom">
          <div className="offcanvas-body small">
            <ul className="theme-color-settings">
              <li>
                <input className="filled-in" id="primary_color_8" name="theme_color" type="radio" value="color-primary" />
                <label htmlFor="primary_color_8"></label>
                <span>Default</span>
              </li>
              <li>
                <input className="filled-in" id="primary_color_2" name="theme_color" type="radio" value="color-green" />
                <label htmlFor="primary_color_2"></label>
                <span>Green</span>
              </li>
              <li>
                <input className="filled-in" id="primary_color_3" name="theme_color" type="radio" value="color-blue" />
                <label htmlFor="primary_color_3"></label>
                <span>Blue</span>
              </li>
              <li>
                <input className="filled-in" id="primary_color_4" name="theme_color" type="radio" value="color-pink" />
                <label htmlFor="primary_color_4"></label>
                <span>Pink</span>
              </li>
              <li>
                <input className="filled-in" id="primary_color_5" name="theme_color" type="radio" value="color-yellow" />
                <label htmlFor="primary_color_5"></label>
                <span>Yellow</span>
              </li>
              <li>
                <input className="filled-in" id="primary_color_6" name="theme_color" type="radio" value="color-orange" />
                <label htmlFor="primary_color_6"></label>
                <span>Orange</span>
              </li>
              <li>
                <input className="filled-in" id="primary_color_7" name="theme_color" type="radio" value="color-purple" />
                <label htmlFor="primary_color_7"></label>
                <span>Purple</span>
              </li>
              <li>
                <input className="filled-in" id="primary_color_1" name="theme_color" type="radio" value="color-red" />
                <label htmlFor="primary_color_1"></label>
                <span>Red</span>
              </li>
              <li>
                <input className="filled-in" id="primary_color_9" name="theme_color" type="radio" value="color-lightblue" />
                <label htmlFor="primary_color_9"></label>
                <span>Lightblue</span>
              </li>
              <li>
                <input className="filled-in" id="primary_color_10" name="theme_color" type="radio" value="color-teal" />
                <label htmlFor="primary_color_10"></label>
                <span>Teal</span>
              </li>
              <li>
                <input className="filled-in" id="primary_color_11" name="theme_color" type="radio" value="color-lime" />
                <label htmlFor="primary_color_11"></label>
                <span>Lime</span>
              </li>
              <li>
                <input className="filled-in" id="primary_color_12" name="theme_color" type="radio" value="color-deeporange" />
                <label htmlFor="primary_color_12"></label>
                <span>Deeporange</span>
              </li>
            </ul>
          </div>
        </div>
      </div>
    </>
  )
}

export default All
