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

        <Sidebar/>


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
