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
        {/* <!-- Header End --> */}

        {/* <!-- Preloader --> */}
        <div id="preloader">
          <div className="spinner"></div>
        </div>
        {/* <!-- Preloader end--> */}

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
