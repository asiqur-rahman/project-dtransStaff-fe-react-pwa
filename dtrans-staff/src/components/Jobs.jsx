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
        {/* <!-- Header --> */}
        <header className="header transparent">
          <div className="main-bar">
            <div className="container">
              <div className="header-content">
                <div className="left-content">
                  <a href="#" onClick={preventDefault} className="menu-toggler">
                    <svg xmlns="http://www.w3.org/2000/svg" height="30px" viewBox="0 0 24 24" width="30px" fill="#000000"><path d="M13 14v6c0 .55.45 1 1 1h6c.55 0 1-.45 1-1v-6c0-.55-.45-1-1-1h-6c-.55 0-1 .45-1 1zm-9 7h6c.55 0 1-.45 1-1v-6c0-.55-.45-1-1-1H4c-.55 0-1 .45-1 1v6c0 .55.45 1 1 1zM3 4v6c0 .55.45 1 1 1h6c.55 0 1-.45 1-1V4c0-.55-.45-1-1-1H4c-.55 0-1 .45-1 1zm12.95-1.6L11.7 6.64c-.39.39-.39 1.02 0 1.41l4.25 4.25c.39.39 1.02.39 1.41 0l4.25-4.25c.39-.39.39-1.02 0-1.41L17.37 2.4c-.39-.39-1.03-.39-1.42 0z" /></svg>
                  </a>
                </div>
                <div className="mid-content">
                </div>
                <div className="right-content">
                  <a href="#" onClick={preventDefault} className="theme-color" data-bs-toggle="offcanvas" data-bs-target="#offcanvasBottom" aria-controls="offcanvasBottom">
                    <svg className="color-plate" xmlns="http://www.w3.org/2000/svg" height="30px" viewBox="0 0 24 24" width="30px" fill="#000000">
                      <path d="M12 3c-4.97 0-9 4.03-9 9s4.03 9 9 9c.83 0 1.5-.67 1.5-1.5 0-.39-.15-.74-.39-1.01-.23-.26-.38-.61-.38-.99 0-.83.67-1.5 1.5-1.5H16c2.76 0 5-2.24 5-5 0-4.42-4.03-8-9-8zm-5.5 9c-.83 0-1.5-.67-1.5-1.5S5.67 9 6.5 9 8 9.67 8 10.5 7.33 12 6.5 12zm3-4C8.67 8 8 7.33 8 6.5S8.67 5 9.5 5s1.5.67 1.5 1.5S10.33 8 9.5 8zm5 0c-.83 0-1.5-.67-1.5-1.5S13.67 5 14.5 5s1.5.67 1.5 1.5S15.33 8 14.5 8zm3 4c-.83 0-1.5-.67-1.5-1.5S16.67 9 17.5 9s1.5.67 1.5 1.5-.67 1.5-1.5 1.5z" />
                    </svg>
                  </a>
                  <a href="#" onClick={preventDefault} className="theme-btn">
                    <svg className="dark" xmlns="http://www.w3.org/2000/svg" enableBackground="new 0 0 24 24" height="24px" viewBox="0 0 24 24" width="24px" fill="#000000"><g></g><g><g><g><path d="M11.57,2.3c2.38-0.59,4.68-0.27,6.63,0.64c0.35,0.16,0.41,0.64,0.1,0.86C15.7,5.6,14,8.6,14,12s1.7,6.4,4.3,8.2 c0.32,0.22,0.26,0.7-0.09,0.86C16.93,21.66,15.5,22,14,22c-6.05,0-10.85-5.38-9.87-11.6C4.74,6.48,7.72,3.24,11.57,2.3z" /></g></g></g>
                    </svg>
                    <svg className="light" xmlns="http://www.w3.org/2000/svg" enableBackground="new 0 0 24 24" height="24px" viewBox="0 0 24 24" width="24px" fill="#000000"><rect fill="none" height="24" width="24" /><path d="M12,7c-2.76,0-5,2.24-5,5s2.24,5,5,5s5-2.24,5-5S14.76,7,12,7L12,7z M2,13l2,0c0.55,0,1-0.45,1-1s-0.45-1-1-1l-2,0 c-0.55,0-1,0.45-1,1S1.45,13,2,13z M20,13l2,0c0.55,0,1-0.45,1-1s-0.45-1-1-1l-2,0c-0.55,0-1,0.45-1,1S19.45,13,20,13z M11,2v2 c0,0.55,0.45,1,1,1s1-0.45,1-1V2c0-0.55-0.45-1-1-1S11,1.45,11,2z M11,20v2c0,0.55,0.45,1,1,1s1-0.45,1-1v-2c0-0.55-0.45-1-1-1 C11.45,19,11,19.45,11,20z M5.99,4.58c-0.39-0.39-1.03-0.39-1.41,0c-0.39,0.39-0.39,1.03,0,1.41l1.06,1.06 c0.39,0.39,1.03,0.39,1.41,0s0.39-1.03,0-1.41L5.99,4.58z M18.36,16.95c-0.39-0.39-1.03-0.39-1.41,0c-0.39,0.39-0.39,1.03,0,1.41 l1.06,1.06c0.39,0.39,1.03,0.39,1.41,0c0.39-0.39,0.39-1.03,0-1.41L18.36,16.95z M19.42,5.99c0.39-0.39,0.39-1.03,0-1.41 c-0.39-0.39-1.03-0.39-1.41,0l-1.06,1.06c-0.39,0.39-0.39,1.03,0,1.41s1.03,0.39,1.41,0L19.42,5.99z M7.05,18.36 c0.39-0.39,0.39-1.03,0-1.41c-0.39-0.39-1.03-0.39-1.41,0l-1.06,1.06c-0.39,0.39-0.39,1.03,0,1.41s1.03,0.39,1.41,0L7.05,18.36z" /></svg>
                  </a>
                </div>
              </div>
            </div>
          </div>
        </header>
        {/* <!-- Header End --> */}

        {/* <!-- Preloader --> */}
        <div id="preloader">
          <div className="spinner"></div>
        </div>
        {/* <!-- Preloader end--> */}

        {/* <!-- Sidebar --> */}
        <div className="sidebar">
          <div className="author-box">
            <div className="dz-media">
              <img src="/images/message/pic5.jpg" alt="author-image" />
            </div>
            <div className="dz-info">
              <span>Good Morning</span>
              <h5 className="name">Henry Decosta</h5>
            </div>
          </div>
          <ul className="nav navbar-nav">
            <li className="nav-label">Main Menu</li>
            <li><a className="nav-link" href="welcome.html">
              <span className="dz-icon">
                <svg xmlns="http://www.w3.org/2000/svg" height="24px" viewBox="0 0 24 24" width="24px" fill="#000000">
                  <path d="M13.35 20.13c-.76.69-1.93.69-2.69-.01l-.11-.1C5.3 15.27 1.87 12.16 2 8.28c.06-1.7.93-3.33 2.34-4.29 2.64-1.8 5.9-.96 7.66 1.1 1.76-2.06 5.02-2.91 7.66-1.1 1.41.96 2.28 2.59 2.34 4.29.14 3.88-3.3 6.99-8.55 11.76l-.1.09z" /></svg>
              </span>
              <span>Welcome</span>
            </a></li>
            <li><a className="nav-link" href="index.html">
              <span className="dz-icon">
                <svg xmlns="http://www.w3.org/2000/svg" height="24px" viewBox="0 0 24 24" width="24px" fill="#000000">
                  <path d="M10 19v-5h4v5c0 .55.45 1 1 1h3c.55 0 1-.45 1-1v-7h1.7c.46 0 .68-.57.33-.87L12.67 3.6c-.38-.34-.96-.34-1.34 0l-8.36 7.53c-.34.3-.13.87.33.87H5v7c0 .55.45 1 1 1h3c.55 0 1-.45 1-1z" />
                </svg>
              </span>
              <span>Home</span>
            </a></li>
            <li><a className="nav-link" href="pages.html">
              <span className="dz-icon">
                <svg xmlns="http://www.w3.org/2000/svg" height="24px" viewBox="0 0 24 24" width="24px" fill="#000000"><path d="M12.6 18.06c-.36.28-.87.28-1.23 0l-6.15-4.78c-.36-.28-.86-.28-1.22 0-.51.4-.51 1.17 0 1.57l6.76 5.26c.72.56 1.73.56 2.46 0l6.76-5.26c.51-.4.51-1.17 0-1.57l-.01-.01c-.36-.28-.86-.28-1.22 0l-6.15 4.79zm.63-3.02l6.76-5.26c.51-.4.51-1.18 0-1.58l-6.76-5.26c-.72-.56-1.73-.56-2.46 0L4.01 8.21c-.51.4-.51 1.18 0 1.58l6.76 5.26c.72.56 1.74.56 2.46-.01z" /></svg>
              </span>
              <span>Pages</span>
            </a></li>
            <li><a className="nav-link" href="ui-components.html">
              <span className="dz-icon">
                <svg xmlns="http://www.w3.org/2000/svg" height="24px" viewBox="0 0 24 24" width="24px" fill="#000000"><path d="M4 8h4V4H4v4zm6 12h4v-4h-4v4zm-6 0h4v-4H4v4zm0-6h4v-4H4v4zm6 0h4v-4h-4v4zm6-10v4h4V4h-4zm-6 4h4V4h-4v4zm6 6h4v-4h-4v4zm0 6h4v-4h-4v4z" /></svg>
              </span>
              <span>Components</span>
            </a></li>
            <li><a className="nav-link" href="notification.html">
              <span className="dz-icon">
                <svg xmlns="http://www.w3.org/2000/svg" height="24px" viewBox="0 0 24 24" width="24px" fill="#000000"><path d="M18 16v-5c0-3.07-1.64-5.64-4.5-6.32V4c0-.83-.68-1.5-1.51-1.5S10.5 3.17 10.5 4v.68C7.63 5.36 6 7.92 6 11v5l-1.3 1.29c-.63.63-.19 1.71.7 1.71h13.17c.89 0 1.34-1.08.71-1.71L18 16zm-6.01 6c1.1 0 2-.9 2-2h-4c0 1.1.89 2 2 2zM6.77 4.73c.42-.38.43-1.03.03-1.43-.38-.38-1-.39-1.39-.02C3.7 4.84 2.52 6.96 2.14 9.34c-.09.61.38 1.16 1 1.16.48 0 .9-.35.98-.83.3-1.94 1.26-3.67 2.65-4.94zM18.6 3.28c-.4-.37-1.02-.36-1.4.02-.4.4-.38 1.04.03 1.42 1.38 1.27 2.35 3 2.65 4.94.07.48.49.83.98.83.61 0 1.09-.55.99-1.16-.38-2.37-1.55-4.48-3.25-6.05z" /></svg>
              </span>
              <span>Notification</span>
              <span className="badge badge-circle badge-danger">1</span>
            </a></li>
            <li><a className="nav-link" href="profile.html">
              <span className="dz-icon">
                <svg xmlns="http://www.w3.org/2000/svg" height="24px" viewBox="0 0 24 24" width="24px" fill="#000000"><path d="M12 12c2.21 0 4-1.79 4-4s-1.79-4-4-4-4 1.79-4 4 1.79 4 4 4zm0 2c-2.67 0-8 1.34-8 4v1c0 .55.45 1 1 1h14c.55 0 1-.45 1-1v-1c0-2.66-5.33-4-8-4z" /></svg>
              </span>
              <span>Profile</span>
            </a></li>
            <li><a className="nav-link" href="messages.html">
              <span className="dz-icon">
                <svg xmlns="http://www.w3.org/2000/svg" height="24px" viewBox="0 0 24 24" width="24px" fill="#000000"><path d="M20 2H4c-1.1 0-1.99.9-1.99 2L2 22l4-4h14c1.1 0 2-.9 2-2V4c0-1.1-.9-2-2-2zM7 9h10c.55 0 1 .45 1 1s-.45 1-1 1H7c-.55 0-1-.45-1-1s.45-1 1-1zm6 5H7c-.55 0-1-.45-1-1s.45-1 1-1h6c.55 0 1 .45 1 1s-.45 1-1 1zm4-6H7c-.55 0-1-.45-1-1s.45-1 1-1h10c.55 0 1 .45 1 1s-.45 1-1 1z" /></svg>
              </span>
              <span>Chat</span>
              <span className="badge badge-circle badge-info">5</span>
            </a></li>
            <li><a className="nav-link" href="onboading.html">
              <span className="dz-icon">
                <svg xmlns="http://www.w3.org/2000/svg" enableBackground="new 0 0 24 24" height="24px" viewBox="0 0 24 24" width="24px" fill="#000000"><g></g><g><g><path d="M5,5h6c0.55,0,1-0.45,1-1v0c0-0.55-0.45-1-1-1H5C3.9,3,3,3.9,3,5v14c0,1.1,0.9,2,2,2h6c0.55,0,1-0.45,1-1v0 c0-0.55-0.45-1-1-1H5V5z" /><path d="M20.65,11.65l-2.79-2.79C17.54,8.54,17,8.76,17,9.21V11h-7c-0.55,0-1,0.45-1,1v0c0,0.55,0.45,1,1,1h7v1.79 c0,0.45,0.54,0.67,0.85,0.35l2.79-2.79C20.84,12.16,20.84,11.84,20.65,11.65z" /></g></g></svg>
              </span>
              <span>Logout</span>
            </a></li>
            <li className="nav-label">Settings</li>
            <li className="nav-color" data-bs-toggle="offcanvas" data-bs-target="#offcanvasBottom" aria-controls="offcanvasBottom">
              <a href="#" onClick={preventDefault} className="nav-link">
                <span className="dz-icon">
                  <svg className="color-plate" xmlns="http://www.w3.org/2000/svg" height="30px" viewBox="0 0 24 24" width="30px" fill="#000000">
                    <path d="M12 3c-4.97 0-9 4.03-9 9s4.03 9 9 9c.83 0 1.5-.67 1.5-1.5 0-.39-.15-.74-.39-1.01-.23-.26-.38-.61-.38-.99 0-.83.67-1.5 1.5-1.5H16c2.76 0 5-2.24 5-5 0-4.42-4.03-8-9-8zm-5.5 9c-.83 0-1.5-.67-1.5-1.5S5.67 9 6.5 9 8 9.67 8 10.5 7.33 12 6.5 12zm3-4C8.67 8 8 7.33 8 6.5S8.67 5 9.5 5s1.5.67 1.5 1.5S10.33 8 9.5 8zm5 0c-.83 0-1.5-.67-1.5-1.5S13.67 5 14.5 5s1.5.67 1.5 1.5S15.33 8 14.5 8zm3 4c-.83 0-1.5-.67-1.5-1.5S16.67 9 17.5 9s1.5.67 1.5 1.5-.67 1.5-1.5 1.5z" />
                  </svg>
                </span>
                <span>Highlights</span>
              </a>
            </li>
            <li>
              <div className="mode">
                <span className="dz-icon">
                  <svg className="dark" xmlns="http://www.w3.org/2000/svg" enableBackground="new 0 0 24 24" height="24px" viewBox="0 0 24 24" width="24px" fill="#000000"><g></g><g><g><g><path d="M11.57,2.3c2.38-0.59,4.68-0.27,6.63,0.64c0.35,0.16,0.41,0.64,0.1,0.86C15.7,5.6,14,8.6,14,12s1.7,6.4,4.3,8.2 c0.32,0.22,0.26,0.7-0.09,0.86C16.93,21.66,15.5,22,14,22c-6.05,0-10.85-5.38-9.87-11.6C4.74,6.48,7.72,3.24,11.57,2.3z" /></g></g></g>
                  </svg>
                </span>
                <span className="text-dark">Dark Mode</span>
                <div className="custom-switch">
                  <input type="checkbox" className="switch-input theme-btn" id="toggle-dark-menu" />
                  <label className="custom-switch-label" htmlFor="toggle-dark-menu"></label>
                </div>
              </div>
            </li>
          </ul>
          <div className="sidebar-bottom">
            <h6 className="name">Foodia - Food Restaurant</h6>
            <p>App Version 1.0</p>
          </div>
        </div>
        {/* <!-- Sidebar End --> */}


        {/* <!-- Page Content --> */}
        <div className="page-content">

          <div className="content-inner pt-0">
            <div className="container fb">

              {/* <!-- Dashboard Area --> */}
              <div className="dashboard-area pt-4">
                {/* <!-- Categorie --> */}
                <div className="swiper-btn-center-lr" style={{ marginBottom: "10px" }}>
                  <div className="swiper-container mt-4 categorie-swiper categorie-swiper-custom">
                    <div className="swiper-wrapper">
                      <div className="swiper-slide" style={{ paddingBottom: "2px", marginRight:"10px" }}>
                        <a href="product.html" className="categore-box style-1">
                          <span className="title">Fri</span>
                          <span className="title">16</span>
                        </a>
                      </div>
                      <div className="swiper-slide" style={{ paddingBottom: "2px", marginRight:"10px" }}>
                      <a href="product.html" className="categore-box style-1">
                          <span className="title">Fri</span>
                          <span className="title">16</span>
                        </a>
                      </div>
                      <div className="swiper-slide" style={{ paddingBottom: "2px", marginRight:"10px" }}>
                      <a href="product.html" className="categore-box style-1">
                          <span className="title">Fri</span>
                          <span className="title">16</span>
                        </a>
                      </div>
                      <div className="swiper-slide" style={{ paddingBottom: "2px", marginRight:"10px" }}>
                        <a href="product.html" className="categore-box style-1">
                          <span className="title">Fri</span>
                          <span className="title">16</span>
                        </a>
                      </div>
                      <div className="swiper-slide" style={{ paddingBottom: "2px", marginRight:"10px" }}>
                        <a href="product.html" className="categore-box style-1">
                          <span className="title">Fri</span>
                          <span className="title">16</span>
                        </a>
                      </div>
                      <div className="swiper-slide" style={{ paddingBottom: "2px", marginRight:"10px" }}>
                        <a href="product.html" className="categore-box style-1">
                          <span className="title">Fri</span>
                          <span className="title">16</span>
                        </a>
                      </div>
                      <div className="swiper-slide" style={{ paddingBottom: "2px", marginRight:"10px" }}>
                        <a href="product.html" className="categore-box style-1">
                          <span className="title">Fri</span>
                          <span className="title">16</span>
                        </a>
                      </div>
                    </div>
                  </div>
                </div>
                {/* <!-- Categorie End --> */}

                {/* <!-- Item box Start --> */}
                <div className="item-list style-2 recent-jobs-list" style={{ display: "flex" }}>
                  <div className="item-content" style={{ width: "50%", height: "50px", marginRight: "3px", borderRadius: "10px", backgroundColor: "#ffd427" }}>
                    <div className="item-media media media-50" style={{marginRight:"0"}}>
                      <a href="#" onClick={preventDefault} className="menu-toggler">
                        <svg xmlns="http://www.w3.org/2000/svg" height="30px" viewBox="0 0 24 24" width="30px" fill="#000000"><path d="M13 14v6c0 .55.45 1 1 1h6c.55 0 1-.45 1-1v-6c0-.55-.45-1-1-1h-6c-.55 0-1 .45-1 1zm-9 7h6c.55 0 1-.45 1-1v-6c0-.55-.45-1-1-1H4c-.55 0-1 .45-1 1v6c0 .55.45 1 1 1zM3 4v6c0 .55.45 1 1 1h6c.55 0 1-.45 1-1V4c0-.55-.45-1-1-1H4c-.55 0-1 .45-1 1zm12.95-1.6L11.7 6.64c-.39.39-.39 1.02 0 1.41l4.25 4.25c.39.39 1.02.39 1.41 0l4.25-4.25c.39-.39.39-1.02 0-1.41L17.37 2.4c-.39-.39-1.03-.39-1.42 0z" /></svg>
                      </a>
                    </div>
                    <div className="item-inner pt-2">
                      <div className="item-title-row" style={{marginBottom:"5px"}}>
                        <h4 className="item-title"><a href="order-list.html">Job Confirmed</a></h4>
                      </div>
                      <div className="item-footer" style={{textAlign:"center"}}>
                          <h4 className="me-3">5</h4>
                      </div>
                    </div>
                  </div>
                  <div className="item-content" style={{ width: "50%", height: "50px", marginLeft: "3px", borderRadius: "10px", backgroundColor: "#ffd427" }}>
                    <div className="item-media media media-50" style={{marginRight:"0"}}>
                      <a href="#" onClick={preventDefault} className="menu-toggler">
                        <svg xmlns="http://www.w3.org/2000/svg" height="30px" viewBox="0 0 24 24" width="30px" fill="#000000"><path d="M13 14v6c0 .55.45 1 1 1h6c.55 0 1-.45 1-1v-6c0-.55-.45-1-1-1h-6c-.55 0-1 .45-1 1zm-9 7h6c.55 0 1-.45 1-1v-6c0-.55-.45-1-1-1H4c-.55 0-1 .45-1 1v6c0 .55.45 1 1 1zM3 4v6c0 .55.45 1 1 1h6c.55 0 1-.45 1-1V4c0-.55-.45-1-1-1H4c-.55 0-1 .45-1 1zm12.95-1.6L11.7 6.64c-.39.39-.39 1.02 0 1.41l4.25 4.25c.39.39 1.02.39 1.41 0l4.25-4.25c.39-.39.39-1.02 0-1.41L17.37 2.4c-.39-.39-1.03-.39-1.42 0z" /></svg>
                      </a>
                    </div>
                    <div className="item-inner pt-2">
                      <div className="item-title-row" style={{marginBottom:"5px"}}>
                        <h4 className="item-title"><a href="#">Job Pending</a></h4>
                      </div>
                      <div className="item-footer">
                          <h4 className="me-3">2</h4>
                      </div>
                    </div>
                  </div>
                </div>
                {/* <!-- Item box Start --> */}

                <div className="item-list recent-jobs-list">
                  {/* <h4 className="title my-4">Job Details</h4> */}

                  <ul>
                    <li style={{border:"1px solid var(--title)", borderRadius:"10px"}}>
                      <div className="item-content">
                        <div className="item-inner" style={{margin:"10px 0"}}>
                          <div className="item-title-row"  style={{marginBottom:"0"}}>
                          <div className="item-footer">
                            <div className="d-flex align-items-center">
                              <h4 className="me-3">Steve Bowen</h4>
                            </div>
                            <div className="d-flex align-items-center">
                              <h6 className="me-3">Type : Collection</h6>
                            </div>
                          </div>
                            <div className="item-subtitle">2023-05-07 13:45 PM</div>
                          </div>
                          <div className="item-footer">
                            <div className="d-flex align-items-center">
                              <h6 className="me-3">Job No : 123456</h6>
                            </div>
                            <div className="d-flex align-items-center">
                              <button className="btn btn-sm success" style={{backgroundColor:"red", color:"var(--bg-white)", padding:"5px 4px"}}>Transfer another</button>
                            </div>
                          </div>
                            <div className="item-subtitle">From : ABC Supplier, 21 Taglore Lane #10 Singapore 4557869</div>
                        </div>
                        <div className="item-media media media-60"><img src="/images/food/pic4.png" alt="logo" /></div>
                      </div>
                    </li>
                    <li style={{border:"1px solid var(--title)", borderRadius:"10px"}}>
                    <div className="item-content">
                        <div className="item-inner" style={{margin:"10px 0"}}>
                          <div className="item-title-row"  style={{marginBottom:"0"}}>
                          <div className="item-footer">
                            <div className="d-flex align-items-center">
                              <h4 className="me-3">Steve Bowen</h4>
                            </div>
                            <div className="d-flex align-items-center">
                              <h6 className="me-3">Type : Collection</h6>
                            </div>
                          </div>
                            <div className="item-subtitle">2023-05-07 13:45 PM</div>
                          </div>
                          <div className="item-footer">
                            <div className="d-flex align-items-center">
                              <h6 className="me-3">Job No : 123456</h6>
                            </div>
                            <div className="d-flex align-items-center">
                              <button className="btn btn-sm success" style={{backgroundColor:"green", color:"var(--bg-white)", padding:"5px 4px"}}>Confirmed</button>
                            </div>
                          </div>
                            <div className="item-subtitle">From : ABC Supplier, 21 Taglore Lane #10 Singapore 4557869</div>
                        </div>
                        <div className="item-media media media-60"><img src="/images/food/pic4.png" alt="logo" /></div>
                      </div>
                    </li>
                  </ul>
                </div>
              </div>
            </div>
          </div>

        </div>
        {/* <!-- Page Content End--> */}

        {/* <!-- Menubar --> */}
        <div className="menubar-area">
          <div className="toolbar-inner menubar-nav">
            <a href="notification.html" className="nav-link">
              <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" fill="#bfc9da" xmlns:v="https://vecta.io/nano"><path d="M12 1a7.5 7.5 0 0 0-7.5 7.5v5.85l-1.66 2.5A2.04 2.04 0 0 0 4.535 20h14.93a2.04 2.04 0 0 0 1.695-3.165L19.5 14.35V8.5A7.5 7.5 0 0 0 12 1zm0 22a3 3 0 0 0 2.825-2h-5.65A3 3 0 0 0 12 23z" /></svg>
            </a>
            <a href="order-list.html" className="nav-link">
              <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" fill="#bfc9da" xmlns:v="https://vecta.io/nano"><path d="M17.5.625h-15a2.25 2.25 0 0 0-2.25 2.25v14.25a2.25 2.25 0 0 0 2.25 2.25h15a2.25 2.25 0 0 0 2.25-2.25V2.875A2.25 2.25 0 0 0 17.5.625zM4.056 8.414a.75.75 0 0 1 .165-.817l2.25-2.25a.75.75 0 0 1 1.018.039.75.75 0 0 1 .039 1.018l-.967.971h8.314a.75.75 0 0 1 .75.75.75.75 0 0 1-.75.75H4.75a.75.75 0 0 1-.694-.461zm12.097 4.365l-2.25 2.25a.75.75 0 0 1-.243.187c-.093.045-.194.07-.298.074a.75.75 0 0 1-.559-.219.75.75 0 0 1-.219-.559c.004-.103.029-.205.074-.298a.75.75 0 0 1 .187-.243l.967-.971H5.5a.75.75 0 0 1-.75-.75.75.75 0 0 1 .75-.75h10.125a.75.75 0 0 1 .694.461.75.75 0 0 1-.165.817z" fill="#bfc9da" /></svg>
            </a>
            <a href="index.html" className="nav-link active">
              <svg xmlns="http://www.w3.org/2000/svg" width="22" height="22" fill="none" xmlns:v="https://vecta.io/nano"><path d="M21.44 11.035a.75.75 0 0 1-.69.465H18.5V19a2.25 2.25 0 0 1-2.25 2.25h-3a.75.75 0 0 1-.75-.75V16a.75.75 0 0 0-.75-.75h-1.5a.75.75 0 0 0-.75.75v4.5a.75.75 0 0 1-.75.75h-3A2.25 2.25 0 0 1 3.5 19v-7.5H1.25a.75.75 0 0 1-.69-.465.75.75 0 0 1 .158-.818l9.75-9.75A.75.75 0 0 1 11 .246a.75.75 0 0 1 .533.222l9.75 9.75a.75.75 0 0 1 .158.818z" fill="#bfc9da" /></svg>
            </a>
            <a href="messages.html" className="nav-link">
              <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" fill="#bfc9da" xmlns:v="https://vecta.io/nano"><path d="M15 15.75a.75.75 0 1 0 0-1.5.75.75 0 1 0 0 1.5zm-6-6a.75.75 0 1 0 0-1.5.75.75 0 1 0 0 1.5zm13.5 0a.75.75 0 0 0 .75-.75V4.5a.75.75 0 0 0-.75-.75h-21a.75.75 0 0 0-.75.75V9a.75.75 0 0 0 .75.75c1.241 0 2.25 1.009 2.25 2.25s-1.01 2.25-2.25 2.25a.75.75 0 0 0-.75.75v4.5a.75.75 0 0 0 .75.75h21a.75.75 0 0 0 .75-.75V15a.75.75 0 0 0-.75-.75c-1.241 0-2.25-1.009-2.25-2.25s1.009-2.25 2.25-2.25zM6.75 9c0-1.24 1.01-2.25 2.25-2.25S11.25 7.76 11.25 9 10.241 11.25 9 11.25 6.75 10.241 6.75 9zM9 15.75a.75.75 0 0 1-.53-1.28l6-6a.75.75 0 0 1 1.06 1.06l-6 6a.75.75 0 0 1-.53.22zm6 1.5c-1.241 0-2.25-1.009-2.25-2.25s1.009-2.25 2.25-2.25 2.25 1.009 2.25 2.25-1.009 2.25-2.25 2.25z" /></svg>
            </a>
            <a href="profile.html" className="nav-link">
              <svg xmlns="http://www.w3.org/2000/svg" width="16" height="21" fill="#bfc9da" xmlns:v="https://vecta.io/nano"><path d="M8 7.75a3.75 3.75 0 1 0 0-7.5 3.75 3.75 0 1 0 0 7.5zm7.5 9v1.5c-.002.199-.079.39-.217.532C13.61 20.455 8.57 20.5 8 20.5s-5.61-.045-7.282-1.718C.579 18.64.501 18.449.5 18.25v-1.5a7.5 7.5 0 1 1 15 0z" /></svg>
            </a>
          </div>
        </div>
        {/* <!-- Menubar --> */}

        {/* <!-- Theme Color Settings --> */}
        <div className="offcanvas offcanvas-bottom" tabIndex="-1" id="offcanvasBottom">
          <div className="offcanvas-body small">
            <ul className="theme-color-settings">
              <li>
                <input className="filled-in" id="primary_color_8" name="theme_color" type="radio" defaultValue="color-primary" />
                <label htmlFor="primary_color_8"></label>
                <span>Default</span>
              </li>
              <li>
                <input className="filled-in" id="primary_color_2" name="theme_color" type="radio" defaultValue="color-green" />
                <label htmlFor="primary_color_2"></label>
                <span>Green</span>
              </li>
              <li>
                <input className="filled-in" id="primary_color_3" name="theme_color" type="radio" defaultValue="color-blue" />
                <label htmlFor="primary_color_3"></label>
                <span>Blue</span>
              </li>
              <li>
                <input className="filled-in" id="primary_color_4" name="theme_color" type="radio" defaultValue="color-pink" />
                <label htmlFor="primary_color_4"></label>
                <span>Pink</span>
              </li>
              <li>
                <input className="filled-in" id="primary_color_5" name="theme_color" type="radio" defaultValue="color-yellow" />
                <label htmlFor="primary_color_5"></label>
                <span>Yellow</span>
              </li>
              <li>
                <input className="filled-in" id="primary_color_6" name="theme_color" type="radio" defaultValue="color-orange" />
                <label htmlFor="primary_color_6"></label>
                <span>Orange</span>
              </li>
              <li>
                <input className="filled-in" id="primary_color_7" name="theme_color" type="radio" defaultValue="color-purple" />
                <label htmlFor="primary_color_7"></label>
                <span>Purple</span>
              </li>
              <li>
                <input className="filled-in" id="primary_color_1" name="theme_color" type="radio" defaultValue="color-red" />
                <label htmlFor="primary_color_1"></label>
                <span>Red</span>
              </li>
              <li>
                <input className="filled-in" id="primary_color_9" name="theme_color" type="radio" defaultValue="color-lightblue" />
                <label htmlFor="primary_color_9"></label>
                <span>Lightblue</span>
              </li>
              <li>
                <input className="filled-in" id="primary_color_10" name="theme_color" type="radio" defaultValue="color-teal" />
                <label htmlFor="primary_color_10"></label>
                <span>Teal</span>
              </li>
              <li>
                <input className="filled-in" id="primary_color_11" name="theme_color" type="radio" defaultValue="color-lime" />
                <label htmlFor="primary_color_11"></label>
                <span>Lime</span>
              </li>
              <li>
                <input className="filled-in" id="primary_color_12" name="theme_color" type="radio" defaultValue="color-deeporange" />
                <label htmlFor="primary_color_12"></label>
                <span>Deeporange</span>
              </li>
            </ul>
          </div>
        </div>
        {/* <!-- Theme Color Settings End --> */}

        {/* <!-- CART --> */}
        <div className="offcanvas offcanvas-bottom rounded-0" tabIndex="-1" id="offcanvasBottom2">
          <button type="button" className="btn-close text-reset" data-bs-dismiss="offcanvas" aria-label="Close">
            <i className="fa-solid fa-xmark"></i>
          </button>
          <div className="offcanvas-body container fixed">
            <div className="item-list style-2">
              <ul>
                <li>
                  <div className="item-content">
                    <div className="item-media media media-60">
                      <img src="/images/food/pic6.png" alt="logo" />
                    </div>
                    <div className="item-inner">
                      <div className="item-title-row">
                        <h6 className="item-title"><a href="order-list.html">Chicken Briyani Haji Mahmud</a></h6>
                        <div className="item-subtitle">Coffe, Milk</div>
                      </div>
                      <div className="item-footer">
                        <div className="d-flex align-items-center">
                          <h6 className="me-3">$ 4.0</h6>
                          <del className="off-text"><h6>$ 8.9</h6></del>
                        </div>
                        <div className="d-flex align-items-center">
                          <div className="dz-stepper border-1 ">
                            <input className="stepper" type="text" defaultValue="3" name="demo3" />
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                </li>
                <li>
                  <div className="item-content">
                    <div className="item-media media media-60">
                      <img src="/images/food/food1.png" alt="logo" />
                    </div>
                    <div className="item-inner">
                      <div className="item-title-row">
                        <h6 className="item-title"><a href="order-list.html">Deluxe Super Burger Spicy</a></h6>
                        <div className="item-subtitle">Coffe, Milk</div>
                      </div>
                      <div className="item-footer">
                        <div className="d-flex align-items-center">
                          <h6 className="me-3">$ 7.2</h6>
                          <del className="off-text"><h6>$ 8.9</h6></del>
                        </div>
                        <div className="d-flex align-items-center">
                          <div className="dz-stepper border-1 ">
                            <input className="stepper" type="text" defaultValue="3" name="demo3" />
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                </li>
                <li>
                  <div className="item-content">
                    <div className="item-media media media-60">
                      <img src="/images/food/pic3.png" alt="logo" />
                    </div>
                    <div className="item-inner">
                      <div className="item-title-row">
                        <h6 className="item-title"><a href="order-list.html">Coffee Mocha / White Mocha</a></h6>
                        <div className="item-subtitle">Coffe, Milk</div>
                      </div>
                      <div className="item-footer">
                        <div className="d-flex align-items-center">
                          <h6 className="me-3">$ 12.0</h6>
                          <del className="off-text"><h6>$ 8.9</h6></del>
                        </div>
                        <div className="d-flex align-items-center">
                          <div className="dz-stepper border-1 ">
                            <input className="stepper" type="text" defaultValue="3" name="demo3" />
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                </li>
              </ul>
            </div>
            <div className="view-title">
              <div className="container">
                <ul>
                  <li>
                    <a href="#" onClick={preventDefault} className="promo-bx">
                      Apply Promotion Code
                      <span>2 Promos</span>
                    </a>
                  </li>
                  <li>
                    <span>Subtotal</span>
                    <span>$54.76</span>
                  </li>
                  <li>
                    <span>TAX (2%)</span>
                    <span>-$1.08</span>
                  </li>
                  <li>
                    <h5>Total</h5>
                    <h5>$53.68</h5>
                  </li>
                </ul>
                <a href="payment.html" className="btn btn-primary btn-rounded btn-block flex-1 ms-2">CONFIRM</a>
              </div>
            </div>
          </div>
        </div>
        {/* <!-- CART --> */}
      </div>
    </>
  )
}

export default All
