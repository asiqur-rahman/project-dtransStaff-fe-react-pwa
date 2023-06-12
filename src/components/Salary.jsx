import React, { useEffect, useState } from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faCar, faCalendar, faDollarSign } from '@fortawesome/free-solid-svg-icons';
import axios from '../utils/axios.utils'
import { useNavigate, Link } from 'react-router-dom';
import * as common from '../utils/common.utils'
import MenuBar from './Menubar'
import Sidebar from './Sidebar'

function All() {
  const navigate = useNavigate();
  const [payslips, setPayslips] = useState(false);

  const fetchJobs = () =>{
    window.SpinnerShow();
    setPayslips(false);
    let user = common.getUser();
    if (user) {
      axios.get(`payslip`)
        .then((result) => {
          if (result && result.data.success) {
            setPayslips(result.data.data)
          }
        })
        .catch((error) => {
          console.log(error)
        })
    }
    window.SpinnerHide();
  }


  useEffect(() => {
    fetchJobs();
  }, [])

  return (
    <>
      <div className="page-wraper">

        <Sidebar menuName="Payslips"/>


        {/* <!-- Page Content --> */}
        <div className="page-content">

          <div className="content-inner pt-0">
            <div className="container fb">

              {/* <!-- Dashboard Area --> */}
              <div className="dashboard-area pt-4">
                <div className="item-list recent-jobs-list">
                  {/* <h4 className="title my-4">Job Details</h4> */}

                  <ul style={{marginTop:"25px"}}>
                    {
                      payslips && payslips.map((item, i) => {
                        return (
                          <li  key={i} style={{ border: "1px solid var(--title)", borderRadius: "10px", margin: "5px 0",background: "white" }}>
                            <div className="item-content">
                              <div className="item-inner" style={{ margin: "10px 0" }}>

                                <div className="item-footer" style={{marginBottom:"0"}}>
                                  <div className="d-flex align-items-center">
                                    <div className="item-media media media-50" style={{ marginLeft: "0", marginRight: "15px" }}>
                                      <img src="/images/item.png" alt="logo" />
                                    </div>
                                    <div className="item-title-row" >
                                      <div className="item-footer" style={{ marginBottom: "0" }}>
                                        <div className="d-flex align-items-center">
                                          <h5 className="me-3" style={{ color: "var(--primary)",marginBottom: "0" }}>{item.title}</h5>
                                        </div>
                                      </div>
                                      <div className="item-subtitle" style={{ color: "var(--primary)",fontSize: "11px"}}>{item.amount}</div>
                                    </div>
                                  </div>
                                  <div className="d-flex align-items-center">
                                  <button className="btn btn-sm success" style={{ backgroundColor: "yellow", color: "var(--primary)", padding: "5px 4px" }}>Generate Slip</button>
                                  </div>
                                </div>

                                {/* <div className="item-title-row">
                                  <div className="item-footer" style={{ marginBottom: "0" }}>
                                    <div className="d-flex align-items-center">
                                      <h6 className="me-3" style={{ fontSize: "12px"}}>Job No : {item.jobnum}</h6>
                                    </div>
                                    <div className="d-flex align-items-center">
                                      <h6 className="me-3" style={{ fontSize: "12px"}}>Status : {item.jobstatus}</h6>
                                    </div>
                                    <div className="d-flex align-items-center">
                                      <h6 className="me-3" style={{ fontSize: "12px"}}>Type : {item.jobtype}</h6>
                                    </div>
                                  </div>
                                </div> */}
                              </div>
                            </div>
                          </li>

                        )
                      })
                    }
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
