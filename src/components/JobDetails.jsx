import React, { useEffect, useState, useRef } from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faCircle, faCircleCheck } from '@fortawesome/free-solid-svg-icons';
import SignatureCanvas from 'react-signature-canvas';
import MenuBar from './Menubar';
import Sidebar from './Sidebar';
import { useLocation, useNavigate } from 'react-router-dom';
import * as common from '../utils/common.utils'
import axios from '../utils/axios.utils'
import './JobDetails.css';

const SignaturePad = () => {
  const signatureRef = useRef(null);

  const handleClear = () => {
    signatureRef.current.clear();
  };

  const handleStartEvent = (event) => {
    // Get the touch position relative to the canvas
    const { clientX, clientY } = event.touches[0];
    const canvasRect = signatureRef.current.canvas.getBoundingClientRect();
    const startX = clientX - canvasRect.left;
    const startY = clientY - canvasRect.top;

    // Set the starting position of the drawing
    signatureRef.current.startPoint(startX, startY);
  };

  const handleMoveEvent = (event) => {
    // Get the touch position relative to the canvas
    const { clientX, clientY } = event.touches[0];
    const canvasRect = signatureRef.current.canvas.getBoundingClientRect();
    const moveX = clientX - canvasRect.left;
    const moveY = clientY - canvasRect.top;

    // Draw the signature based on the touch movement
    signatureRef.current.signaturePad.strokeMoveTo(moveX, moveY);
    signatureRef.current.signaturePad.stroke();
  };

  const handleSave = () => {
    const signatureDataURL = signatureRef.current.toDataURL();
    // Use the signatureDataURL as needed (e.g., send it to the server, store it in state, etc.)
    console.log(signatureDataURL);
  };

  return (
    <div style={{ textAlign: "center", margin: "5px 0" }}>
      <SignatureCanvas ref={signatureRef} canvasProps={{
        style: { width: "100%", height: '300px', backgroundColor: "white" },
        className: 'signature-canvas',
        onTouchStart: handleStartEvent,
        onTouchMove: handleMoveEvent,
      }} />
      <button onClick={handleClear} style={{ marginRight: "5px" }} className="btn btn-sm btn-warning">Clear</button>
      <button onClick={handleSave} className="btn btn-sm btn-success">Save</button>
    </div>
  );
};

function Stepper({ jobDetails }) {
  const [activeStep, setActiveStep] = useState(0);
  useEffect(() => {
    if (jobDetails) {
      if ((jobDetails.jobtype == 'delivery' && jobDetails.deliveredat.length>1) 
      || (jobDetails.jobtype == 'collection' && jobDetails.collectedat.length>1)) {
        setActiveStep(0)
      }
      else if ((jobDetails.jobtype == 'delivery' && jobDetails.deliveredat.length>1) 
      || (jobDetails.jobtype == 'collection' && jobDetails.collectedat.length>1)) {
        setActiveStep(1)
      }
      else if ((jobDetails.jobtype == 'delivery' && jobDetails.deliveredat.length>1) 
      || (jobDetails.jobtype == 'collection' && jobDetails.collectedat.length>1)) {
        setActiveStep(2)
      }
    }
  }, [jobDetails]);

  return (
    <div className="item-list style-2 recent-jobs-list" style={{ marginTop: "30px" }}>
      <div className="stepper">
        <div className={`step ${activeStep >= 0 ? 'active' : 'inactive'}`} style={{ textAlign: "center" }}>
          <div className="circle">
            <FontAwesomeIcon icon={activeStep >= 0 ? faCircleCheck : faCircle} size='2x' color='var(--primary)' className='icon' />
          </div>
          <div className="step-text">Collected</div>
          <div style={{ fontSize: "8px" }}>2023-05-12</div>
          {/* <div style={{ fontSize: "8px" }}>10:10 PM</div> */}
        </div>
        <div className={`line ${activeStep >= 0 ? 'active' : ''}`}></div>
        <div className={`step ${activeStep >= 1 ? 'active' : 'inactive'}`}>
          <div className="circle">
            <FontAwesomeIcon icon={activeStep >= 1 ? faCircleCheck : faCircle} size='2x' color='var(--primary)' className='icon' />
          </div>
          <div className="step-text">Delivered</div>
          <div style={{ fontSize: "8px" }}>2023-05-12</div>
          {/* <div style={{ fontSize: "8px" }}>10:10 PM</div> */}
        </div>
        <div className={`line ${activeStep >= 1 ? 'active' : ''}`}></div>
        <div className={`step ${activeStep >= 2 ? 'active' : 'inactive'}`}>
          <div className="circle">
            <FontAwesomeIcon icon={activeStep >= 2 ? faCircleCheck : faCircle} size='2x' color='var(--primary)' className='icon' />
          </div>
          <div className="step-text">Completed</div>
          <div style={{ fontSize: "8px" }}>2023-05-12</div>
          {/* <div style={{ fontSize: "8px" }}>10:10 PM</div> */}
        </div>
      </div>
    </div>
  );
};


function All(props) {
  const location = useLocation();
  const navigate = useNavigate();
  const queryParams = new URLSearchParams(location.search);
  const [jobDetails, setJobDetails] = useState(false);
  const [collectionJob, setCollectionJob] = useState(false);
  const [deliveryJob, setDeliveryJob] = useState(false);

  useEffect(() => {
    const jobNum = queryParams.get('jobnum');
    if (jobNum && !jobDetails) {
      window.SpinnerShow()
      let user = common.getUser();
      if (user) {
        axios.get(`job/details/${jobNum}`)
          .then((result) => {
            if (result && result.data.success) {
              setJobDetails(result.data.data)
              if (result.data.data.jobtype == 'Collection') setCollectionJob(true);
              else if (result.data.data.jobtype == 'Delivery') setDeliveryJob(true);
            }
          })
          .catch((error) => {
            console.log(error)
          })
      }
      window.SpinnerHide()
    }
  }, [queryParams]);

  const jobTransfer = (jobnum)  =>{
    navigate(`/transfer?jobnum=${jobnum}`);
  }

  return (
    <>
      <div className="page-wraper">

        <Sidebar />


        {/* <!-- Page Content --> */}
        <div className="page-content">

          <div className="content-inner pt-0">
            <div className="container fb">

              {/* <!-- Dashboard Area --> */}
              <div className="dashboard-area pt-4">

                {/* <!-- Item box Start --> */}

                <Stepper jobDetails={jobDetails} />
                {/* <!-- Item box Start --> */}
                {jobDetails &&
                  <div className="item-list recent-jobs-list pt-3">
                    {/* <h4 className="title my-4">Job Details</h4> */}

                    <ul>
                      <li style={{ border: "1px solid var(--title)", borderRadius: "10px", margin: "5px 0", background: "white" }}>
                        <div className="item-content">
                          <div className="item-inner" style={{ margin: "10px 0" }}>

                            <div className="d-flex align-items-center">
                              <div className="item-media media media-40" style={{ marginLeft: "0", marginRight: "15px" }}>
                                <img src="/images/avatar60x60.jpg" alt="logo" />
                              </div>
                              <div className="item-title-row" >
                                <div className="item-footer" style={{ marginBottom: "0" }}>
                                  <div className="d-flex align-items-center">
                                    <h5 className="me-3" style={{ marginBottom: "0" }}>{jobDetails.empname}</h5>
                                  </div>
                                </div>
                                <div className="item-subtitle" style={{ fontSize: "11px" }}>asda</div>
                              </div>
                            </div>

                            <div className="item-title-row">
                              <div className="item-footer" style={{ marginBottom: "0" }}>
                                <div className="d-flex align-items-center">
                                  <h6 className="me-3" style={{ fontSize: "12px" }}>Job No : {jobDetails.jobnum}</h6>
                                </div>
                                <div className="d-flex align-items-center">
                                  <h6 className="me-3" style={{ fontSize: "12px" }}>Type : {jobDetails.jobtype}</h6>
                                </div>
                              </div>
                            </div>
                            <div className="item-footer">
                              <div className="d-flex align-items-center">
                                <div className="item-subtitle">From : </div>
                              </div>
                              <div className="d-flex align-items-center">
                                <h6 className="me-3" style={{ fontSize: "12px" }}>Status : {jobDetails.status}</h6>
                              </div>
                            </div>
                          </div>
                        </div>
                      </li>

                      {deliveryJob && <>
                        {jobDetails.collectionplan.map((job, j) => {
                          return (<>
                            <li key={j} style={{ border: "1px solid var(--title)", borderRadius: "10px", margin: "5px 0", background: "white" }}>
                              <h5 className="title" style={{ textAlign: 'center', marginTop: "15px" }}>Collection of Items</h5>
                              <div className="order-status" style={{ marginTop: "0" }}>
                                <ul className="dz-timeline style-2">
                                  {job.items.map((item, i) => {
                                    return (<>
                                      <li key={i} className="timeline-item" style={{ margin: '0', padding: "8px 0" }}>
                                        <div className="d-flex align-items-center">
                                          <div className="item-title-row" style={{ margin: "0 5% 0 3%" }}>
                                            <input type="checkbox" />
                                          </div>

                                          <div className="item-media media media-40 dz-icon" style={{ margin: "0 15px 0 0" }}>
                                            <img src="/images/avatar60x60.jpg" alt="logo" />
                                          </div>

                                          <div className="item-title-row" style={{ width: "100%" }}>
                                            <div className="item-footer" style={{ marginBottom: "0", width: "inherit" }}>
                                              <div className="d-flex align-items-center">
                                                <h5 className="me-3" style={{ marginBottom: "0" }}>{item.matname}</h5>
                                              </div>
                                            </div>
                                            <div className="item-subtitle" style={{ fontSize: "11px" }}>{item.matnum}</div>
                                          </div>

                                          <div className="item-title-row" style={{ width: "100%", textAlign: "end", paddingRight: "5%" }}>
                                            <div className="item-subtitle" style={{ fontSize: "14px" }}>{item.qty}</div>
                                          </div>
                                        </div>
                                      </li>
                                    </>
                                    )
                                  })}
                                </ul>
                              </div>
                            </li>

                            <li style={{ border: "1px solid var(--title)", borderRadius: "10px", margin: "5px 0", background: "white" }}>
                              <h5 className="title" style={{ textAlign: 'center', marginTop: "15px" }}>Collection Details</h5>
                              <div className="item-content" style={{ marginTop: "10px" }}>
                                <div className="item-inner" style={{ margin: "10px 0" }}>

                                  <div className="item-title-row">
                                    <div className="item-footer" style={{ marginBottom: "0" }}>
                                      <div className="d-flex align-items-center">
                                        <h6 className="me-3" style={{ fontSize: "12px" }}><span style={{ fontSize: "11px", fontWeight: "normal" }}>Collect From</span><br /> {job.locationname}</h6>
                                      </div>
                                      <div className="d-flex align-items-center">
                                        <h6 className="me-3" style={{ fontSize: "12px" }}><span style={{ fontSize: "11px", fontWeight: "normal" }}>Items</span><br /> {job.items.length}</h6>
                                      </div>
                                      <div className="d-flex align-items-center">
                                        <h6 className="me-3" style={{ fontSize: "12px" }}><span style={{ fontSize: "11px", fontWeight: "normal" }}>Qty</span><br /> {job.items.reduce((total, itm) => total + itm.qty, 0)}</h6>
                                      </div>
                                    </div>
                                  </div>
                                  <div className="item-footer">
                                    <div className="d-flex align-items-center">
                                      <h6 className="me-3" style={{ fontSize: "12px" }}><span style={{ fontSize: "11px", fontWeight: "normal" }}>Address</span> : {job.locationaddr}</h6>
                                    </div>
                                  </div>
                                </div>
                              </div>
                            </li>
                          </>
                          )
                        })}</>}

                      <li style={{ border: "1px solid var(--title)", borderRadius: "10px", margin: "5px 0", minHeight: "200px" }}>

                      </li>

                      <li style={{ border: "1px solid var(--title)", borderRadius: "10px", margin: "5px 0", background: "white" }}>
                        <h5 className="title" style={{ textAlign: 'center', marginTop: "15px" }}>Items</h5>
                        <div className="order-status" style={{ marginTop: "0" }}>
                          <ul className="dz-timeline style-2">
                            {jobDetails.items.map((item, i) => {
                              return (
                                <li key={i} className="timeline-item" style={{ margin: '0', padding: "8px 0" }}>
                                  <div className="d-flex align-items-center">
                                    <div className="item-title-row" style={{ margin: "0 5% 0 3%" }}>
                                      <input type="checkbox" />
                                    </div>

                                    <div className="item-media media media-40 dz-icon" style={{ margin: "0 15px 0 0" }}>
                                      <img src="/images/avatar60x60.jpg" alt="logo" />
                                    </div>

                                    <div className="item-title-row" style={{ width: "100%" }}>
                                      <div className="item-footer" style={{ marginBottom: "0", width: "inherit" }}>
                                        <div className="d-flex align-items-center">
                                          <h5 className="me-3" style={{ marginBottom: "0" }}>{item.matname}</h5>
                                        </div>
                                      </div>
                                      <div className="item-subtitle" style={{ fontSize: "11px" }}>{item.matnum}</div>
                                    </div>

                                    <div className="item-title-row" style={{ width: "100%", textAlign: "end", paddingRight: "5%" }}>
                                      <div className="item-subtitle" style={{ fontSize: "14px" }}>{item.qty}</div>
                                    </div>
                                  </div>
                                </li>
                              )
                            })}
                          </ul>
                        </div>
                      </li>

                      <li style={{ borderRadius: "10px" }}>
                        <h5 className="title" style={{ textAlign: 'center', marginTop: "15px" }}>Remarks</h5>
                        <div className="pt-2">
                          <textarea rows={3} className="form-control" style={{ width: "100%" }} />
                        </div>
                      </li>
                      {deliveryJob &&
                        <li style={{ borderRadius: "10px", minHeight: "200px" }}>
                          <h5 className="title" style={{ textAlign: 'center', marginTop: "15px" }}>Signature</h5>
                          <SignaturePad />
                        </li>}

                      <div className="col-md-12" style={{ textAlign: "center" }}>
                        <button type="button" className="btn btn-danger w-100" style={{ maxWidth: "40%", borderRadius: "50px" }}>Collected</button>
                      </div>
                      {deliveryJob &&
                        <div className="col-md-12 pt-3" style={{ textAlign: "center" }}>
                          <button type="button" className="btn btn-primary w-100" style={{ borderRadius: "50px" }} onClick={()=>jobTransfer(jobDetails.jobnum)}>Request Transfer</button>
                        </div>}
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
