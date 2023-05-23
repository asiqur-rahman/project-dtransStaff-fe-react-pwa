import React, { useEffect } from 'react';
import MenuBar from './Menubar'

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
        <header className="header">
        <div className="main-bar">
            <div className="container">
                <div className="header-content">
                    <div className="left-content">
                        <a href="/" className="back-btn">
                            <svg width="18" height="18" viewBox="0 0 10 16" fill="none" xmlns="http://www.w3.org/2000/svg">
								<path d="M9.03033 0.46967C9.2966 0.735936 9.3208 1.1526 9.10295 1.44621L9.03033 1.53033L2.561 8L9.03033 14.4697C9.2966 14.7359 9.3208 15.1526 9.10295 15.4462L9.03033 15.5303C8.76406 15.7966 8.3474 15.8208 8.05379 15.6029L7.96967 15.5303L0.96967 8.53033C0.703403 8.26406 0.679197 7.8474 0.897052 7.55379L0.96967 7.46967L7.96967 0.46967C8.26256 0.176777 8.73744 0.176777 9.03033 0.46967Z" fill="#a19fa8"/>
							</svg>
                        </a>
                        <h5 className="mb-0 ms-2 text-nowrap">Notification</h5>
                    </div>
                    <div className="mid-content">
                    </div>
                    <div className="right-content">
                    </div>
                </div>
            </div>
        </div>
    </header>

        {/* <!-- Page Content --> */}
        <div className="page-content bottom-content">
        <div className="container"> 
            <a href="profile.html" className="notification bg-success">
                <div className="notification-content item-list">
                    <div className="item-content">
                        <div className="media media-35">
                            <img src="/images/author/pic1.png" alt="image"/>
                        </div>
                        <div className="item-inner">
                            <h6 className="title">Lily MacDonald</h6>
                            <p className="mb-0">Lorem ipsum dolor sit ameet..</p>
                        </div>
                        <div  className="ms-auto font-10 text-white d-flex align-items-center">
                            <svg width="12" height="12" viewBox="0 0 12 12" fill="none" xmlns="http://www.w3.org/2000/svg">
                                <path d="M6 11C8.76142 11 11 8.76142 11 6C11 3.23858 8.76142 1 6 1C3.23858 1 1 3.23858 1 6C1 8.76142 3.23858 11 6 11Z" stroke="#fff" strokeLinecap="round" strokeLinejoin="round"></path>
                                <path d="M6 3V6L8 7" stroke="#fff" strokeLinecap="round" strokeLinejoin="round"></path>
                            </svg>
                            12 min ago
                        </div>
                    </div>
                </div>
            </a>
            <a  href="profile.html" className="notification bg-success">
                <div className="notification-content item-list">
                    <div className="item-content">
                        <div className="media media-35">
                            <img src="/images/avatar/1.jpg" alt="image"/>
                        </div>
                        <div className="item-inner">
                            <h6 className="title">Lily MacDonald</h6>
                            <p className="mb-0">Lorem ipsum dolor sit ameet..</p>
                        </div>
                        <div className="ms-auto font-10 text-white d-flex align-items-center">
                            <svg width="12" height="12" viewBox="0 0 12 12" fill="none" xmlns="http://www.w3.org/2000/svg">
                                <path d="M6 11C8.76142 11 11 8.76142 11 6C11 3.23858 8.76142 1 6 1C3.23858 1 1 3.23858 1 6C1 8.76142 3.23858 11 6 11Z" stroke="#fff" strokeLinecap="round" strokeLinejoin="round"></path>
                                <path d="M6 3V6L8 7" stroke="#fff" strokeLinecap="round" strokeLinejoin="round"></path>
                            </svg>
                            12 min ago
                        </div>
                    </div>
                </div>
            </a>
            <a href="profile.html" className="notification">
                <div className="notification-content item-list">
                    <div className="item-content">
                        <div className="media media-35">
                            <img src="/images/avatar/2.jpg" alt="image"/>
                        </div>
                        <div className="item-inner">
                            <h6 className="title">Lily MacDonald</h6>
                            <p className="mb-0">Lorem ipsum dolor sit ameet..</p>
                        </div>
                        <div className="ms-auto font-10 text-dark d-flex align-items-center">
                            <svg width="12" height="12" viewBox="0 0 12 12" fill="none" xmlns="http://www.w3.org/2000/svg">
                                <path d="M6 11C8.76142 11 11 8.76142 11 6C11 3.23858 8.76142 1 6 1C3.23858 1 1 3.23858 1 6C1 8.76142 3.23858 11 6 11Z" stroke="#787878" strokeLinecap="round" strokeLinejoin="round"></path>
                                <path d="M6 3V6L8 7" stroke="#787878" strokeLinecap="round" strokeLinejoin="round"></path>
                            </svg>
                            12 min ago
                        </div>
                    </div>
                </div>
            </a>
            <a href="profile.html" className="notification">
                <div className="notification-content item-list">
                    <div className="item-content">
                        <div className="media media-35">
                            <img src="/images/avatar/3.jpg" alt="image"/>
                        </div>
                        <div className="item-inner">
                            <h6 className="title">Lily MacDonald</h6>
                            <p className="mb-0">Lorem ipsum dolor sit ameet..</p>
                        </div>
                        <div className="ms-auto font-10 text-dark d-flex align-items-center">
                            <svg width="12" height="12" viewBox="0 0 12 12" fill="none" xmlns="http://www.w3.org/2000/svg">
                                <path d="M6 11C8.76142 11 11 8.76142 11 6C11 3.23858 8.76142 1 6 1C3.23858 1 1 3.23858 1 6C1 8.76142 3.23858 11 6 11Z" stroke="#787878" strokeLinecap="round" strokeLinejoin="round"></path>
                                <path d="M6 3V6L8 7" stroke="#787878" strokeLinecap="round" strokeLinejoin="round"></path>
                            </svg>
                            12 min ago
                        </div>
                    </div>
                </div>
            </a>
            <a href="profile.html" className="notification">
                <div className="notification-content item-list">
                    <div className="item-content">
                        <div className="media media-35">
                            <img src="/images/avatar/4.jpg" alt="image"/>
                        </div>
                        <div className="item-inner">
                            <h6 className="title">Lily MacDonald</h6>
                            <p className="mb-0">Lorem ipsum dolor sit ameet..</p>
                        </div>
                        <div className="ms-auto font-10 text-dark d-flex align-items-center">
                            <svg width="12" height="12" viewBox="0 0 12 12" fill="none" xmlns="http://www.w3.org/2000/svg">
                                <path d="M6 11C8.76142 11 11 8.76142 11 6C11 3.23858 8.76142 1 6 1C3.23858 1 1 3.23858 1 6C1 8.76142 3.23858 11 6 11Z" stroke="#787878" strokeLinecap="round" strokeLinejoin="round"></path>
                                <path d="M6 3V6L8 7" stroke="#787878" strokeLinecap="round" strokeLinejoin="round"></path>
                            </svg>
                            12 min ago
                        </div>
                    </div>
                </div>
            </a>
            <a href="profile.html" className="notification">
                <div className="notification-content item-list">
                    <div className="item-content">
                        <div className="media media-35">
                            <img src="/images/avatar/5.jpg" alt="image"/>
                        </div>
                        <div className="item-inner">
                            <h6 className="title">Lily MacDonald</h6>
                            <p className="mb-0">Lorem ipsum dolor sit ameet..</p>
                        </div>
                        <div className="ms-auto font-10 text-dark d-flex align-items-center">
                            <svg width="12" height="12" viewBox="0 0 12 12" fill="none" xmlns="http://www.w3.org/2000/svg">
                                <path d="M6 11C8.76142 11 11 8.76142 11 6C11 3.23858 8.76142 1 6 1C3.23858 1 1 3.23858 1 6C1 8.76142 3.23858 11 6 11Z" stroke="#787878" strokeLinecap="round" strokeLinejoin="round"></path>
                                <path d="M6 3V6L8 7" stroke="#787878" strokeLinecap="round" strokeLinejoin="round"></path>
                            </svg>
                            12 min ago
                        </div>
                    </div>
                </div>
            </a>
        </div>
    </div>
        {/* <!-- Page Content End--> */}

        <MenuBar/>

      </div>
    </>
  )
}

export default All
