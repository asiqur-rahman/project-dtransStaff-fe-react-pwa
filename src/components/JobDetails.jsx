import React, { useEffect, useState, useRef } from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faCircle, faCircleCheck, faArrowRight, faPlusCircle } from '@fortawesome/free-solid-svg-icons';
import SignatureCanvas from 'react-signature-canvas';
import MenuBar from './Menubar';
import Sidebar from './Sidebar';
import { useLocation, useNavigate } from 'react-router-dom';
import * as common from '../utils/common.utils';
import axios from '../utils/axios.utils';
import './JobDetails.css';
import './Jobs.css';
import Quagga from 'quagga';
import { toast } from 'react-toastify';
import { Button, Modal } from 'react-bootstrap';

const SignaturePad = ({ editable, setSignature }) => {
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
    setSignature(signatureDataURL.substring(signatureDataURL.indexOf(',') + 1));
  };

  return (
    <div style={{ textAlign: "center", margin: "5px 0" }}>
      <SignatureCanvas ref={signatureRef} canvasProps={{
        style: { width: "100%", height: '300px', backgroundColor: "white" },
        className: 'signature-canvas',
        onTouchStart: handleStartEvent,
        onTouchMove: handleMoveEvent,
      }} />
      {editable && <>
        <button onClick={handleClear} style={{ marginRight: "5px" }} className="btn btn-sm btn-warning">Clear</button>
        <button onClick={handleSave} className="btn btn-sm btn-success">Save</button>
      </>}
    </div>
  );
};

function Stepper({ jobDetails, cActiveStep, dActiveStep, clickDisabled=false }) {
  const [activeStep, setActiveStep] = useState(0);

  const sActiveStep = (step) => {
    if(clickDisabled)return;
    setActiveStep(step);
    cActiveStep(step);
  }

  useEffect(() => {
    if (jobDetails) {
      // if ((jobDetails.jobtype == 'Delivery' && jobDetails.scheduledate.length > 1)
      //   || (jobDetails.jobtype == 'Collection' && jobDetails.scheduledate.length > 1)) {
      //   sActiveStep(1);
      // }
      if ((jobDetails.jobtype == 'Delivery' && jobDetails.collectedat.length > 1)
        || (jobDetails.jobtype == 'Collection' && jobDetails.collectedat.length > 1)) {
        sActiveStep(1);
      }
      if ((jobDetails.jobtype == 'Delivery' && jobDetails.deliveredat.length > 1)
        || (jobDetails.jobtype == 'Collection' && jobDetails.deliveredat.length > 1)) {
        sActiveStep(2);
      }
    }
  }, [jobDetails]);

  useEffect(() => {
    if (dActiveStep && dActiveStep > 0 && dActiveStep != activeStep) {
      setActiveStep(dActiveStep);
    }
  }, [dActiveStep]);

  return (
    <div className="item-list style-2 recent-jobs-list" style={{ marginTop: "30px" }}>
      <div className="stepper">
        <div className={`step ${activeStep >= 0 ? 'active' : 'inactive'}`} style={{ textAlign: "center", fontWeight: activeStep == 0 ? "800" : "normal" }}>
          <div className="circle" style={{ cursor: "pointer" }} onClick={() => sActiveStep(0)}>
            <FontAwesomeIcon icon={activeStep >= 0 && jobDetails && jobDetails.collectedat.length > 1 ? faCircleCheck : faCircle} size='2x' color='var(--primary)' className='icon' />
          </div>
          <div className="step-text">Collected</div>
          <div style={{ fontSize: "8px" }}>{jobDetails && jobDetails.collectedat}</div>
          {/* <div style={{ fontSize: "8px" }}>10:10 PM</div> */}
        </div>
        <div className={`line ${activeStep >= 0 ? 'active' : ''}`}></div>
        <div className={`step ${activeStep >= 1 ? 'active' : 'inactive'}`} style={{ textAlign: "center", fontWeight: activeStep == 1 ? "800" : "normal" }}>
          <div className="circle" style={{ cursor: "pointer" }} onClick={() => sActiveStep(1)}>
            <FontAwesomeIcon icon={activeStep >= 1 && jobDetails && jobDetails.deliveredat.length > 1 ? faCircleCheck : faCircle} size='2x' color='var(--primary)' className='icon' />
          </div>
          <div className="step-text">Delivered</div>
          <div style={{ fontSize: "8px" }}>{jobDetails && jobDetails.deliveredat}</div>
          {/* <div style={{ fontSize: "8px" }}>10:10 PM</div> */}
        </div>
        <div className={`line ${activeStep >= 1 ? 'active' : ''}`}></div>
        <div className={`step ${activeStep >= 2 ? 'active' : 'inactive'}`} style={{ textAlign: "center", fontWeight: activeStep == 2 ? "800" : "normal" }}>
          <div className="circle" style={{ cursor: "pointer" }} onClick={() => sActiveStep(2)}>
            <FontAwesomeIcon icon={activeStep >= 2 && jobDetails && jobDetails.deliveredat.length > 1 ? faCircleCheck : faCircle} size='2x' color='var(--primary)' className='icon' />
          </div>
          <div className="step-text">Completed</div>
          <div style={{ fontSize: "8px" }}>{jobDetails && jobDetails.deliveredat}</div>
          {/* <div style={{ fontSize: "8px" }}>10:10 PM</div> */}
        </div>
      </div>
    </div>
  );
};

function BarCodeScanner ({barCodeSetter,scannerOption}){

    const firstUpdate = useRef(true);
    const [isStart, setIsStart] = useState(false);
    const [tryAgain, setTryAgain] = useState(false);

    useEffect(() => {
      if(scannerOption=="1"){
        setIsStart(prevStart => !prevStart);
      }
      else if(scannerOption=="2"){
        setTryAgain(true);
      }
    }, [scannerOption]);

    useEffect(() => {
      return () => {
        if (isStart) stopScanner();
      };
    }, []);

    useEffect(() => {
      if (firstUpdate.current) {
        firstUpdate.current = false;
        return;
      }

      if (isStart) startScanner();
      else stopScanner();
    }, [isStart]);

    const _onDetected = res => {
      stopScanner();
      barCodeSetter(res.codeResult.code);
    };

    const startScanner = () => {
      Quagga.init(
        {
          inputStream: {
            type: 'LiveStream',
            target: document.querySelector('#scanner-container'),
            constraints: {
              facingMode: 'environment' // or user
            }
          },
          numOfWorkers: navigator.hardwareConcurrency,
          locate: true,
          frequency: 1,
          debug: {
            drawBoundingBox: true,
            showFrequency: true,
            drawScanline: true,
            showPattern: true
          },
          multiple: false,
          locator: {
            halfSample: false,
            patchSize: 'large', // x-small, small, medium, large, x-large
            debug: {
              showCanvas: false,
              showPatches: false,
              showFoundPatches: false,
              showSkeleton: false,
              showLabels: false,
              showPatchLabels: false,
              showRemainingPatchLabels: false,
              boxFromPatches: {
                showTransformed: false,
                showTransformedBox: false,
                showBB: false
              }
            }
          },
          decoder: {
            readers: ['ean_reader']
          }
        },
        err => {
          if (err) {
            return console.log(err);
          }
          Quagga.start();
        }
      );
      Quagga.onDetected(_onDetected);
      Quagga.onProcessed(result => {
        let drawingCtx = Quagga.canvas.ctx.overlay,
          drawingCanvas = Quagga.canvas.dom.overlay;

        if (result) {
          if (result.boxes) {
            drawingCtx.clearRect(
              0,
              0,
              parseInt(drawingCanvas.getAttribute('width')),
              parseInt(drawingCanvas.getAttribute('height'))
            );
            result.boxes.filter(box => box !== result.box).forEach(box => {
              Quagga.ImageDebug.drawPath(box, { x: 0, y: 1 }, drawingCtx, {
                color: 'green',
                lineWidth: 2
              });
            });
          }

          if (result.box) {
            Quagga.ImageDebug.drawPath(result.box, { x: 0, y: 1 }, drawingCtx, { color: '#00F', lineWidth: 2 });
          }

          if (result.codeResult && result.codeResult.code) {
            Quagga.ImageDebug.drawPath(result.line, { x: 'x', y: 'y' }, drawingCtx, { color: 'red', lineWidth: 3 });
          }
        }
      });
    };

    const stopScanner = () => {
      try {
        Quagga.offProcessed();
        Quagga.offDetected();
        Quagga.stop();
      } catch (error) {}
    };

    return <div>
      {isStart && (
        <div id="scanner-container" style={{ width: '100%' }}>
          <video className="video-stream" style={{ width: '100%', height: 'auto' }} />
        </div>
      )}
      <div className="col-md-12" style={{ textAlign: "center" }}>
        {tryAgain ? 
          <button type="button" className="btn btn-danger w-100" style={{ borderRadius: "50px" }} onClick={() => startScanner()}>Scan Again</button>
          :
          <button type="button" className="btn btn-danger w-100" style={{ borderRadius: "50px" }} onClick={() => setIsStart(prevStart => !prevStart)}>{isStart ? 'Stop' : 'Start'}</button>
        }
      </div>
    </div>
}

// manu to one 
function Return({ jobDetails }) {

  const [activeStep, setActiveStep] = useState(0);
  const [remarks, setRemarks] = useState('');
  const [items, setItems] = useState([]);
  const [returnList, setReturnList] = useState([]);
  const [showModal, setShowModal] = useState(false);
  const [selectedItem, setSelectedItem] = useState('');
  const [scannerOption, setScannerOption] = useState('0');

  const cActiveStep = (e) => {
    setActiveStep(e);
  }

  const addItem = () =>{
    if(selectedItem=="0000"){
      return toast.error("Please select an product !");
    }
    var data = items.filter(x=>x.barcode==selectedItem)[0];
    returnList.push(data);
    setReturnList(returnList);
    closeModal();
  }

  useEffect(()=>{
    // job/returns/productlist/:jobnum
    axios.get(`job/returns/productlist/${jobDetails.jobnum}`)
      .then((result) => {
        if (result && result.data.success) {
          setItems(result.data.data)
          setSelectedItem("0000");
        }
      })
      .catch((error) => {
        console.log(error)
      })
  },[])

  const handleShow = () => {
    window.handleRemoveFadeFromModal();
  };

  const closeModal = () => {
    setShowModal(false);
    closeScanner();
  };

  const barCodeSetter = (code) =>{
    var data = items.filter(x=>x.barcode==code);
    if(data.length>0){
      data=data[0];
      setSelectedItem(data.barcode);
      returnList.push(data);
      setReturnList(returnList);
      setScannerOption("1");
      toast.success("Product matched");
    }else{
      setScannerOption("2");
      toast.error(`No product matched by ${code}!`);
    }
    
  }

  const submitReturn = () =>{
    const items  = [];
    returnList.map(item => items.push({
      matnum: item.matnum,
      qty: 1
    }));

    const data ={
      jobnum: jobDetails.jobnum,
      remarks: remarks,
      items: items
    };
    axios.post(`job/returneditem`, data)
      .then((result) => {
        if (result && result.data.success) {
          toast.success(result.data.data.response)
        }
        else{
          toast.error(result.data.data.response)
        }
      })
      .catch((error) => {
        console.log(error)
      })
  }

  return (
    <>

      {/* <!-- Page Content --> */}
      <div className="page-content">

        <div className="content-inner pt-0">
          <div className="container fb">

            {/* <!-- Dashboard Area --> */}
            <div className="dashboard-area pt-4">

              {/* <!-- Item box Start --> */}

              <Stepper jobDetails={jobDetails} cActiveStep={cActiveStep} dActiveStep={activeStep} clickDisabled={true}/>
              {/* <!-- Item box Start --> */}
              {jobDetails &&
                <div className="item-list recent-jobs-list pt-3">
                  {/* <h4 className="title my-4">Job Details</h4> */}

                  <ul>
                    <li style={{ color: "var(--dark)", border: "1px solid var(--title)", borderRadius: "10px", margin: "5px 0", background: "white" }}>
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
                              <div className="item-subtitle" style={{ fontSize: "11px" }}>2023-05-12</div>
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
                              <div className="item-subtitle">Delivery to : {jobDetails.jobaddr}</div>
                            </div>
                            <div className="d-flex align-items-center">
                              <h6 className="me-3" style={{ fontSize: "12px" }}>Status : {jobDetails.status}</h6>
                            </div>
                          </div>
                        </div>
                      </div>
                    </li>

                    <h5 className="title" style={{ textAlign: 'center', marginTop: "15px" }}>Returned Items</h5>
                    <li style={{ border: "1px solid var(--title)", borderRadius: "10px", margin: "5px 0", background: "white" }}>
                      <div className="order-status" style={{ marginTop: "0" }}>
                        <ul className="dz-timeline style-2">
                          {returnList.map((item, i) => {
                            return (
                              <li key={i} className="timeline-item" style={{ margin: '0', padding: "8px 0" }}>
                                <div className="d-flex align-items-center">
                                  {/* <div className="item-title-row" style={{ margin: "0 5% 0 3%" }}>
                                      <input type="checkbox" />
                                    </div> */}

                                  <div className="item-media media media-40 dz-icon" style={{ margin: "0 15px 0 0" }}>
                                    <img src={item.imageurl && item.imageurl.length>0 ? item.imageurl: "/images/item.png"} alt="logo" />
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
                                    <div className="item-subtitle" style={{ fontSize: "14px" }}>{item.barcode}</div>
                                  </div>
                                </div>
                              </li>
                            )
                          })}

                            <li className="timeline-item" style={{ margin: '0', paddingTop: "18px" }}>
                              <div className="d-flex align-items-center">
                                <div className="item-title-row" style={{ width: "100%", textAlign:"center" }}>
                                  <div className="item-subtitle"><FontAwesomeIcon icon={faPlusCircle} size='3x' color='var(--primary)' className='icon' style={{ cursor:"pointer"}} onClick={()=>setShowModal(true)}/></div>
                                </div>
                              </div>
                            </li>
                        </ul>
                      </div>
                    </li>

                      <li style={{ borderRadius: "10px" }}>
                        <h5 className="title" style={{ textAlign: 'center', marginTop: "15px" }}>Remarks</h5>
                        <div className="pt-2">
                          <textarea rows={3} className="form-control" style={{ width: "100%" }} value={remarks} onChange={(e) => setRemarks(e.target.value)} />
                        </div>
                      </li>
                  </ul>

                  <div className="col-md-12" style={{ textAlign: "center" }}>
                    <button type="button" className="btn btn-danger w-100" style={{ maxWidth: "40%", borderRadius: "50px" }} onClick={submitReturn}>Collected</button>
                  </div>
                  
                  <Modal centered={true} show={showModal} onEntered={handleShow} onHide={closeModal} className="notification-modal">
                    <Modal.Header closeButton style={{display:"block"}}>
                      <Modal.Title style={{textAlign:"center"}}>Add Item</Modal.Title>
                    </Modal.Header>
                    <Modal.Body>
                      <ul>
                          <li style={{ borderRadius: "10px" }}>
                            <h5 className="title">Product</h5>
                            <div className="pt-2">
                            <select className="form-control" onChange={(e)=>setSelectedItem(e.target.value)}>
                              <option value="0000" disabled selected>-- Select a product --</option>
                              {items.map((item,i)=>{
                                return (<option key={i} value={item.barcode}>{item.matname}</option>)
                              })}
                            </select>
                            </div>
                            <div>
                            <br/>
                            <BarCodeScanner barCodeSetter={barCodeSetter} scannerOption={scannerOption}/>
                          </div>
                          </li>
                      </ul>
                    </Modal.Body>
                    <Modal.Footer>
                      <Button variant="primary" onClick={addItem}>
                        Add
                      </Button>
                      <Button variant="secondary" onClick={closeModal}>
                        Close
                      </Button>
                    </Modal.Footer>
                  </Modal>
                  
                </div>
              }
            </div>
          </div>
        </div>

      </div>
      {/* <!-- Page Content End--> */}

    </>
  )
}

function JORJob({ jobDetails, jobTransfer, collected, delivered, setShowReturn }) {

  const [jobdetailsData, setJobdetailsData] = useState(null);
  const [details, setDetails] = useState(0);
  const [activeStep, setActiveStep] = useState(0);
  const [signature, setSignature] = useState('');
  const [remarks, setRemarks] = useState('');
  const [remarks2, setRemarks2] = useState('');

  useEffect(()=>{
    if(jobDetails){
      setJobdetailsData(jobDetails);
    }
  },[jobDetails])

  const cActiveStep = (e) => {
    setActiveStep(e);
  }

  const makeDelivered = () => {
    if (signature.length < 5) {
      toast.error("Please provide the signature and press save !")
      return;
    }
    else {
      const selectedData = jobdetailsData.items.map(item => ({
        matnum: item.matnum,
        actualqty: item.actualqty
      }));
      delivered(jobDetails.jobnum, remarks2, signature, selectedData);
      cActiveStep(2);
    }
  }
  
  const setActualQty = (qty, matnum) =>{

    jobdetailsData.items.forEach(item => {
      if(item.matnum==matnum) {
        item.actualqty=qty;
      }
    })
    console.log(jobdetailsData.items)
    setJobdetailsData(jobdetailsData);

  }

  const showDetails = (j) => {
    if (details == j) {
      setDetails(-1);
    }
    else {
      setDetails(j);
    }
  }

  return (
    <>

      {/* <!-- Page Content --> */}
      <div className="page-content">

        <div className="content-inner pt-0">
          <div className="container fb">

            {/* <!-- Dashboard Area --> */}
            <div className="dashboard-area pt-4">

              {/* <!-- Item box Start --> */}

              <Stepper jobDetails={jobDetails} cActiveStep={cActiveStep} dActiveStep={activeStep} />
              {/* <!-- Item box Start --> */}
              {jobDetails &&
                <div className="item-list recent-jobs-list pt-3">
                  {/* <h4 className="title my-4">Job Details</h4> */}

                  <ul>
                    <li style={{ color: "var(--dark)", border: "1px solid var(--title)", borderRadius: "10px", margin: "5px 0", background: "white" }}>
                      <div className="item-content">
                        <div className="item-inner" style={{ margin: "10px 0" }}>

                          <div className="d-flex align-items-center">
                            <div className="item-media media media-40" style={{ marginLeft: "0", marginRight: "15px" }}>
                              <img src="/images/avatar60x60.jpg" alt="logo" />
                            </div>
                            <div className="item-title-row" >
                              <div className="item-footer" style={{ marginBottom: "0" }}>
                                <div className="d-flex align-items-center">
                                  <h5 className="me-3" style={{ color: "var(--dark)",marginBottom: "0" }}>{jobDetails.empname}</h5>
                                </div>
                              </div>
                              <div className="item-subtitle" style={{ fontSize: "11px" }}>2023-05-12</div>
                            </div>
                          </div>

                          <div className="item-title-row">
                            <div className="item-footer" style={{ marginBottom: "0" }}>
                              <div className="d-flex align-items-center">
                                <h6 className="me-3" style={{ color: "var(--dark)",fontSize: "12px" }}>Job No : {jobDetails.jobnum}</h6>
                              </div>
                              <div className="d-flex align-items-center">
                                <h6 className="me-3" style={{ color: "var(--dark)",fontSize: "12px" }}>Type : {jobDetails.jobtype}</h6>
                              </div>
                            </div>
                          </div>
                          <div className="item-footer">
                            <div className="d-flex align-items-center">
                              <div className="item-subtitle">Delivery to : {jobDetails.jobaddr}</div>
                            </div>
                            <div className="d-flex align-items-center">
                              <h6 className="me-3" style={{ color: "var(--dark)",fontSize: "12px" }}>Status : {jobDetails.status}</h6>
                            </div>
                          </div>
                        </div>
                      </div>
                    </li>

                    {/* Step 1 Start*/}
                    {(activeStep == 0 || activeStep == 2) && <>
                      <h5 className="title" style={{ textAlign: 'center', marginTop: "15px" }}>Collection of Items</h5>
                      <li style={{ color: "var(--dark)",border: "1px solid var(--title)", borderRadius: "10px", margin: "5px 0", background: "white" }}>
                        <div className="order-status" style={{ marginTop: "0" }}>
                          <ul className="dz-timeline style-2">
                            {jobDetails.items.map((item, i) => {
                              return (
                                <li key={i} className="timeline-item" style={{ margin: '0', padding: "8px 0" }}>
                                  <div className="d-flex align-items-center">
                                    {activeStep == 1 &&
                                      <div className="item-title-row" style={{ margin: "0 5% 0 3%" }}>
                                        <input type="checkbox" />
                                      </div>}

                                    <div className="item-media media media-40 dz-icon" style={{ margin: "0 15px 0 0" }}>
                                      <img src={item.imageurl.length>0 ? item.imageurl: "/images/item.png"} alt="logo" />
                                    </div>

                                    <div className="item-title-row" style={{ width: "100%" }}>
                                      <div className="item-footer" style={{ marginBottom: "0", width: "inherit" }}>
                                        <div className="d-flex align-items-center">
                                          <h5 className="me-3" style={{ color: "var(--dark)",marginBottom: "0" }}>{item.matname}</h5>
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

                      <h5 className="title" style={{ textAlign: 'center', marginTop: "15px" }}>Collection Details</h5>
                      {jobDetails.collectionplan.map((job, j) => {
                        return (

                          <li key={j} style={{ color: "var(--dark)",border: "1px solid var(--title)", borderRadius: "10px", margin: "5px 0", background: "white" }}>
                            <div className="item-content" style={{ marginTop: "10px" }}>
                              <div className="item-inner" style={{ margin: "10px 0" }}>

                                <div className="item-title-row">
                                  <div className="item-footer" style={{ marginBottom: "0" }}>
                                    <div className="d-flex align-items-center">
                                      <h6 className="me-3" style={{ color: "var(--dark)",fontSize: "12px" }}><span style={{ fontSize: "11px", fontWeight: "normal" }}>Collect From</span><br /> {job.locationname}</h6>
                                    </div>
                                    <div className="d-flex align-items-center">
                                      <h6 className="me-3" style={{ color: "var(--dark)",fontSize: "12px" }}><span style={{ fontSize: "11px", fontWeight: "normal" }}>Items</span><br /> {job.items.length}</h6>
                                    </div>
                                    <div className="d-flex align-items-center">
                                      <h6 className="me-3" style={{ color: "var(--dark)",fontSize: "12px" }}><span style={{ fontSize: "11px", fontWeight: "normal" }}>Qty</span><br /> {job.items.reduce((total, itm) => total + itm.qty, 0)}</h6>
                                    </div>
                                    <div className="d-flex align-items-center">
                                      <FontAwesomeIcon icon={faArrowRight} color='var(--dark)' className='icon' onClick={() => showDetails(j)} style={{ cursor: "pointer" }} />
                                    </div>
                                  </div>
                                </div>
                                <div className="item-footer">
                                  <div className="d-flex align-items-center">
                                    <h6 className="me-3" style={{ color: "var(--dark)",fontSize: "12px" }}><span style={{ color: "var(--dark)",fontSize: "11px", fontWeight: "normal" }}>Address</span> : {job.locationaddr}</h6>
                                  </div>
                                </div>
                              </div>
                            </div>
                            <div style={{ display: details == j ? 'block' : 'none' }}>
                              <li style={{ border: "1px solid var(--dark)", borderRadius: "10px", margin: "5px 0", minHeight: "200px" }}>

                              </li>

                              <h5 className="title" style={{ color: "var(--dark)",textAlign: 'center', marginTop: "15px" }}>Items</h5>
                              <div className="order-status" style={{ marginTop: "0" }}>
                                <ul className="dz-timeline style-2">
                                  {job.items.map((item, i) => {
                                    return (
                                      <li key={i} className="timeline-item" style={{ margin: '0', padding: "8px 0" }}>
                                        <div className="d-flex align-items-center">
                                          {/* <div className="item-title-row" style={{ margin: "0 5% 0 3%" }}>
                                            <input type="checkbox" />
                                          </div> */}

                                          <div className="item-media media media-40" style={{ margin: "0 15px 0 0" }}>
                                            <img src={item.imageurl.length>0 ? item.imageurl: "/images/item.png"} alt="logo" />
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
                            </div>
                          </li>

                        )
                      })}
                    </>}
                    {/* Step 1 End */}

                    {/* Step 2 Start*/}
                    {(activeStep > 0) && <>

                      <li style={{ border: "1px solid var(--dark)", borderRadius: "10px", margin: "5px 0", minHeight: "200px", background: "white" }}>

                      </li>
                      <h5 className="title" style={{ color: "var(--dark)",textAlign: 'center', marginTop: "15px" }}>Collection of Items</h5>
                      <li style={{ border: "1px solid var(--title)", borderRadius: "10px", margin: "5px 0", background: "white" }}>
                        <div className="order-status" style={{ marginTop: "0" }}>
                          <ul className="dz-timeline style-2">
                            {jobDetails.items.map((item, i) => {
                              return (
                                <li key={i} className="timeline-item" style={{ margin: '0', padding: "8px 0" }}>
                                  <div className="d-flex align-items-center">
                                    {/* <div className="item-title-row" style={{ margin: "0 5% 0 3%" }}>
                                        <input type="checkbox" />
                                      </div> */}

                                    <div className="item-media media media-40 dz-icon" style={{ margin: "0 15px 0 0" }}>
                                      <img src={item.imageurl.length>0 ? item.imageurl: "/images/item.png"} alt="logo" />
                                    </div>

                                    <div className="item-title-row" style={{ width: "100%" }}>
                                      <div className="item-footer" style={{ marginBottom: "0", width: "inherit" }}>
                                        <div className="d-flex align-items-center">
                                          <h5 className="me-3" style={{ color: "var(--dark)",marginBottom: "0" }}>{item.matname}</h5>
                                        </div>
                                      </div>
                                      <div className="item-subtitle" style={{ color: "var(--dark)",fontSize: "11px" }}>{item.matnum}</div>
                                    </div>

                                    <div className="item-title-row" style={{ color: "var(--dark)",width: "100%", textAlign: "end", paddingRight: "5%" }}>
                                      <div className="item-subtitle" style={{ fontSize: "14px" }}>DO</div>
                                      <div className="item-subtitle" style={{ fontSize: "14px" }}>{item.qty}</div>
                                    </div>

                                    <div className="item-title-row" style={{ color: "var(--dark)",width: "100%", textAlign: "end", paddingRight: "5%" }}>
                                      <div className="item-subtitle" style={{ fontSize: "14px" }}>Actual</div>
                                      {activeStep<2 ? 
                                        <input type='number' defaultValue={item.actualqty} onChange={(e)=>setActualQty(e.target.value, item.matnum)} className='form-control no-spin' style={{ float: "right", maxWidth: "35%", minWidth: "50px", padding: "3%", textAlign:"center" }} />
                                        :
                                        <div className="item-subtitle" style={{ fontSize: "14px" }}>{item.actualqty}</div>
                                      }
                                    </div>
                                  </div>
                                </li>

                              )
                            })}
                          </ul>
                        </div>
                      </li>
                    </>}
                    {/* Step 2 End */}

                    {activeStep == 1 &&
                      <li style={{ borderRadius: "10px", minHeight: "200px" }}>
                        <h5 className="title" style={{ textAlign: 'center', marginTop: "15px" }}>Signature</h5>
                        <SignaturePad editable={activeStep < 2} setSignature={setSignature} />
                      </li>
                    }

                    {activeStep == 2 &&
                      <>
                        <li style={{ border: "1px solid var(--dark)", borderRadius: "10px", margin: "5px 0" }}>
                          <h5 className="title" style={{ textAlign: 'center', marginTop: "15px" }}>Signature</h5>
                          <img src={"data:image/png;base64," +jobDetails.signature}/>
                        </li>

                        <li style={{ borderRadius: "10px" }}>
                          <h5 className="title" style={{ textAlign: 'center', marginTop: "15px" }}>Remarks</h5>
                          <div className="pt-2">
                            <textarea rows={3} readOnly={true} className="form-control" style={{ width: "100%" }} value={jobDetails.deliveryremark} />
                          </div>
                        </li>
                      </>
                    }

                    {activeStep == 0 &&
                      <li style={{ borderRadius: "10px" }}>
                        <h5 className="title" style={{ textAlign: 'center', marginTop: "15px" }}>Remarks</h5>
                        <div className="pt-2">
                          <textarea rows={3} className="form-control" style={{ width: "100%" }} value={remarks} onChange={(e) => setRemarks(e.target.value)} />
                        </div>
                      </li>
                    }

                    {activeStep == 1 &&
                      <li style={{ borderRadius: "10px" }}>
                        <h5 className="title" style={{ textAlign: 'center', marginTop: "15px" }}>Remarks</h5>
                        <div className="pt-2">
                          <textarea rows={3} className="form-control" style={{ width: "100%" }} value={remarks2} onChange={(e) => setRemarks2(e.target.value)} />
                        </div>
                      </li>
                    }
                  </ul>

                  {/* {activeStep == 0 && <> */}
                  {activeStep == 0 && jobDetails.allowcollect &&
                    <div className="col-md-12" style={{ textAlign: "center" }}>
                      <button type="button" className="btn btn-danger w-100" onClick={() => { cActiveStep(1); collected(jobDetails.jobnum, remarks); }} style={{ maxWidth: "40%", borderRadius: "50px" }}>Collected</button>
                    </div>
                  }

                  {activeStep == 0 && jobDetails.allowtransfer &&
                    <div className="col-md-12 pt-3" style={{ textAlign: "center" }}>
                      <button type="button" className="btn btn-primary w-100" style={{ borderRadius: "50px" }} onClick={() => jobTransfer(jobDetails.jobnum)}>Request Transfer</button>
                    </div>
                  }

                  {activeStep == 1 && jobDetails.allowdeliver && <>
                    <div className="col-md-12" style={{ textAlign: "center" }}>
                      <button type="button" className="btn btn-danger w-100" onClick={() => { makeDelivered(); }} style={{ maxWidth: "40%", borderRadius: "50px" }}>Delivered</button>
                    </div>
                  </>
                  }

                  {activeStep == 2 && jobDetails.allowreturn && <>
                    <div className="col-md-12" style={{ textAlign: "center" }}>
                      <button type="button" className="btn btn-danger w-100" style={{ borderRadius: "50px" }} onClick={()=>setShowReturn(true)}>Collect Returned Items</button>
                    </div>
                  </>
                  }
                </div>
              }
            </div>
          </div>
        </div>

      </div>
      {/* <!-- Page Content End--> */}

    </>
  )
}

function JOSJob({ jobDetails, jobTransfer, collected, delivered }) {

  const [details, setDetails] = useState(0);
  const [activeStep, setActiveStep] = useState(0);
  const [remarks, setRemarks] = useState('');
  const [remarks2, setRemarks2] = useState('');

  const cActiveStep = (e) => {
    setActiveStep(e);
  }

  const showDetails = (j) => {
    if (details == j) {
      setDetails(-1);
    }
    else {
      setDetails(j);
    }
  }

  return (
    <>

      {/* <!-- Page Content --> */}
      <div className="page-content">

        <div className="content-inner pt-0">
          <div className="container fb">

            {/* <!-- Dashboard Area --> */}
            <div className="dashboard-area pt-4">

              {/* <!-- Item box Start --> */}

              <Stepper jobDetails={jobDetails} cActiveStep={cActiveStep} dActiveStep={activeStep} />
              {/* <!-- Item box Start --> */}
              {jobDetails &&
                <div className="item-list recent-jobs-list pt-3">
                  {/* <h4 className="title my-4">Job Details</h4> */}

                  <ul>
                    <li style={{ color: 'var(--dark)', border: "1px solid var(--title)", borderRadius: "10px", margin: "5px 0", background: "white" }}>
                      <div className="item-content">
                        <div className="item-inner" style={{ margin: "10px 0" }}>

                          <div className="d-flex align-items-center">
                            <div className="item-media media media-40 dz-icon" style={{ marginLeft: "0", marginRight: "15px" }}>
                              <img src="/images/avatar60x60.jpg" alt="logo" />
                            </div>
                            <div className="item-title-row" >
                              <div className="item-footer" style={{ marginBottom: "0" }}>
                                <div className="d-flex align-items-center">
                                  <h5 className="me-3" style={{ color: 'var(--dark)', marginBottom: "0" }}>{jobDetails.empname}</h5>
                                </div>
                              </div>
                              <div className="item-subtitle" style={{ color: 'var(--dark)', fontSize: "11px" }}>2023-05-12</div>
                            </div>
                          </div>

                          <div className="item-title-row">
                            <div className="item-footer" style={{ marginBottom: "0" }}>
                              <div className="d-flex align-items-center">
                                <h6 className="me-3" style={{ color: 'var(--dark)', fontSize: "12px" }}>Job No : {jobDetails.jobnum}</h6>
                              </div>
                              <div className="d-flex align-items-center">
                                <h6 className="me-3" style={{ color: 'var(--dark)', fontSize: "12px" }}>Type : {jobDetails.jobtype}</h6>
                              </div>
                            </div>
                          </div>
                          <div className="item-footer">
                            <div className="d-flex align-items-center">
                              <div className="item-subtitle">Deliver To : {jobDetails.jobaddr}</div>
                            </div>
                            <div className="d-flex align-items-center">
                              <h6 className="me-3" style={{ color: 'var(--dark)', fontSize: "12px" }}>Status : {jobDetails.status}</h6>
                            </div>
                          </div>
                        </div>
                      </div>
                    </li>

                    {/* Step 1 Start*/}
                    {(activeStep == 0 || activeStep == 2) && <>
                      <li style={{ border: "1px solid var(--dark)", borderRadius: "10px", margin: "5px 0", minHeight: "200px", background: "white" }}>

                      </li>
                      <h5 className="title" style={{ color: 'var(--dark)', textAlign: 'center', marginTop: "15px" }}>Collection of Items</h5>
                      <li style={{ border: "1px solid var(--title)", borderRadius: "10px", margin: "5px 0", background: "white" }}>
                        <div className="order-status" style={{ marginTop: "0" }}>
                          <ul className="dz-timeline style-2">
                            {jobDetails.items.map((item, i) => {
                              return (
                                <li key={i} className="timeline-item" style={{ color: 'var(--dark)', margin: '0', padding: "8px 0" }}>
                                  <div className="d-flex align-items-center">
                                    {activeStep == 1 &&
                                      <div className="item-title-row" style={{ margin: "0 5% 0 3%" }}>
                                        <input type="checkbox" />
                                      </div>}

                                    <div className="item-media media media-40 dz-icon" style={{ margin: "0 15px 0 0" }}>
                                      <img src={item.imageurl.length>0 ? item.imageurl: "/images/item.png"} alt="logo" />
                                    </div>

                                    <div className="item-title-row" style={{ width: "100%" }}>
                                      <div className="item-footer" style={{ marginBottom: "0", width: "inherit" }}>
                                        <div className="d-flex align-items-center">
                                          <h5 className="me-3" style={{ color: 'var(--dark)', marginBottom: "0" }}>{item.matname}</h5>
                                        </div>
                                      </div>
                                      <div className="item-subtitle" style={{ color: 'var(--dark)', fontSize: "11px" }}>{item.matnum}</div>
                                    </div>

                                    <div className="item-title-row" style={{ width: "100%", textAlign: "end", paddingRight: "5%" }}>
                                      <div className="item-subtitle" style={{ color: 'var(--dark)', fontSize: "14px" }}>{item.qty}</div>
                                    </div>
                                  </div>
                                </li>
                              )
                            })}
                          </ul>
                        </div>
                      </li>



                    </>}
                    {/* Step 1 End */}

                    {/* Step 2 Start*/}
                    {(activeStep > 0) && <>
                      {jobDetails.deliveryplan.map((job, j) => {
                        return (

                          <li key={j} style={{ color: 'var(--dark)', border: "1px solid var(--title)", borderRadius: "10px", margin: "5px 0", background: "white" }}>
                            <div className="item-content" style={{ marginTop: "10px" }}>
                              <div className="item-inner" style={{ margin: "10px 0" }}>

                                <div className="item-title-row">
                                  <div className="item-footer" style={{ marginBottom: "0" }}>
                                    <div className="d-flex align-items-center">
                                      <h6 className="me-3" style={{ color: 'var(--dark)', fontSize: "12px" }}><span style={{ fontSize: "11px", fontWeight: "normal" }}>Collect From</span><br /> {job.locationname}</h6>
                                    </div>
                                    <div className="d-flex align-items-center">
                                      <h6 className="me-3" style={{ color: 'var(--dark)', fontSize: "12px" }}><span style={{ fontSize: "11px", fontWeight: "normal" }}>Items</span><br /> {job.items.length}</h6>
                                    </div>
                                    <div className="d-flex align-items-center">
                                      <h6 className="me-3" style={{ color: 'var(--dark)', fontSize: "12px" }}><span style={{ fontSize: "11px", fontWeight: "normal" }}>Qty</span><br /> {job.items.reduce((total, itm) => total + itm.qty, 0)}</h6>
                                    </div>
                                    <div className="d-flex align-items-center my-icon-container">
                                      <FontAwesomeIcon icon={faArrowRight} className='icon' onClick={() => showDetails(j)} style={{ cursor: "pointer" }} />
                                    </div>
                                  </div>
                                </div>
                                <div className="item-footer">
                                  <div className="d-flex align-items-center">
                                    <h6 className="me-3" style={{ color: 'var(--dark)', fontSize: "12px" }}><span style={{ fontSize: "11px", fontWeight: "normal" }}>Address</span> : {job.locationaddr}</h6>
                                  </div>
                                </div>
                              </div>
                            </div>
                            <div style={{ display: details == j ? 'block' : 'none' }}>
                              <li style={{ color: 'var(--dark)', border: "1px solid var(--dark)", borderRadius: "10px", margin: "5px 0", minHeight: "200px" }}>

                              </li>

                              <h5 className="title" style={{ color: 'var(--dark)', textAlign: 'center', marginTop: "15px" }}>Items</h5>
                              <div className="order-status" style={{ color: 'var(--dark)', marginTop: "0" }}>
                                <ul className="dz-timeline style-2">
                                  {job.items.map((item, i) => {
                                    return (
                                      <li key={i} className="timeline-item" style={{ margin: '0', padding: "8px 0" }}>
                                        <div className="d-flex align-items-center">
                                          {/* <div className="item-title-row" style={{ margin: "0 5% 0 3%" }}>
                                            <input type="checkbox" />
                                          </div> */}

                                          <div className="item-media media media-40 dz-icon" style={{ margin: "0 15px 0 0" }}>
                                            <img src={item.imageurl.length>0 ? item.imageurl: "/images/item.png"} alt="logo" />
                                          </div>

                                          <div className="item-title-row" style={{ width: "100%" }}>
                                            <div className="item-footer" style={{ marginBottom: "0", width: "inherit" }}>
                                              <div className="d-flex align-items-center">
                                                <h5 className="me-3" style={{ color: 'var(--dark)', marginBottom: "0" }}>{item.matname}</h5>
                                              </div>
                                            </div>
                                            <div className="item-subtitle" style={{ color: 'var(--dark)', fontSize: "11px" }}>{item.matnum}</div>
                                          </div>

                                          <div className="item-title-row" style={{ width: "100%", textAlign: "end", paddingRight: "5%" }}>
                                            <div className="item-subtitle" style={{ color: 'var(--dark)', fontSize: "14px" }}>{item.qty}</div>
                                          </div>
                                        </div>
                                      </li>
                                    )
                                  })}
                                </ul>
                              </div>
                            </div>
                          </li>

                        )
                      })}
                    </>}
                    {/* Step 2 End */}
                    {/* 
                      {activeStep > 0 &&
                        <li style={{ borderRadius: "10px", minHeight: "200px" }}>
                          <h5 className="title" style={{ textAlign: 'center', marginTop: "15px" }}>Signature</h5>
                          <SignaturePad editable={activeStep<2}/>
                        </li>} */}
                    {activeStep == 0 &&
                      <li style={{ borderRadius: "10px" }}>
                        <h5 className="title" style={{ textAlign: 'center', marginTop: "15px" }}>Remarks</h5>
                        <div className="pt-2">
                          <textarea rows={3} className="form-control" style={{ width: "100%" }} value={remarks} onChange={(e) => setRemarks(e.target.value)} />
                        </div>
                      </li>
                    }
                    {activeStep == 1 &&
                      <li style={{ borderRadius: "10px" }}>
                        <h5 className="title" style={{ textAlign: 'center', marginTop: "15px" }}>Remarks</h5>
                        <div className="pt-2">
                          <textarea rows={3} className="form-control" style={{ width: "100%" }} value={remarks2} onChange={(e) => setRemarks2(e.target.value)} />
                        </div>
                      </li>
                    }

                    {activeStep == 2 &&
                      <>
                        <li style={{ borderRadius: "10px" }}>
                          <h5 className="title" style={{ textAlign: 'center', marginTop: "15px" }}>Remarks</h5>
                          <div className="pt-2">
                            <textarea rows={3} readOnly={true} className="form-control" style={{ width: "100%" }} value={jobDetails.collectionremark} />
                          </div>
                        </li>
                      </>
                    }
                  </ul>

                  {activeStep == 0 && jobDetails.allowcollect && <>
                    <div className="col-md-12" style={{ textAlign: "center" }}>
                      <button type="button" className="btn btn-danger w-100" onClick={() => { cActiveStep(1); collected(jobDetails.jobnum, remarks); }} style={{ maxWidth: "40%", borderRadius: "50px" }}>Collected</button>
                    </div>
                    </>
                  }

                  {activeStep == 0 && jobDetails.allowtransfer && <>
                    <div className="col-md-12 pt-3" style={{ textAlign: "center" }}>
                      <button type="button" className="btn btn-primary w-100" style={{ borderRadius: "50px" }} onClick={() => jobTransfer(jobDetails.jobnum)}>Request Transfer</button>
                    </div>
                  </>}

                  {activeStep == 1 && jobDetails.allowdeliver && <>
                    <div className="col-md-12" style={{ textAlign: "center" }}>
                      <button type="button" className="btn btn-danger w-100" onClick={() => { cActiveStep(2); delivered(jobDetails.jobnum, remarks2); }} style={{ maxWidth: "40%", borderRadius: "50px" }}>Delivered</button>
                    </div>
                  </>}

                  {activeStep == 2 && jobDetails.allowreturn && <>
                    <div className="col-md-12" style={{ textAlign: "center" }}>
                      <button type="button" className="btn btn-danger w-100" style={{ borderRadius: "50px" }} onClick={()=>setShowReturn(true)}>Collect Returned Items</button>
                    </div>
                  </>}
                </div>
              }
            </div>
          </div>
        </div>

      </div>
      {/* <!-- Page Content End--> */}

    </>
  )
}

function All(props) {
  const location = useLocation();
  const navigate = useNavigate();
  const queryParams = new URLSearchParams(location.search);
  const [jobDetails, setJobDetails] = useState(false);
  const [showReturn, setShowReturn] = useState(false);
  const [collectionJob, setCollectionJob] = useState(false);
  const [deliveryJob, setDeliveryJob] = useState(false);
  const [jos, setJos] = useState(false);
  const [jor, setJor] = useState(false);

  const fetchJobDetails = (jobNum) => {
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

  useEffect(() => {
    const jobNum = queryParams.get('jobnum');
    const jobtypecode = queryParams.get('jobtypecode');
    if (jobNum && !jobDetails && jobtypecode) {
      if (jobtypecode == "JOS") setJos(true);
      if (jobtypecode == "JOR") setJor(true);
      window.SpinnerShow()
      let user = common.getUser();
      if (user) {
        fetchJobDetails(jobNum)
      }
      window.SpinnerHide()
    }
  }, [queryParams]);

  const jobTransfer = (jobnum) => {
    navigate(`/transfer?jobnum=${jobnum}`);
  }

  const collected = (jobnum, remarks) => {
    window.SpinnerShow();
    const body = {
      jobnum: jobnum,
      status: "Collected",
      remarks: remarks
    }
    axios.post(`job/updatestatus`, body)
      .then((result) => {
        if (result && result.data.success) {
          fetchJobDetails(jobnum)
        }
      })
      .catch((error) => {
        console.log(error)
      })
    window.SpinnerHide();
  }

  const delivered = (jobnum, remarks, signature, items=[]) => {
    window.SpinnerShow();

    const body = {
      jobnum: jobnum,
      status: "Delivered",
      remarks: remarks,
      signature: signature??"QUI=",
      items: items
    }
    axios.post(`job/updatestatus`, body)
      .then((result) => {
        if (result && result.data.success) {
          fetchJobDetails(jobnum)
        }
      })
      .catch((error) => {
        console.log(error)
      })
    window.SpinnerHide();
  }
  return (
    <>
      <div className="page-wraper">
        <Sidebar menuName={"Job Details"} />
        {jor && !showReturn && <JORJob jobDetails={jobDetails} jobTransfer={jobTransfer} collected={collected} delivered={delivered} setShowReturn={setShowReturn}/>}
        {jos && !showReturn && <JOSJob jobDetails={jobDetails} jobTransfer={jobTransfer} collected={collected} delivered={delivered} />}
        {showReturn && <Return jobDetails={jobDetails} jobTransfer={jobTransfer} collected={collected} delivered={delivered} />}
        <MenuBar />
      </div>
    </>
  )
}

export default All
