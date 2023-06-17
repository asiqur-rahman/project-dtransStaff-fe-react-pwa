import React, { useEffect, useState } from 'react';
import axios from '../utils/axios.utils'
import * as common from '../utils/common.utils'
import MenuBar from './Menubar'
import { Link } from 'react-router-dom';
import { DateRange } from 'react-date-range';
import 'react-date-range/dist/styles.css'; // Import the default styles
import 'react-date-range/dist/theme/default.css';

function All() {
  const [leaveTypes, setLeaveTypes] = useState([]);
  const [leaveType, setLeaveType] = useState();
  const [remarks, setRemarks] = useState();
  const [dateRange, setDateRange] = useState({
    startDate: new Date(),
    endDate: new Date(),
    key: 'selection',
  });

  const handleDateChange = (ranges) => {
    setDateRange(ranges.selection);
  };

  const getSelectedDaysCount = () => {
    const { startDate, endDate } = dateRange;
    const diffInTime = endDate.getTime() - startDate.getTime();
    const diffInDays = Math.ceil(diffInTime / (1000 * 3600 * 24));
    return diffInDays + 1; // Add 1 to include both the start and end dates
  };

  useEffect(()=>{
    window.SpinnerShow()
    let user = common.getUser();
      if(user){
        axios.get(`leave/type`)
        .then((result)=>{
          if(result && result.data.success){
            setLeaveTypes(result.data.data);
          }
        })
        .catch((error)=>{
          console.log(error)
        })
      
      }
      window.SpinnerHide()
  },[])

  const applyLeave = () =>{
    
  }

  return (
    <>
      <div className="page-wraper">

        <header className="header">
          <div className="main-bar">
            <div className="container">
              <div className="header-content">
                <div className="left-content" style={{width:"140px"}}>
                  <Link to="/my-leave" className="back-btn">
                    <svg width="18" height="18" viewBox="0 0 10 16" fill="none" xmlns="http://www.w3.org/2000/svg">
                      <path d="M9.03033 0.46967C9.2966 0.735936 9.3208 1.1526 9.10295 1.44621L9.03033 1.53033L2.561 8L9.03033 14.4697C9.2966 14.7359 9.3208 15.1526 9.10295 15.4462L9.03033 15.5303C8.76406 15.7966 8.3474 15.8208 8.05379 15.6029L7.96967 15.5303L0.96967 8.53033C0.703403 8.26406 0.679197 7.8474 0.897052 7.55379L0.96967 7.46967L7.96967 0.46967C8.26256 0.176777 8.73744 0.176777 9.03033 0.46967Z" fill="#a19fa8" />
                    </svg>
                  </Link>
                  <h5 className="mb-0 ms-6">My Leave</h5>
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
            <DateRange
            ranges={[dateRange]}
            onChange={handleDateChange}
            showSelectionPreview={true}
            moveRangeOnFirstSelection={false}
            editableDateInputs={true}
            // style={{ width: '100%',background: 'linear-gradient(to right, rgb(0, 191, 255), rgb(0, 123, 255))', color:'white' }}
            style={{ width: '100%' }}
          />
          <h5 className="title" style={{ textAlign: 'center', fontSize:'14px', marginTop: "15px" }}>Total selected days: {getSelectedDaysCount()}</h5>
          <ul>
            <li style={{ margin: "5px 15px"}}>
              <div className="item-content">
              <div className="input-group input-square mb-3 pt-4">
                <select className="form-control" onChange={(e)=>setLeaveType(e.target.value)}>
                  {leaveTypes.map((item,i)=>{
                    return (<option key={i} value={item.leavecode}>{item.leavelabel}</option>)
                  })}
                </select>
              </div>
              </div>
            </li>

            <li style={{  margin: "5px 15px" }}>
              <h5 className="title" style={{ textAlign: 'center' }}>Remarks</h5>
              <div className="pt-2">
                <textarea rows={2} className="form-control" style={{ width: "100%" }}/>
              </div>
            </li>

            <li>
              <div className="col-md-12" style={{ textAlign: "center", marginTop:"20px" }}>
                <button type="button" className="btn btn-primary w-100" style={{ borderRadius: "50px" }} onClick={applyLeave}>Apply Leave</button>
              </div>
            </li>
          </ul>
        </div>
        <MenuBar />
      </div>
    </>
  )
}

export default All
