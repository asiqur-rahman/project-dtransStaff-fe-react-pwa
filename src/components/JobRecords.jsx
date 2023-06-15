import React, { useEffect, useState, useRef } from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faCar, faCalendar, faDollarSign } from '@fortawesome/free-solid-svg-icons';
import axios from '../utils/axios.utils'
import { useNavigate, Link } from 'react-router-dom';
import * as common from '../utils/common.utils'
import MenuBar from './Menubar'
import Sidebar from './Sidebar'
import Swiper from 'swiper';
import 'swiper/swiper-bundle.css';

function All() {
  const swiperRef = useRef(null);
  const preventDefault = (event) => {
    // event.preventDefault(); // Prevents the default behavior of the anchor tag
    // Additional functionality can be added here if needed
  };
  const navigate = useNavigate();
  const [selectedDate, setSelectedDate] = useState(false);
  const [dates, setDates] = useState(false);
  const [todayJobs, setTodayJobs] = useState(false);
  const [filteredJobs, setFilteredJobs] = useState(false);

  const fetchJobs = (date) => {
    window.SpinnerShow();
    setTodayJobs(false);
    let user = common.getUser();
    if (user) {
      setSelectedDate(date);
      axios.get(`job/active?date=${date}`)
        .then((result) => {
          if (result && result.data.success) {
            setTodayJobs(result.data.data)
            showJobsFor(1, result.data.data.jobs)
          }
        })
        .catch((error) => {
          console.log(error)
        })
    }
    window.SpinnerHide();
  }

  const showJobsFor = (showFor, data = []) => {
    if (data.length == 0) {
      data = todayJobs.jobs;
    }
    if (showFor == 1) {
      const pending = data.filter(x => x.jobstatus != "Pending");
      setFilteredJobs(pending);
    }
    else if (showFor == 2) {
      const confirmed = todayJobs.jobs.filter(x => x.jobstatus == "Pending");
      setFilteredJobs(confirmed)
    }
  }

  useEffect(() => {
    swiperRef.current = new Swiper('.categorie-swiper', {
      // Customize the swiper options as per your requirements
      // For example:
      slidesPerView: 'auto',
      spaceBetween: 10,
    });
  }, []);

  useEffect(() => {
    // Focus on the last slide
    if(dates.length>0){
      setTimeout(function() {
        const lastIndex = swiperRef.current.slides.length - 1;
        swiperRef.current.slideTo(lastIndex);
      },1000);
    }
  }, [dates]);

  useEffect(() => {
    const todayDate = new Date().toISOString().split('T')[0]
    fetchJobs(todayDate);

    const today = new Date();  // Get today's date
    today.setDate(today.getDate() - 15);  // Subtract 2 days

    const daysOfWeek = ['Sun', 'Mon', 'Tue', 'Wed', 'Thu', 'Fri', 'Sat'];
    const datesArray = [];

    for (let i = 0; i < 16; i++) {
      const date = new Date(today);
      date.setDate(today.getDate() + i);
      const value = date.toISOString().split('T')[0];
      const dayOfWeek = daysOfWeek[date.getDay()];
      datesArray.push({ day: dayOfWeek, date: date.getDate(), value: value });
    }
    setDates(datesArray);
  }, [])

  const seeJobDetails = (jobnum, jobtypecode) => {
    navigate(`/job-details?jobnum=${jobnum}&jobtypecode=${jobtypecode}`);
  }

  const jobTransfer = (jobnum) => {
    navigate(`/transfer?jobnum=${jobnum}`);
  }

  return (
    <>
      <div className="page-wraper">

        <Sidebar menuName="Job Records" />


        {/* <!-- Page Content --> */}
        <div className="page-content">

          <div className="content-inner pt-0">
            <div className="container fb">

              {/* <!-- Dashboard Area --> */}
              <div className="dashboard-area pt-4">
                {/* Categorie */}
                <div className="swiper-btn-center-lr" style={{ marginBottom: "10px" }}>
                  <div className="swiper-container mt-4 categorie-swiper categorie-swiper-custom">
                    <div className="swiper-wrapper">
                      {dates && dates.map((item, i) => {
                        return (
                          <div key={i} className="swiper-slide" style={{ paddingBottom: "2px", marginRight: "10px" }}>
                            <button onClick={() => fetchJobs(item.value)} className="categore-box style-1" style={{ border: selectedDate == item.value ? "2px solid var(--primary)" : "none" }}>
                              <span className="title">{item.day}</span>
                              <span className="title">{item.date}</span>
                            </button>
                          </div>
                        )
                      })}
                    </div>
                  </div>
                </div>

                {/* <!-- Item box Start --> */}
                <div className="item-list style-2 recent-jobs-list" style={{ display: "flex" }}>
                  <div className="item-content" onClick={()=>showJobsFor(1)} style={{ width: "50%", height: "50px", marginRight: "3px", borderRadius: "10px", background: "linear-gradient(to right, #00BFFF, #007BFF)" }}>
                    <div className="item-media media media-50" style={{ marginRight: "0" }}>
                      <a href="#" onClick={preventDefault} className="menu-toggler">
                        <FontAwesomeIcon icon={faCar} size='2x' color='white' />
                      </a>
                    </div>
                    <div className="item-inner pt-2">
                      <div className="item-title-row" style={{ margin: "5px", textAlign: "center" }}>
                        <h6 className="item-title"><a href="#" style={{ color: "white",fontSize:"13px" }}>Total Jobs</a></h6>
                      </div>
                      <div className="item-title-row" style={{ marginBottom: "0", textAlign: "center" }}>
                        <h6 className="item-title" style={{ color: "white", fontSize:"13px" }}>{todayJobs ? todayJobs.summary.completed : "0"}</h6>
                      </div>
                    </div>
                  </div>
                  <div className="item-content" onClick={()=>showJobsFor(2)} style={{ width: "50%", height: "50px", marginLeft: "3px", borderRadius: "10px", background: "linear-gradient(to right, #00BFFF, #007BFF)" }}>
                    <div className="item-media media media-50" style={{ marginRight: "0" }}>
                      <a href="#" onClick={preventDefault} className="menu-toggler">
                        <FontAwesomeIcon icon={faDollarSign} size='2x' color='white' />
                      </a>
                    </div>
                    <div className="item-inner pt-2">
                      <div className="item-title-row" style={{ margin: "5px", textAlign: "center" }}>
                        <h6 className="item-title"><a href="#" style={{ color: "white", fontSize:"13px" }}>Earned</a></h6>
                      </div>
                      <div className="item-title-row" style={{ marginBottom: "0", textAlign: "center" }}>
                        <h6 className="item-title" style={{ color: "white", fontSize:"13px" }}>$ 0</h6>
                      </div>
                    </div>
                  </div>
                </div>
                {/* <!-- Item box Start --> */}

                <div className="item-list recent-jobs-list">
                  {/* <h4 className="title my-4">Job Details</h4> */}

                  <ul>
                    {
                      filteredJobs && filteredJobs.map((item, i) => {
                        return (
                          <li  key={i} style={{ border: "1px solid var(--title)", borderRadius: "10px", margin: "5px 0",background: "white" }}>
                            <div className="item-content">
                              <div className="item-inner" style={{ margin: "10px 0" }}>

                                <div className="item-footer">
                                  <div className="d-flex align-items-center">
                                    <div className="item-media media media-40" style={{ marginLeft: "0", marginRight: "15px" }}>
                                      <img src="/images/avatar60x60.jpg" alt="logo" />
                                    </div>
                                    <div className="item-title-row" >
                                      <div className="item-footer" style={{ marginBottom: "0" }}>
                                        <div className="d-flex align-items-center">
                                          <h5 className="me-3" style={{ marginBottom: "0" }}>{item.empname}</h5>
                                        </div>
                                      </div>
                                      <div className="item-subtitle" style={{ fontSize: "11px"}}>{item.jobschedule}</div>
                                    </div>
                                  </div>
                                  <div className="d-flex align-items-center">
                                    <FontAwesomeIcon icon={faCalendar} style={{paddingRight:"40px", cursor:"pointer"}} onClick={()=>seeJobDetails(item.jobnum, item.jobtypecode)}/>
                                  </div>
                                </div>

                                <div className="item-title-row">
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
                                </div>
                                <div className="item-footer">
                                  <div className="d-flex align-items-center">
                                    <div className="item-subtitle">{item.jobtypecode=="JOS"?"From":"To"} : {item.jobaddr}</div>
                                  </div>
                                  <div className="d-flex align-items-center">
                                    {item.jobstatus=='Pending' && !item.allowtransfer &&
                                      <button className="btn btn-sm success" style={{ backgroundColor: "green", color: "var(--bg-white)", padding: "5px 4px" }}>Accept Transfer</button>
                                    }
                                    {item.jobstatus=='Confirm' &&
                                    <button className="btn btn-sm success" style={{ backgroundColor: "green", color: "var(--bg-white)", padding: "5px 4px" }}>Confirm</button>
                                    } 
                                    {item.allowtransfer&&
                                      <button className="btn btn-sm success" style={{ backgroundColor: "red", color: "var(--bg-white)", padding: "5px 4px" }} onClick={()=>jobTransfer(item.jobnum)}>Request Transfer</button>
                                    }
                                  </div>
                                </div>
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
