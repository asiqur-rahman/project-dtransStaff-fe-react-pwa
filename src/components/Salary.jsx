import React, { useEffect, useState } from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faCar, faCalendar, faDollarSign } from '@fortawesome/free-solid-svg-icons';
import axios from '../utils/axios.utils'
import { useNavigate, Link } from 'react-router-dom';
import * as common from '../utils/common.utils'
import MenuBar from './Menubar'
import Sidebar from './Sidebar'

function All() {
  const preventDefault = (event) => {
    // event.preventDefault(); // Prevents the default behavior of the anchor tag
    // Additional functionality can be added here if needed
  };
  const navigate = useNavigate();
  const [selectedDate, setSelectedDate] = useState(false);
  const [dates, setDates] = useState(false);
  const [todayJobs, setTodayJobs] = useState(false);
  const [filteredJobs, setFilteredJobs] = useState(false);

  const fetchJobs = (date) =>{
    window.SpinnerShow();
    setTodayJobs(false);
    let user = common.getUser();
    if (user) {
      setSelectedDate(date);
      axios.get(`job/active?date=${date}`)
        .then((result) => {
          if (result && result.data.success) {
            setTodayJobs(result.data.data)
            showJobsFor(1,result.data.data.jobs)
          }
        })
        .catch((error) => {
          console.log(error)
        })
    }
    window.SpinnerHide();
  }

  const showJobsFor = (showFor, data=[]) =>{
    if(data.length==0){
      data=todayJobs.jobs;
    }
    if(showFor==1){
      const pending = data.filter(x=>x.jobstatus!="Pending");
      setFilteredJobs(pending);
    }
    else if (showFor==2){
      const confirmed = todayJobs.jobs.filter(x=>x.jobstatus=="Pending");
      setFilteredJobs(confirmed)
    }
  }

  useEffect(() => {
    const todayDate = new Date().toISOString().split('T')[0]
    fetchJobs(todayDate);

    const today = new Date();  // Get today's date
    today.setDate(today.getDate() - 2);  // Subtract 2 days

    const daysOfWeek = ['Sun', 'Mon', 'Tue', 'Wed', 'Thu', 'Fri', 'Sat'];
    const datesArray = [];

    for (let i = 0; i < 7; i++) {
      const date = new Date(today);
      date.setDate(today.getDate() + i);
      const value = date.toISOString().split('T')[0];
      const dayOfWeek = daysOfWeek[date.getDay()];
      datesArray.push({day:dayOfWeek, date:date.getDate(), value: value});
    }
    setDates(datesArray);
  }, [])

  const seeJobDetails = (jobnum,jobtypecode)  =>{
    navigate(`/job-details?jobnum=${jobnum}&jobtypecode=${jobtypecode}`);
  }
  const jobTransfer = (jobnum)  =>{
    navigate(`/transfer?jobnum=${jobnum}`);
  }

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
                      filteredJobs && filteredJobs.map((item, i) => {
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
                                          <h5 className="me-3" style={{ color: "var(--primary)",marginBottom: "0" }}>June 2023</h5>
                                        </div>
                                      </div>
                                      <div className="item-subtitle" style={{ color: "var(--primary)",fontSize: "11px"}}>$ 123456</div>
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
