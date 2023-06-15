import React, { useEffect, useState } from 'react';
import axios from '../utils/axios.utils'
import * as common from '../utils/common.utils'
import MenuBar from './Menubar'
import { Link } from 'react-router-dom';
import { toast } from 'react-toastify';

function All() {
  const [userDetails, setUserDetails] = useState(false);
  const [jobSummary, setJobSummary] = useState(false);
  const [editMode, setEditMode] = useState(false);
  const [profilePicture, setProfilePicture] = useState('/images/message/pic6.jpg');
  
  const [fullName, setFullName] = useState('');
  const [gender, setGender] = useState('');
  const [birthday, setBirthday] = useState('');
  const [email, setEmail] = useState('');
  const [phone, setPhone] = useState('');

  const fetchProfile = ()=>{
    axios.get('profile')
        .then((result) => {
          if (result && result.data.success) {
            setUserDetails(result.data.data)
          }
        })
        .catch((error) => {
          console.log(error)
        })
  }

  useEffect(() => {
    window.SpinnerShow()
    let user = common.getUser();
    if (user) {
      fetchProfile();
      const todayDate = new Date().toISOString().split('T')[0]
      axios.get(`job/summary?date=${todayDate}`)
        .then((result) => {
          if (result && result.data.success) {
            setJobSummary(result.data.data)
          }
        })
        .catch((error) => {
          console.log(error)
        })

        axios.get(`profile/photo`)
        .then((result) => {
          if (result && result.data.success) {
            setProfilePicture(result.data.data.imageurl)
          }
        })
        .catch((error) => {
          console.log(error)
        })

    }
    window.SpinnerHide()
  }, [])

  const editProfile=()=>{
    setEditMode(!editMode);
    setFullName(userDetails.empname);
    setGender(userDetails.gender);
    setBirthday(userDetails.birthday);
    setEmail(userDetails.email);
    setPhone(userDetails.phone);
  }

  
  function isValidEmail(email) {
    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    return emailRegex.test(email);
  }
  
  const updateProfile =()=>{
    if(!isValidEmail(email)){
      return toast.error("Email is not valid !");
    }
    const body ={
        empname: fullName,
        phone: phone,
        email: email,
        gender: gender,
        birthday: birthday
    };
    axios.post(`profile/updateProfile`,body)
      .then((result) => {
        if (result && result.data.success) {
          toast.success("Profile updated successfully !");
          setEditMode(!editMode);
          fetchProfile();
        }
      })
      .catch((error) => {
        console.log(error)
      })
  }

  return (
    <>
      <div className="page-wraper">

        <header className="header">
          <div className="main-bar">
            <div className="container">
              <div className="header-content">
                <div className="left-content">
                  <Link to="/" className="back-btn">
                    <svg width="18" height="18" viewBox="0 0 10 16" fill="none" xmlns="http://www.w3.org/2000/svg">
                      <path d="M9.03033 0.46967C9.2966 0.735936 9.3208 1.1526 9.10295 1.44621L9.03033 1.53033L2.561 8L9.03033 14.4697C9.2966 14.7359 9.3208 15.1526 9.10295 15.4462L9.03033 15.5303C8.76406 15.7966 8.3474 15.8208 8.05379 15.6029L7.96967 15.5303L0.96967 8.53033C0.703403 8.26406 0.679197 7.8474 0.897052 7.55379L0.96967 7.46967L7.96967 0.46967C8.26256 0.176777 8.73744 0.176777 9.03033 0.46967Z" fill="#a19fa8" />
                    </svg>
                  </Link>
                  <h5 className="mb-0 ms-2">Profile</h5>
                </div>
                <div className="mid-content">
                </div>
                <div className="right-content">
                </div>
              </div>
            </div>
          </div>
        </header>

        <div className="page-content bottom-content ">
          <div className="container profile-area">
            <div className="profile">
              <div className="media media-100">
                <img src={profilePicture} alt="/" />
                <svg className="progress-style" height="100" width="100">
                  <circle id="round-1" cx="60" cy="60" r="50" stroke="#E8EFF3" strokeWidth="7" fill="none" />
                  <circle id="round-2" cx="60" cy="60" r="50" stroke="#C3AC58" strokeWidth="7" fill="none" />
                </svg>
              </div>
              <div className="mb-2">
                <h4 style={{ textTransform: "uppercase" }}>{userDetails ? userDetails.username : ""}</h4>
                <h6 className="detail">GOLD MEMBER</h6>
              </div>
            </div>
            <div className="swiper-btn-center-lr">
              <div className="swiper-container mt-4 offer-swiper">
                <div className="swiper-wrapper">
                  <div className="swiper-slide" style={{ width: "28%" }}>
                    <div className="offer-bx">
                      <div className="offer-content" style={{ maxWidth: "53%" }}>
                        <h6 style={{ fontSize: "11px" }}>Today</h6>
                        <small>Jobs</small>
                      </div>
                      <div className="point">
                        <h5 className="title">{jobSummary ? jobSummary.total : ""}</h5>
                      </div>
                    </div>
                  </div>
                  <div className="swiper-slide" style={{ width: "28%" }}>
                    <div className="offer-bx">
                      <div className="offer-content" style={{ maxWidth: "53%" }}>
                        <h6 style={{ fontSize: "11px" }}>Pending</h6>
                        <small>Jobs</small>
                      </div>
                      <div className="point">
                        <h5 className="title">{jobSummary ? jobSummary.pending : ""}</h5>
                      </div>
                    </div>
                  </div>
                  <div className="swiper-slide" style={{ width: "28%" }}>
                    <div className="offer-bx">
                      <div className="offer-content" style={{ maxWidth: "53%" }}>
                        <h6 style={{ fontSize: "11px" }}>Completed</h6>
                        <small>Jobs</small>
                      </div>
                      <div className="point">
                        <h5 className="title">{jobSummary ? jobSummary.completed : ""}</h5>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
            <div className="contact-section">
              <div className="d-flex justify-content-between align-item-center">
                <h5 className="title">Informations</h5>
                <button className="btn-link" onClick={() => { editProfile() }}>{editMode ? "Cancel Edit" : "Edit"}</button>
              </div>
              {!editMode &&
                <ul>
                  <li>
                    <a href="#">
                      <div className="icon-box">
                        <i className="fa-solid fa-vcard"></i>
                      </div>
                      <div className="ms-3">
                        <div className="light-text">Full Name</div>
                        <p className="mb-0">{userDetails ? userDetails.empname : ""}</p>
                      </div>
                    </a>
                  </li>
                  <li>
                    <a href="#">
                      <div className="icon-box">
                        <i className="fa-solid fa-user"></i>
                      </div>
                      <div className="ms-3">
                        <div className="light-text">Username</div>
                        <p className="mb-0">{userDetails ? userDetails.username : ""}</p>
                      </div>
                    </a>
                  </li>
                  <li>
                    <a href="#">
                      <div className="icon-box">
                        <i className="fa-solid fa-transgender"></i>
                      </div>
                      <div className="ms-3">
                        <div className="light-text">Gender</div>
                        <p className="mb-0">{userDetails && userDetails.gender == '' ? '' : userDetails.gender == 'M' ? "Male" : "Female"}</p>
                      </div>
                    </a>
                  </li>
                  <li>
                    <a href="#">
                      <div className="icon-box">
                        <i className="fa-solid fa-calendar"></i>
                      </div>
                      <div className="ms-3">
                        <div className="light-text">Date of Birth</div>
                        <p className="mb-0">{userDetails ? userDetails.birthday : ""}</p>
                      </div>
                    </a>
                  </li>
                  <li>
                    <a href="#">
                      <div className="icon-box">
                        <i className="fa-solid fa-envelope"></i>
                      </div>
                      <div className="ms-3">
                        <div className="light-text">Email Address</div>
                        <p className="mb-0">{userDetails ? userDetails.email : ""}</p>
                      </div>
                    </a>
                  </li>
                  <li>
                    <a href="#">
                      <div className="icon-box">
                        <i className="fa-solid fa-phone"></i>
                      </div>
                      <div className="ms-3">
                        <div className="light-text">Phone</div>
                        <p className="mb-0">{userDetails ? userDetails.phone : ""}</p>
                      </div>
                    </a>
                  </li>
                </ul>}

              {editMode &&
                <ul>
                  <li>

                    <div className="ms-3">
                      <div className="ms-3">
                        <div className="light-text" style={{ fontSize: "16px", textAlign: "center" }}>Full Name</div>
                      </div>
                      <div className="input-group input-radius mb-3">
                        <span className="input-group-text">
                          <i className="fa fa-vcard" style={{ fontSize: "16px" }}></i>
                        </span>
                        <input
                          type="text"
                          className="form-control"
                          value={fullName}
                          onChange={(e) => setFullName(e.target.value)}
                          placeholder="Fullname"
                        />
                      </div>
                    </div>
                  </li>
                  {/* <li>
                    <div className="ms-3">
                      <div className="ms-3">
                        <div className="light-text" style={{ fontSize: "16px", textAlign: "center" }}>Username</div>
                      </div>
                      <div className="input-group input-radius mb-3">
                        <span className="input-group-text">
                          <i className="fa fa-user" style={{ fontSize: "16px" }}></i>
                        </span>
                        <input
                          type="text"
                          className="form-control"
                          value={userDetails.username}
                          // onChange={(e) => setUsername(e.target.value)}
                          placeholder="Username"
                        />
                      </div>
                    </div>
                  </li> */}
                  <li>
                    <div className="ms-3">
                      <div className="ms-3">
                        <div className="light-text" style={{ fontSize: "16px", textAlign: "center" }}>Gender</div>
                      </div>
                      <div className="input-group input-radius mb-3">
                        <span className="input-group-text">
                          <i className="fa fa-transgender" style={{ fontSize: "16px" }}></i>
                        </span>
                        <select className="form-control" onChange={(e)=>setGender(e.target.value)}>
                          {gender == "M" ?<option value="M" selected>Male</option>:<option value="M">Male</option>}
                          {gender == "F" ?<option value="F" selected>Female</option>:<option value="F">Female</option>}
                        </select>
                      </div>
                    </div>
                  </li>
                  <li>
                    <div className="ms-3">
                      <div className="ms-3">
                        <div className="light-text" style={{ fontSize: "16px", textAlign: "center" }}>Birthday</div>
                      </div>
                      <div className="input-group input-radius mb-3">
                        <span className="input-group-text">
                          <i className="fa fa-calendar" style={{ fontSize: "16px" }}></i>
                        </span>
                        <input
                          type="date"
                          className="form-control"
                          value={birthday}
                          onChange={(e) => setBirthday(e.target.value)}
                          placeholder="Username"
                        />
                      </div>
                    </div>
                  </li>
                  <li>
                    <div className="ms-3">
                      <div className="ms-3">
                        <div className="light-text" style={{ fontSize: "16px", textAlign: "center" }}>Email</div>
                      </div>
                      <div className="input-group input-radius mb-3">
                        <span className="input-group-text">
                          <i className="fa fa-envelope" style={{ fontSize: "16px" }}></i>
                        </span>
                        <input
                          type="text"
                          className="form-control"
                          value={email}
                          onChange={(e) => setEmail(e.target.value)}
                          placeholder="Email"
                        />
                      </div>
                    </div>
                  </li>
                  <li>
                    <div className="ms-3">
                      <div className="ms-3">
                        <div className="light-text" style={{ fontSize: "16px", textAlign: "center" }}>Phone</div>
                      </div>
                      <div className="input-group input-radius mb-3">
                        <span className="input-group-text">
                          <i className="fa fa-phone" style={{ fontSize: "16px" }}></i>
                        </span>
                        <input
                          type="number"
                          className="form-control"
                          value={phone}
                          onChange={(e) => setPhone(e.target.value)}
                          placeholder="Phone"
                        />
                      </div>
                    </div>
                  </li>
                  <li>
                  <div className="col-md-12" style={{ textAlign: "center" }}>
                        <button type="button" className="btn btn-primary w-100" style={{ borderRadius: "50px" }} onClick={updateProfile}>Update</button>
                      </div>
                  </li>
                </ul>}
            </div>
          </div>
        </div>

        <MenuBar />

      </div>
    </>
  )
}

export default All
