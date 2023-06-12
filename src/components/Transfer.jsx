import React, { useEffect, useState, useRef } from 'react';
import MenuBar from './Menubar';
import Sidebar from './Sidebar';
import { useLocation } from 'react-router-dom';
import * as common from '../utils/common.utils'
import axios from '../utils/axios.utils'
import './JobDetails.css';

function All(props) {
  const location = useLocation();
  const queryParams = new URLSearchParams(location.search);
  const [jobDetails, setJobDetails] = useState(false);
  const [transferList, setTransferList] = useState(false);
  const [searchKey, setSearchKey] = useState('');

  const search = (key) =>{
    setSearchKey(key)
    var list = jobDetails.filter(x=>x.empname.includes(key))
    setTransferList(list)
  }

  useEffect(() => {
    const jobNum = queryParams.get('jobnum');
    if (jobNum && !jobDetails) {
      window.SpinnerShow()
      let user = common.getUser();
      if (user) {
        axios.get(`job/transfer/drivers/${jobNum}`)
          .then((result) => {
            if (result && result.data.success) {
              setJobDetails(result.data.data)
              setTransferList(result.data.data)
            }
          })
          .catch((error) => {
            console.log(error)
          })

      }
      window.SpinnerHide()
    }
  }, [queryParams]);

  return (
    <>
      <div className="page-wraper">

        <Sidebar />


        {/* <!-- Page Content --> */}
        <div className="page-content">

          <div className="content-inner pt-0">
            <div className="container fb">

              {/* <!-- Dashboard Area --> */}
              <div className="dashboard-area pt-5">

                {transferList &&
                  <div className="item-list recent-jobs-list pt-3">
                    {/* <h4 className="title my-4">Job Details</h4> */}

                    <ul>
                      <li style={{ border: "1px solid var(--title)", borderRadius: "10px", margin: "5px 0", background: "white" }}>
                      {/* <h5 className="title" style={{ textAlign: 'center' }}>Search</h5> */}
                        <div className="item-content">
                        <div className="input-group input-radius mb-3 pt-4">
                          <span className="input-group-text">
                            <i className="fa fa-search" style={{fontSize:"16px"}}></i>
                          </span>
                          <input
                            type="text"
                            className="form-control"
                            // value={username}
                            // onChange={(e) => setUsername(e.target.value)}
                            placeholder="Search"
                            value={searchKey}
                            onChange={(e)=>search(e.target.value)}
                          />
                        </div>
                        </div>
                      </li>

                      <li style={{ borderRadius: "10px" }}>
                        <h5 className="title" style={{ textAlign: 'center' }}>Reason for Transfer</h5>
                        <div className="pt-2">
                          <textarea rows={2} className="form-control" style={{ width: "100%" }} />
                        </div>
                      </li>

                      <li style={{ border: "1px solid var(--title)", borderRadius: "10px", margin: "5px 0", background: "white" }}>
                        <h5 className="title" style={{ textAlign: 'center', marginTop: "15px" }}>Transfer To</h5>
                        <div className="order-status" style={{ marginTop: "0" }}>
                          <ul className="dz-timeline style-2">
                            {transferList.map((item, i) => {
                              return (
                                <li key={i} className="timeline-item" style={{ margin: '0', padding: "8px 0" }}>
                                  <div className="d-flex align-items-center">
                                    
                                    <div className="item-media media media-40 dz-icon" style={{ margin: "0 15px 0 0" }}>
                                      <img src="/images/avatar60x60.jpg" alt="logo" />
                                    </div>

                                    <div className="item-title-row" style={{ width: "100%" }}>
                                      <div className="item-footer" style={{ marginBottom: "0", width: "inherit" }}>
                                        <div className="d-flex align-items-center">
                                          <h5 className="me-3" style={{ marginBottom: "0" }}>{item.empname}</h5>
                                        </div>
                                      </div>
                                      <div className="item-subtitle" style={{ fontSize: "11px" }}>{item.empnum}</div>
                                    </div>

                                    <div className="item-title-row" style={{ margin: "0 5% 0 3%" }}>
                                      <input type="radio" name='transfer'/>
                                    </div>
                                  </div>
                                </li>
                              )
                            })}
                          </ul>
                        </div>
                      </li>

                      <div className="col-md-12" style={{ textAlign: "center" }}>
                        <button type="button" className="btn btn-warning w-100" style={{ maxWidth: "40%", borderRadius: "50px" }}>Submit</button>
                      </div>
                    </ul>
                  </div>
                }
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
