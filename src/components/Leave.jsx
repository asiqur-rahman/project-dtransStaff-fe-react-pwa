import React, { useEffect, useState, useRef } from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faCircle, faCircleCheck, faArrowRight } from '@fortawesome/free-solid-svg-icons';
import SignatureCanvas from 'react-signature-canvas';
import MenuBar from './Menubar';
import Sidebar from './Sidebar';
import { useLocation, useNavigate } from 'react-router-dom';
import * as common from '../utils/common.utils'
import axios from '../utils/axios.utils'
import './JobDetails.css';

function All(props) {
  const location = useLocation();
  const navigate = useNavigate();
  const queryParams = new URLSearchParams(location.search);
  const [jobDetails, setJobDetails] = useState(false);
  const [collectionJob, setCollectionJob] = useState(false);
  const [deliveryJob, setDeliveryJob] = useState(false);
  const [jos, setJos] = useState(false);
  const [jor, setJor] = useState(false);


  return (
    <>
      <div className="page-wraper">

        <Sidebar menuName="My Leave"/>


        {/* <!-- Page Content --> */}
        <div className="page-content">

          <div className="content-inner pt-0">
            <div className="container fb">

              {/* <!-- Dashboard Area --> */}
              <div className="dashboard-area pt-4">

                <div className="item-list recent-jobs-list pt-3">
                  {/* <h4 className="title my-4">Job Details</h4> */}

                  <ul>


                    <li style={{ borderRadius: "10px", margin: "5px 0" }}>
                      <div className="item-content" style={{ marginTop: "10px" }}>
                        <div className="item-inner" style={{ margin: "10px 0" }}>

                          <div className="item-title-row">
                            <div className="item-footer" style={{ marginBottom: "0" }}>
                              <div className="d-flex align-items-center">
                                <h6 className="me-3" style={{ fontSize: "12px" }}><span style={{ fontSize: "11px", fontWeight: "normal" }}>Current Leave Balance</span><br /></h6>
                              </div>

                              <div className="d-flex align-items-center">
                              </div>
                            </div>
                          </div>
                          <div className="item-title-row">
                            <div className="item-footer" style={{ marginBottom: "0" }}>
                              <div className="d-flex align-items-center">
                                <h6 className="me-3" style={{ fontSize: "12px" }}><span style={{ fontSize: "18px", fontWeight: "normal" }}>12</span><br />Annual Leave</h6>
                              </div>
                              <div className="d-flex align-items-center">
                                <h6 className="me-3" style={{ fontSize: "12px" }}><span style={{ fontSize: "18px", fontWeight: "normal" }}>10.5</span><br />Sick Leave</h6>
                              </div>
                              <div className="d-flex align-items-center">
                                <h6 className="me-3"></h6>
                              </div>
                            </div>
                          </div>
                        </div>
                      </div>
                      <div >

                        <div className="order-status" style={{ marginTop: "0" }}>
                          <ul className="dz-timeline style-2">
                            <h5 className="title" style={{ textAlign: 'center', marginTop: "15px" }}>2020</h5>
                            <li className="timeline-item" style={{ margin: '0', padding: "8px 0" }}>
                              <div className="d-flex align-items-center" style={{ background: "white", padding: "10px 0" }}>

                                <div className="item-title-row" style={{ width: "100%" }}>
                                  <div className="item-footer" style={{ marginBottom: "0", width: "inherit" }}>
                                    <div className="d-flex align-items-center">
                                      <h6 className="me-3" style={{ marginBottom: "0" }}>2 Day(s) AL</h6>
                                    </div>
                                  </div>
                                </div>

                                <div className="item-title-row" style={{ width: "150%" }}>
                                  <div className="item-footer" style={{ marginBottom: "0", width: "inherit" }}>
                                    <div className="d-flex align-items-center">
                                      <h6 className="me-3" style={{ marginBottom: "0" }}>19 Jan,2020 - 20 Jan,2020 </h6>
                                    </div>
                                  </div>
                                </div>

                                <div className="item-title-row" style={{ width: "100%", textAlign: "end", paddingRight: "5%" }}>
                                  <FontAwesomeIcon icon={faArrowRight} color='var(--primary)' className='icon' style={{ cursor: "pointer" }} />
                                </div>
                              </div>
                              <hr style={{ margin: '0' }} />
                              <div className="d-flex align-items-center" style={{ background: "white", padding: "10px 0" }}>

                                <div className="item-title-row" style={{ width: "100%" }}>
                                  <div className="item-footer" style={{ marginBottom: "0", width: "inherit" }}>
                                    <div className="d-flex align-items-center">
                                      <h6 className="me-3" style={{ marginBottom: "0" }}>2 Day(s) AL</h6>
                                    </div>
                                  </div>
                                </div>

                                <div className="item-title-row" style={{ width: "150%" }}>
                                  <div className="item-footer" style={{ marginBottom: "0", width: "inherit" }}>
                                    <div className="d-flex align-items-center">
                                      <h6 className="me-3" style={{ marginBottom: "0" }}>19 Jan,2020 - 20 Jan,2020 </h6>
                                    </div>
                                  </div>
                                </div>

                                <div className="item-title-row" style={{ width: "100%", textAlign: "end", paddingRight: "5%" }}>
                                  <FontAwesomeIcon icon={faArrowRight} color='var(--primary)' className='icon' style={{ cursor: "pointer" }} />
                                </div>
                              </div>
                              <hr style={{ margin: '0' }} />
                            </li>

                            <h5 className="title" style={{ textAlign: 'center', marginTop: "15px" }}>2019</h5>
                            <li className="timeline-item" style={{ margin: '0', padding: "8px 0" }}>
                              <div className="d-flex align-items-center" style={{ background: "white", padding: "10px 0" }}>

                                <div className="item-title-row" style={{ width: "100%" }}>
                                  <div className="item-footer" style={{ marginBottom: "0", width: "inherit" }}>
                                    <div className="d-flex align-items-center">
                                      <h6 className="me-3" style={{ marginBottom: "0" }}>2 Day(s) AL</h6>
                                    </div>
                                  </div>
                                </div>

                                <div className="item-title-row" style={{ width: "150%" }}>
                                  <div className="item-footer" style={{ marginBottom: "0", width: "inherit" }}>
                                    <div className="d-flex align-items-center">
                                      <h6 className="me-3" style={{ marginBottom: "0" }}>19 Jan,2020 - 20 Jan,2020 </h6>
                                    </div>
                                  </div>
                                </div>

                                <div className="item-title-row" style={{ width: "100%", textAlign: "end", paddingRight: "5%" }}>
                                  <FontAwesomeIcon icon={faArrowRight} color='var(--primary)' className='icon' style={{ cursor: "pointer" }} />
                                </div>
                              </div>
                              <hr style={{ margin: '0' }} />
                              <div className="d-flex align-items-center" style={{ background: "white", padding: "10px 0" }}>

                                <div className="item-title-row" style={{ width: "100%" }}>
                                  <div className="item-footer" style={{ marginBottom: "0", width: "inherit" }}>
                                    <div className="d-flex align-items-center">
                                      <h6 className="me-3" style={{ marginBottom: "0" }}>2 Day(s) AL</h6>
                                    </div>
                                  </div>
                                </div>

                                <div className="item-title-row" style={{ width: "150%" }}>
                                  <div className="item-footer" style={{ marginBottom: "0", width: "inherit" }}>
                                    <div className="d-flex align-items-center">
                                      <h6 className="me-3" style={{ marginBottom: "0" }}>19 Jan,2020 - 20 Jan,2020 </h6>
                                    </div>
                                  </div>
                                </div>

                                <div className="item-title-row" style={{ width: "100%", textAlign: "end", paddingRight: "5%" }}>
                                  <FontAwesomeIcon icon={faArrowRight} color='var(--primary)' className='icon' style={{ cursor: "pointer" }} />
                                </div>
                              </div>
                              <hr style={{ margin: '0' }} />
                            </li>
                          </ul>
                        </div>
                      </div>
                    </li>

                    {/* <div className="col-md-12" style={{ textAlign: "center" }}>
                      <button type="button" className="btn btn-danger w-100" style={{ maxWidth: "40%", borderRadius: "50px" }}>Apply </button>
                    </div> */}
                    <div className="col-md-12 pt-3" style={{ textAlign: "center" }}>
                      <button type="button" className="btn btn-primary w-100" style={{ borderRadius: "50px" }} onClick={() => navigate('/apply-leave')}>Apply Leave</button>
                    </div>

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
