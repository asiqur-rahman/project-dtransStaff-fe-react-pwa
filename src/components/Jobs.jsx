import React, { useEffect, useState, useRef } from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faCar, faCalendar } from '@fortawesome/free-solid-svg-icons';
import axios from '../utils/axios.utils'
import { useNavigate, Link } from 'react-router-dom';
import * as common from '../utils/common.utils'
import { Button, Modal } from 'react-bootstrap';
import MenuBar from './Menubar'
import Sidebar from './Sidebar'
import './Jobs.css'

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
  const [showModal, setShowModal] = useState(false);
  const [showCollectAll, setShowCollectAll] = useState(false);
  const [selectedJobs, setSelectedJobs] = useState([]);
  const [header, setHeader] = useState("Please confirm to proceed.");
  const [body, setBody] = useState("Please confirm to proceed.");
  const selectedJob = useRef('');
  const [selectAllShowModal, setSelectAllShowModal] = useState(false);

  const fetchJobs = (date) =>{
    if(!date)date=new Date().toISOString().split('T')[0];
    
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

  const acceptTransfer = (jobnum)  =>{
    window.SpinnerShow();
    const body = {
        jobnum: selectedJob.current,
        status: "Accepted"
    }
    axios.post(`job/updatestatus`,body)
      .then((result) => {
        if (result && result.data.success) {
          fetchJobs();
          closeModal();
        }
      })
      .catch((error) => {
        console.log(error)
      })
    window.SpinnerHide();
  }

  const rejectTransfer = ()  =>{
    window.SpinnerShow();
    const body = {
        jobnum: selectedJob.current,
        status: "Rejected"
    }
    axios.post(`job/updatestatus`,body)
      .then((result) => {
        if (result && result.data.success) {
          fetchJobs();
          closeModal();
        }
      })
      .catch((error) => {
        console.log(error)
      })
    window.SpinnerHide();
  }

  const handleShow = () => {
    window.handleRemoveFadeFromModal();
  };
  const closeModal = () => {
    setShowModal(false);
  };

  const checkboxEvent = (event, jobnum)=>{
      
      if (event.target.checked) {
        // Add the selected row to the selectedRows array
        if (!selectedJobs.includes(jobnum)) {
          selectedJobs.push(jobnum);
        }
      } else {
        // Remove the deselected row from the selectedRows array
        const index = selectedJobs.indexOf(jobnum);
        if (index !== -1) {
          selectedJobs.splice(index, 1);
        }
      }
      if(selectedJobs.length>0)setShowCollectAll(true);
      else setShowCollectAll(false);

      setSelectedJobs(selectedJobs);
  }

  return (
    <>
      <div className="page-wraper">

        <Sidebar menuName="Jobs"/>


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
                      {dates && dates.map((item,i)=>{
                        return (
                          <div key={i} className="swiper-slide" style={{ paddingBottom: "2px", marginRight: "10px" }}>
                            <button onClick={()=>fetchJobs(item.value)} className="categore-box style-1" style={{ border:selectedDate==item.value?"2px solid var(--primary)":"none" }}>
                              <span className="title">{item.day}</span>
                              <span className="title">{item.date}</span>
                            </button>
                          </div>
                        )
                      })}
                      
                      {/* <div className="swiper-slide" style={{ paddingBottom: "2px", marginRight: "10px" }}>
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
                      </div> */}
                    </div>
                  </div>
                </div>
                {/* <!-- Categorie End --> */}

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
                        <h6 className="item-title"><a href="#" style={{ color: "white",fontSize:"13px" }}>Job Confirmed</a></h6>
                      </div>
                      <div className="item-title-row" style={{ marginBottom: "0", textAlign: "center" }}>
                        <h6 className="item-title" style={{ color: "white", fontSize:"13px" }}>{todayJobs ? todayJobs.summary.completed : "0"}</h6>
                      </div>
                    </div>
                  </div>
                  <div className="item-content" onClick={()=>showJobsFor(2)} style={{ width: "50%", height: "50px", marginLeft: "3px", borderRadius: "10px", background: "linear-gradient(to right, #00BFFF, #007BFF)" }}>
                    <div className="item-media media media-50" style={{ marginRight: "0" }}>
                      <a href="#" onClick={preventDefault} className="menu-toggler">
                        <FontAwesomeIcon icon={faCar} size='2x' color='white' />
                      </a>
                    </div>
                    <div className="item-inner pt-2">
                      <div className="item-title-row" style={{ margin: "5px", textAlign: "center" }}>
                        <h6 className="item-title"><a href="#" style={{ color: "white", fontSize:"13px" }}>Job Pending</a></h6>
                      </div>
                      <div className="item-title-row" style={{ marginBottom: "0", textAlign: "center" }}>
                        <h6 className="item-title" style={{ color: "white", fontSize:"13px" }}>{todayJobs ? todayJobs.summary.pending : "0"}</h6>
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

                          <li  key={i} style={{ color:"var(--dark)",border: "1px solid var(--title)", borderRadius: "10px", margin: "5px 0",background: "white" }}>
                            <div className="item-content">
                              <div style={{paddingRight:"2%"}}>
                                <input type="checkbox" id="checkbox" onChange={e=>checkboxEvent(e,item.jobnum)}/>
                              </div>
                              <div className="item-inner" style={{ margin: "10px 0" }}>

                                <div className="item-footer">
                                  <div className="d-flex align-items-center">
                                    <div className="item-media media media-40" style={{ marginLeft: "0", marginRight: "15px" }}>
                                      <img src="/images/avatar60x60.jpg" alt="logo" />
                                    </div>
                                    <div className="item-title-row" >
                                      <div className="item-footer" style={{ marginBottom: "0" }}>
                                        <div className="d-flex align-items-center">
                                          <h5 className="me-3" style={{ color:"var(--dark)",marginBottom: "0" }}>{item.empname}</h5>
                                        </div>
                                      </div>
                                      <div className="item-subtitle" style={{ fontSize: "11px"}}>{item.jobschedule}</div>
                                    </div>
                                  </div>
                                  <div className="d-flex align-items-center my-icon-container">
                                    <FontAwesomeIcon icon={faCalendar} color="var(--dark)" style={{paddingRight:"40px", cursor:"pointer"}} onClick={()=>seeJobDetails(item.jobnum, item.jobtypecode)}/>
                                  </div>
                                </div>

                                <div className="item-title-row">
                                  <div className="item-footer" style={{ marginBottom: "0" }}>
                                    <div className="d-flex align-items-center">
                                      <h6 className="me-3" style={{ color:"var(--dark)",fontSize: "12px"}}>Job No : {item.jobnum}</h6>
                                    </div>
                                    <div className="d-flex align-items-center">
                                      <h6 className="me-3" style={{ color:"var(--dark)",fontSize: "12px"}}>Status : {item.jobstatus}</h6>
                                    </div>
                                    <div className="d-flex align-items-center">
                                      <h6 className="me-3" style={{ color:"var(--dark)",fontSize: "12px"}}>Type : {item.jobtype}</h6>
                                    </div>
                                  </div>
                                </div>
                                <div className="item-footer">
                                  <div className="d-flex align-items-center">
                                    <div className="item-subtitle">{item.jobtypecode=="JOS"?"From":"To"} : {item.jobaddr}</div>
                                  </div>
                                  <div className="d-flex align-items-center">
                                    {item.jobstatus=='Pending' && !item.allowtransfer && <>
                                    
                                    <button className="btn btn-sm success" style={{ backgroundColor: "green", color: "var(--bg-white)", padding: "5px 4px" }} onClick={()=>{selectedJob.current=item.jobnum; setShowModal(true);}}>Action</button> 
                                      {/* <button className="btn btn-sm success" style={{ backgroundColor: "green", color: "var(--bg-white)", padding: "5px 4px" }} onClick={()=>acceptTransfer(item.jobnum)}>Accept</button> 
                                      <button className="btn btn-sm success" style={{ backgroundColor: "red", color: "var(--bg-white)", padding: "5px 4px", marginLeft:"5px" }} onClick={()=>rejectTransfer(item.jobnum)}>Reject</button> */}
                                    </>}
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
                    {showCollectAll &&
                    <li>
                      <div className="col-md-12" style={{ textAlign: "center", marginTop:"20px" }}>
                        <button type="button" className="btn btn-primary w-100" style={{ borderRadius: "50px" }} onClick={()=>setSelectAllShowModal(true)}>Collect All</button>
                      </div>
                    </li>
                    }
                  </ul>
                </div>
              </div>
            </div>
          </div>

        </div>
        {/* <!-- Page Content End--> */}

        <Modal centered={true} show={showModal} onEntered={handleShow} onHide={closeModal} className="notification-modal">
          <Modal.Header closeButton style={{display:"block"}}>
            <Modal.Title style={{textAlign:"center"}}>{header}</Modal.Title>
          </Modal.Header>
          <Modal.Footer>
            <Button size="sm" variant="secondary" onClick={closeModal}>
              Cancel
            </Button>
            <Button size="sm" variant="success" onClick={acceptTransfer}>
              Accept
            </Button>
            <Button size="sm" variant="danger" onClick={rejectTransfer}>
              Reject
            </Button>
          </Modal.Footer>
        </Modal>


        <Modal centered={true} show={selectAllShowModal} onEntered={handleShow} onHide={()=>setSelectAllShowModal(false)} className="notification-modal">
          <Modal.Header closeButton style={{display:"block"}}>
            <Modal.Title style={{textAlign:"center"}}>You are making colection for {selectedJobs.length} jobs</Modal.Title>
          </Modal.Header>
          <Modal.Body>
            <ul>
              {selectedJobs && selectedJobs.map((item,i)=>{
                return (
                  <li className='row' key={i}>
                    <div className="col-md-6">
                      Jobs {i+1} :
                    </div>
                    <div className="col-md-6">
                      {item}
                    </div>
                  </li>
                )
              })}
                
            </ul>
          </Modal.Body>
          <Modal.Footer>
            <Button variant="secondary" onClick={()=>setSelectAllShowModal(false)}>
              Cancel
            </Button>
            <Button variant="primary">
              Confirm
            </Button>
          </Modal.Footer>
        </Modal>

        <MenuBar />

      </div>
    </>
  )
}

export default All
