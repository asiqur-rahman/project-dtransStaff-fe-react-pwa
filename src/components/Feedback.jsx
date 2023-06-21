import React, { useEffect, useState } from 'react';
import { toast } from 'react-toastify';
import axios from '../utils/axios.utils'
import * as common from '../utils/common.utils'
import MenuBar from './Menubar'
import Sidebar from './Sidebar';

function All() {
  const [categories, setCategories] = useState([]);
  const [category, setCategory] = useState('');
  const [remark, setRemark] = useState('');

  useEffect(() => {
    window.SpinnerShow()
    let user = common.getUser();
    if (user) {
      axios.get(`feedback/type`)
      .then((result)=>{
        if(result && result.data.success){
          setCategories(result.data.data);
        }
      })
      .catch((error)=>{
        console.log(error)
      })

    }
    window.SpinnerHide()
  }, [])

  const applyLeave = () => {
    if(category.length<1){
      toast.error("Please select feedback type.");
    }
    else if(remark.length<1){
      toast.error("Feedback cannot be empty.");
    }
    const data={
      fbcode: category,
      content: remark
    };
    axios.post(`feedback`,data)
      .then((result)=>{
        if(result && result.data.success){
          setCategory("")
          window.resetFeedbackType()
          setRemark('')
          toast.success(result.data.data.response);
        }else{
          toast.error(result.data.data.response);
        }
      })
      .catch((error)=>{
        console.log(error)
      })
  }

  return (
    <>
      <div className="page-wraper">

        <Sidebar menuName="Feedback" />
        <div className="page-content">

          <div className="content-inner pt-0">
            <div className="container fb">

              {/* <!-- Dashboard Area --> */}
              <div className="dashboard-area pt-4">

                <div className="item-list recent-jobs-list pt-4">
                  {/* <h4 className="title my-4">Job Details</h4> */}

                  <ul>
                    <li style={{ margin: "5px 15px" }}>
                        <h5 className="title" style={{ textAlign: 'center' }}>Please select your feedback category</h5>
                      <div className="item-content">
                        <div className="input-group input-square mb-3 pt-4">
                          <select id='feedbackType' className="form-control" onChange={(e) => setCategory(e.target.value)}>
                            <option value="0" disabled={true} selected="selected">-- Select a type --</option>
                            {categories.map((item, i) => {
                              return (<option key={i} value={item.fbcode}>{item.fblabel}</option>)
                            })}
                          </select>
                        </div>
                      </div>
                    </li>

                    <li style={{ margin: "5px 15px" }}>
                      <h5 className="title" style={{ textAlign: 'center' }}>Type your feedback here</h5>
                      <div className="pt-2">
                        <textarea rows={7} className="form-control" style={{ width: "100%" }} value={remark} onChange={(e)=>setRemark(e.target.value)}/>
                      </div>
                    </li>

                    <li>
                      <div className="col-md-12" style={{ textAlign: "center", marginTop: "20px" }}>
                        <button type="button" className="btn btn-primary w-100" style={{ borderRadius: "50px" }} onClick={applyLeave}>Send Feedback</button>
                      </div>
                    </li>
                  </ul>
                </div>

              </div>
            </div>
          </div>

        </div>

        <MenuBar />
      </div>
    </>
  )
}

export default All
