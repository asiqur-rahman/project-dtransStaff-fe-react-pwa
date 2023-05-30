import React, { useEffect } from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faCircle, faCircleCheck } from '@fortawesome/free-solid-svg-icons';
import MenuBar from './Menubar';
import Sidebar from './Sidebar';

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

        <Sidebar/>


        {/* <!-- Page Content --> */}
        <div className="page-content">

          <div className="content-inner pt-0">
            <div className="container fb">

              {/* <!-- Dashboard Area --> */}
              <div className="dashboard-area pt-4">

                {/* <!-- Item box Start --> */}
                <div className="item-list style-2 recent-jobs-list" style={{ display: "flex", marginTop: "20px"}}>
                  <div className="item-content" style={{ width: "33%", height: "50px", marginRight: "3px", borderRadius: "10px", background: "linear-gradient(to right, #00BFFF, #007BFF)" }}>
                    <div className="item-media media media-50" style={{ marginRight: "0" }}>
                      <a href="#" onClick={preventDefault} className="menu-toggler">
                        <FontAwesomeIcon icon={faCircleCheck} color='white' />
                      </a>
                    </div>
                    <div className="item-inner pt-3">
                      <div className="item-title-row" style={{ margin: "5px", textAlign: "center" }}>
                        <h6 className="item-title"><a href="#" style={{ color: "white", fontSize:"18px" }}>Job Confirmed</a></h6>
                      </div>
                    </div>
                  </div>
                  <div className="item-content" style={{ width: "33%", height: "50px", marginRight: "3px", borderRadius: "10px", background: "linear-gradient(to right, #00BFFF, #007BFF)" }}>
                    <div className="item-media media media-50" style={{ marginRight: "0" }}>
                      <a href="#" onClick={preventDefault} className="menu-toggler">
                        <FontAwesomeIcon icon={faCircle} color='white'/>
                      </a>
                    </div>
                    <div className="item-inner pt-3">
                      <div className="item-title-row" style={{ margin: "5px", textAlign: "center" }}>
                          <h6 className="item-title"><a href="#" style={{ color: "white", fontSize:"18px" }}>Job Confirmed</a></h6>
                      </div>
                    </div>
                  </div>

                  <div className="item-content" style={{ width: "33%", height: "50px", marginRight: "3px", borderRadius: "10px" , background: "linear-gradient(to right, #00BFFF, #007BFF)"}}>
                    <div className="item-media media media-50" style={{ marginRight: "0" }}>
                      <a href="#" onClick={preventDefault} className="menu-toggler">
                        <FontAwesomeIcon icon={faCircle} color='white'/>
                      </a>
                    </div>
                    <div className="item-inner pt-3">
                      <div className="item-title-row" style={{ margin: "5px", textAlign: "center" }}>
                          <h6 className="item-title"><a href="#" style={{ color: "white", fontSize:"18px" }}>Job Confirmed</a></h6>
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
