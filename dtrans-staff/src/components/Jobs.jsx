import React, { useEffect } from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faCar } from '@fortawesome/free-solid-svg-icons';
import MenuBar from './Menubar'
import Sidebar from './Sidebar'

function All() {
  const preventDefault = (event) => {
    // event.preventDefault(); // Prevents the default behavior of the anchor tag
    // Additional functionality can be added here if needed
  };

  const showAlert = () => {
    window.showAlert();
  }

  useEffect(() => {

  }, []);

  return (
    <>
      <div className="page-wraper">

        <Sidebar />


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
                      <div className="swiper-slide" style={{ paddingBottom: "2px", marginRight: "10px" }}>
                        <a href="#" className="categore-box style-1">
                          <span className="title">Fri</span>
                          <span className="title">16</span>
                        </a>
                      </div>
                      <div className="swiper-slide" style={{ paddingBottom: "2px", marginRight: "10px" }}>
                        <a href="#" className="categore-box style-1">
                          <span className="title">Fri</span>
                          <span className="title">16</span>
                        </a>
                      </div>
                      <div className="swiper-slide" style={{ paddingBottom: "2px", marginRight: "10px" }}>
                        <a href="#" className="categore-box style-1">
                          <span className="title">Fri</span>
                          <span className="title">16</span>
                        </a>
                      </div>
                      <div className="swiper-slide" style={{ paddingBottom: "2px", marginRight: "10px" }}>
                        <a href="#" className="categore-box style-1">
                          <span className="title">Fri</span>
                          <span className="title">16</span>
                        </a>
                      </div>
                      <div className="swiper-slide" style={{ paddingBottom: "2px", marginRight: "10px" }}>
                        <a href="#" className="categore-box style-1">
                          <span className="title">Fri</span>
                          <span className="title">16</span>
                        </a>
                      </div>
                      <div className="swiper-slide" style={{ paddingBottom: "2px", marginRight: "10px" }}>
                        <a href="#" className="categore-box style-1">
                          <span className="title">Fri</span>
                          <span className="title">16</span>
                        </a>
                      </div>
                      <div className="swiper-slide" style={{ paddingBottom: "2px", marginRight: "10px" }}>
                        <a href="#" className="categore-box style-1">
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
                    <div className="item-media media media-50" style={{ marginRight: "0" }}>
                      <a href="#" onClick={preventDefault} className="menu-toggler">
                        <FontAwesomeIcon icon={faCar} size='2x' />
                      </a>
                    </div>
                    <div className="item-inner pt-2">
                      <div className="item-title-row" style={{ marginBottom: "0" }}>
                        <h6 className="item-title" style={{ color: "var(--title)" }}><a href="#">Job Confirmed</a></h6>
                      </div>
                      <div className="item-footer" style={{ textAlign: "center" }}>
                        <h6 className="me-3">5</h6>
                      </div>
                    </div>
                  </div>
                  <div className="item-content" style={{ width: "50%", height: "50px", marginLeft: "3px", borderRadius: "10px", backgroundColor: "#ffd427" }}>
                    <div className="item-media media media-50" style={{ marginRight: "0" }}>
                      <a href="#" onClick={preventDefault} className="menu-toggler">
                        <FontAwesomeIcon icon={faCar} size='2x' />
                      </a>
                    </div>
                    <div className="item-inner pt-2">
                      <div className="item-title-row" style={{ marginBottom: "0" }}>
                        <h6 className="item-title"><a href="#">Job Pending</a></h6>
                      </div>
                      <div className="item-footer">
                        <h6 className="me-3">2</h6>
                      </div>
                    </div>
                  </div>
                </div>
                {/* <!-- Item box Start --> */}

                <div className="item-list recent-jobs-list">
                  {/* <h4 className="title my-4">Job Details</h4> */}

                  <ul>
                  <li style={{ border: "1px solid var(--title)", borderRadius: "10px", margin:"5px 0" }}>
                      <div className="item-content">
                        <div className="item-inner" style={{ margin: "10px 0" }}>
                          <div className="d-flex align-items-center">
                            <div className="item-media media media-40" style={{ marginLeft: "0", marginRight: "15px" }}>
                              <img src="/images/food/pic4.png" alt="logo" />
                            </div>
                            <div className="item-title-row" >
                              <div className="item-footer" style={{ marginBottom: "0" }}>
                                <div className="d-flex align-items-center">
                                  <h6 className="me-3">Steve Bowen</h6>
                                </div>
                              </div>
                              <div className="item-subtitle">2023-05-07 13:45 PM</div>
                            </div>
                          </div>

                          <div className="item-title-row">
                            <div className="item-footer" style={{ marginBottom: "0" }}>
                              <div className="d-flex align-items-center">
                                <h6 className="me-3">Job No : 123456</h6>
                              </div>
                              <div className="d-flex align-items-center">
                                <h6 className="me-3">Type : Collection</h6>
                              </div>
                            </div>
                          </div>
                          <div className="item-footer">
                            <div className="d-flex align-items-center">
                              <div className="item-subtitle">From : ABC Supplier, 21 Taglore Lane #10 Singapore 4557869</div>
                            </div>
                            <div className="d-flex align-items-center">
                              <button className="btn btn-sm success" style={{ backgroundColor: "green", color: "var(--bg-white)", padding: "5px 4px" }}>Confirmed</button>
                            </div>
                          </div>
                        </div>
                      </div>
                    </li>
                    <li style={{ border: "1px solid var(--title)", borderRadius: "10px", margin:"5px 0" }}>
                      <div className="item-content">
                        <div className="item-inner" style={{ margin: "10px 0" }}>
                          <div className="d-flex align-items-center">
                            <div className="item-media media media-40" style={{ marginLeft: "0", marginRight: "15px" }}>
                              <img src="/images/food/pic4.png" alt="logo" />
                            </div>
                            <div className="item-title-row" >
                              <div className="item-footer" style={{ marginBottom: "0" }}>
                                <div className="d-flex align-items-center">
                                  <h6 className="me-3">Steve Bowen</h6>
                                </div>
                              </div>
                              <div className="item-subtitle">2023-05-07 13:45 PM</div>
                            </div>
                          </div>

                          <div className="item-title-row">
                            <div className="item-footer" style={{ marginBottom: "0" }}>
                              <div className="d-flex align-items-center">
                                <h6 className="me-3">Job No : 123456</h6>
                              </div>
                              <div className="d-flex align-items-center">
                                <h6 className="me-3">Type : Collection</h6>
                              </div>
                            </div>
                          </div>
                          <div className="item-footer">
                            <div className="d-flex align-items-center">
                              <div className="item-subtitle">From : ABC Supplier, 21 Taglore Lane #10 Singapore 4557869</div>
                            </div>
                            <div className="d-flex align-items-center">
                              <button className="btn btn-sm success" style={{ backgroundColor: "red", color: "var(--bg-white)", padding: "5px 4px" }}>Transfer another</button>
                            </div>
                          </div>
                        </div>
                      </div>
                    </li>
                    <li style={{ border: "1px solid var(--title)", borderRadius: "10px", margin:"5px 0" }}>
                      <div className="item-content">
                        <div className="item-inner" style={{ margin: "10px 0" }}>
                          <div className="d-flex align-items-center">
                            <div className="item-media media media-40" style={{ marginLeft: "0", marginRight: "15px" }}>
                              <img src="/images/food/pic4.png" alt="logo" />
                            </div>
                            <div className="item-title-row" >
                              <div className="item-footer" style={{ marginBottom: "0" }}>
                                <div className="d-flex align-items-center">
                                  <h6 className="me-3">Steve Bowen</h6>
                                </div>
                              </div>
                              <div className="item-subtitle">2023-05-07 13:45 PM</div>
                            </div>
                          </div>

                          <div className="item-title-row">
                            <div className="item-footer" style={{ marginBottom: "0" }}>
                              <div className="d-flex align-items-center">
                                <h6 className="me-3">Job No : 123456</h6>
                              </div>
                              <div className="d-flex align-items-center">
                                <h6 className="me-3">Type : Collection</h6>
                              </div>
                            </div>
                          </div>
                          <div className="item-footer">
                            <div className="d-flex align-items-center">
                              <div className="item-subtitle">From : ABC Supplier, 21 Taglore Lane #10 Singapore 4557869</div>
                            </div>
                            <div className="d-flex align-items-center">
                              <button className="btn btn-sm success" style={{ backgroundColor: "red", color: "var(--bg-white)", padding: "5px 4px" }}>Transfer another</button>
                            </div>
                          </div>
                        </div>
                      </div>
                    </li>
                  </ul>
                </div>
              </div>
            </div>
          </div>

        </div>
        {/* <!-- Page Content End--> */}

        <MenuBar />

      </div>
    </>
  )
}

export default All
