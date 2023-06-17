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
  const [leaveData, setleaveData] = useState(false);
  var count = 0;
  useEffect(() => {
    let user = common.getUser();
    if (user) {
      axios.get(`leave`)
        .then((result) => {
          if (result && result.data.success) {
            // result.data.data.  records.push({
            //   duration:
            //   2,
            //   leavefrom:
            //   '2023-06-22',
            //   leaveto:
            //   '2023-06-23',
            //   leavetype:
            //   'AL',
            //   refnum:
            //   'LVR-23000001',
            //   status:
            //   'Pending',
            //   year:
            //   2005})
            result.data.data.records = result.data.data.records.reduce((acc, item) => {
              const year = item.year;
              if (!acc[year]) {
                acc[year] = [];
              }
              acc[year].push(item);
              return acc;
            }, {});

            result.data.data.records = Object.entries(result.data.data.records)
            .sort((a, b) => b[0] - a[0]) // Sort in descending order
            .reduce((acc, [year, records]) => {
              acc[year] = records;
              return acc;
            }, {});

            setleaveData(result.data.data)
          }
        })
        .catch((error) => {
          console.log(error)
        })
    }
    window.SpinnerHide()
  }, [])


  return (
    <>
      <div className="page-wraper">

        <Sidebar menuName="My Leave" />


        {/* <!-- Page Content --> */}
        <div className="page-content">

          <div className="content-inner pt-0">
            <div className="container fb">

              {/* <!-- Dashboard Area --> */}
              <div className="dashboard-area pt-4">

                <div className="item-list recent-jobs-list pt-3">
                  {/* <h4 className="title my-4">Job Details</h4> */}

                  <ul>

                    <li style={{ borderRadius: "10px" }}>
                      <div className="item-content" style={{ marginTop: "10px" }}>
                        <div className="item-inner" style={{ margin: "10px 0" }}>

                          <div className="item-title-row">
                            <div className="item-footer" style={{ marginBottom: "0" }}>
                              <div className="d-flex align-items-center">
                                <h6 className="me-3" style={{ fontSize: "12px" }}><span style={{ fontSize: "15px", fontWeight: "normal" }}>Current Leave Balance</span><br /></h6>
                              </div>

                              <div className="d-flex align-items-center">
                              </div>
                            </div>
                          </div>
                          <div className="item-title-row">
                            <div className="item-footer" style={{ marginBottom: "0" }}>
                              <div className="d-flex align-items-center">
                                <h6 className="me-3" style={{ fontSize: "16px" }}><span style={{ fontSize: "26px", fontWeight: "normal" }}>{leaveData ? leaveData.balance.AL : "0"}</span><br />Annual Leave</h6>
                              </div>
                              <div className="d-flex align-items-center">
                                <h4 className="me-3" style={{ fontSize: "16px" }}><span style={{ fontSize: "26px", fontWeight: "normal" }}>{leaveData ? leaveData.balance.SL : "0"}</span><br />Sick Leave</h4>
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

                            {leaveData && Object.entries(leaveData.records).reverse().map(([year, items]) => (
                              <div key={++count}>
                                <h4 className="title" style={{ textAlign: 'center', marginTop: "15px" }}>{year}</h4>
                                  {items.map((item, i) => (
                                    <li key={i} className="timeline-item" style={{ margin: '0', padding: "8px 0" }}>
                                      <div className="d-flex align-items-center" style={{ background: "white", padding: "10px 12px 0 12px" }}>

                                        <div className="item-title-row" style={{ width: "100%" }}>
                                          <div className="item-footer" style={{ marginBottom: "0", width: "inherit" }}>
                                            <div className="d-flex align-items-center">
                                              <h5 className="me-3" style={{ color:"var(--dark)",marginBottom: "0" }}>{item.duration} Day(s) {item.leavetype}</h5>
                                            </div>
                                          </div>
                                        </div>
                                        
                                        <div className="item-title-row" style={{ width: "150%" }}>
                                          <div className="item-footer" style={{ marginBottom: "0", width: "inherit" }}>
                                              <h5 className="me-3" style={{ color:"var(--dark)",marginBottom: "0" }}>{item.leavefrom} <span style={{padding:"0 5px"}}>to</span> {item.leaveto} </h5>
                                            <div className="d-flex align-items-center">
                                            </div>
                                          </div>
                                        </div>

                                        {/* <div className="item-title-row" style={{ width: "150%" }}>
                                          <div className="item-footer" style={{ marginBottom: "0", width: "inherit" }}>
                                            <div className="d-flex align-items-center">
                                              <h5 className="me-3" style={{ marginBottom: "0" }}>Status - {item.status} </h5>
                                            </div>
                                          </div>
                                        </div> */}

                                        <div className="item-title-row" style={{ width: "100%", textAlign: "end", paddingRight: "0%" }}>
                                          <FontAwesomeIcon icon={faArrowRight} color='var(--primary)' className='icon' style={{ cursor: "pointer" }} />
                                        </div>
                                      </div>
                                      {/* <hr style={{ margin: '0' }} /> */}
                                      <div key={i} className="d-flex align-items-center" style={{ background: "white", padding: "4px 0 10px 0" }}>

                                        <div className="item-title-row" style={{ width: "100%" }}>
                                          <div className="item-footer" style={{ marginBottom: "0", width: "inherit" }}>
                                            <div className="align-items-center" style={{textAlign:"center"}}>
                                              <h5 className="me-3" style={{ color:"var(--dark)",marginBottom: "0" }}>Status - {item.status}</h5>
                                            </div>
                                          </div>
                                        </div>
                                      </div>
                                    </li>
                                  ))}
                              </div>
                            ))}
                            {/* <h5 className="title" style={{ textAlign: 'center', marginTop: "15px" }}>2020</h5>
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
                            </li> */}
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
