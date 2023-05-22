import React, { useEffect } from 'react';

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

        <div className="menubar-area">
          <div className="toolbar-inner menubar-nav">
            <a href="notification.html" className="nav-link">
              <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" fill="#bfc9da" xmlns:v="https://vecta.io/nano"><path d="M12 1a7.5 7.5 0 0 0-7.5 7.5v5.85l-1.66 2.5A2.04 2.04 0 0 0 4.535 20h14.93a2.04 2.04 0 0 0 1.695-3.165L19.5 14.35V8.5A7.5 7.5 0 0 0 12 1zm0 22a3 3 0 0 0 2.825-2h-5.65A3 3 0 0 0 12 23z" /></svg>
            </a>
            <a href="order-list.html" className="nav-link">
              <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" fill="#bfc9da" xmlns:v="https://vecta.io/nano"><path d="M17.5.625h-15a2.25 2.25 0 0 0-2.25 2.25v14.25a2.25 2.25 0 0 0 2.25 2.25h15a2.25 2.25 0 0 0 2.25-2.25V2.875A2.25 2.25 0 0 0 17.5.625zM4.056 8.414a.75.75 0 0 1 .165-.817l2.25-2.25a.75.75 0 0 1 1.018.039.75.75 0 0 1 .039 1.018l-.967.971h8.314a.75.75 0 0 1 .75.75.75.75 0 0 1-.75.75H4.75a.75.75 0 0 1-.694-.461zm12.097 4.365l-2.25 2.25a.75.75 0 0 1-.243.187c-.093.045-.194.07-.298.074a.75.75 0 0 1-.559-.219.75.75 0 0 1-.219-.559c.004-.103.029-.205.074-.298a.75.75 0 0 1 .187-.243l.967-.971H5.5a.75.75 0 0 1-.75-.75.75.75 0 0 1 .75-.75h10.125a.75.75 0 0 1 .694.461.75.75 0 0 1-.165.817z" fill="#bfc9da" /></svg>
            </a>
            <a href="index.html" className="nav-link">
              <svg xmlns="http://www.w3.org/2000/svg" width="22" height="22" fill="none" xmlns:v="https://vecta.io/nano"><path d="M21.44 11.035a.75.75 0 0 1-.69.465H18.5V19a2.25 2.25 0 0 1-2.25 2.25h-3a.75.75 0 0 1-.75-.75V16a.75.75 0 0 0-.75-.75h-1.5a.75.75 0 0 0-.75.75v4.5a.75.75 0 0 1-.75.75h-3A2.25 2.25 0 0 1 3.5 19v-7.5H1.25a.75.75 0 0 1-.69-.465.75.75 0 0 1 .158-.818l9.75-9.75A.75.75 0 0 1 11 .246a.75.75 0 0 1 .533.222l9.75 9.75a.75.75 0 0 1 .158.818z" fill="#bfc9da" /></svg>
            </a>
            <a href="messages.html" className="nav-link">
              <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" fill="#bfc9da" xmlns:v="https://vecta.io/nano"><path d="M15 15.75a.75.75 0 1 0 0-1.5.75.75 0 1 0 0 1.5zm-6-6a.75.75 0 1 0 0-1.5.75.75 0 1 0 0 1.5zm13.5 0a.75.75 0 0 0 .75-.75V4.5a.75.75 0 0 0-.75-.75h-21a.75.75 0 0 0-.75.75V9a.75.75 0 0 0 .75.75c1.241 0 2.25 1.009 2.25 2.25s-1.01 2.25-2.25 2.25a.75.75 0 0 0-.75.75v4.5a.75.75 0 0 0 .75.75h21a.75.75 0 0 0 .75-.75V15a.75.75 0 0 0-.75-.75c-1.241 0-2.25-1.009-2.25-2.25s1.009-2.25 2.25-2.25zM6.75 9c0-1.24 1.01-2.25 2.25-2.25S11.25 7.76 11.25 9 10.241 11.25 9 11.25 6.75 10.241 6.75 9zM9 15.75a.75.75 0 0 1-.53-1.28l6-6a.75.75 0 0 1 1.06 1.06l-6 6a.75.75 0 0 1-.53.22zm6 1.5c-1.241 0-2.25-1.009-2.25-2.25s1.009-2.25 2.25-2.25 2.25 1.009 2.25 2.25-1.009 2.25-2.25 2.25z" /></svg>
            </a>
            <a href="profile.html" className="nav-link active">
              <svg xmlns="http://www.w3.org/2000/svg" width="16" height="21" fill="#bfc9da" xmlns:v="https://vecta.io/nano"><path d="M8 7.75a3.75 3.75 0 1 0 0-7.5 3.75 3.75 0 1 0 0 7.5zm7.5 9v1.5c-.002.199-.079.39-.217.532C13.61 20.455 8.57 20.5 8 20.5s-5.61-.045-7.282-1.718C.579 18.64.501 18.449.5 18.25v-1.5a7.5 7.5 0 1 1 15 0z" /></svg>
            </a>
          </div>
        </div>

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
