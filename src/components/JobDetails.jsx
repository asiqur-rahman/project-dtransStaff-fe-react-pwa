import React, { useEffect, useState, useRef } from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faCircle, faCircleCheck, faArrowRight, faPlusCircle, faX } from '@fortawesome/free-solid-svg-icons';
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
import GoogleMap from './GoogleMap'
import GoogleMaps from './GoogleMaps'

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
      if(scannerOption){
        stopScanner();
      }
      else if(!scannerOption){
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
      barCodeSetter(res.codeResult.code);
    };

    const startScanner = () => {
      Quagga.init(
        {
          inputStream: {
            type: 'LiveStream',
            target: document.querySelector('#scanner-container'),
            constraints: {
              facingMode: { exact: 'environment' } // or user
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
            readers: [
              Quagga.ALL
            ]
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
        setIsStart(false);
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
          <button type="button" className="btn btn-danger w-100" style={{ borderRadius: "50px" }} onClick={() => setIsStart(prevStart => !prevStart)}>{isStart ? 'Stop Scan' : 'Start Scan'}</button>
        }
      </div>
    </div>
}

// manu to one 
function Return({ jobDetails }) {

  const navigate = useNavigate();
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
    var previousData=returnList;
    setReturnList([]);
    var data = items.filter(x=>x.barcode==selectedItem)[0];
    if(!data.qty)data.qty=1;
    if(previousData.filter(x=>x.barcode==selectedItem).length>0){
      previousData.forEach(element => {
        if(element.barcode==selectedItem){
          element.qty+=1;
        }
      });
    }else{
      previousData.push(data);
    }
    setReturnList(previousData);
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
  };

  const barCodeSetter = (code) =>{
    var data = items.filter(x=>x.barcode==code);
    if(data.length>0){
      data=data[0];
      setSelectedItem(data.barcode);
      setScannerOption(Date.now);
      toast.success("Product matched");
    }else{
      setScannerOption(false);
      toast.error(`No product matched by ${code}!`);
    }
    
  }

  const removeItem = (matnum) =>{
    const removedList=returnList.filter(x=>x.matnum!=matnum);
    setReturnList(removedList)
  }

  const submitReturn = () =>{
    const items  = [];
    let allOk =true;
    console.log(returnList)
    returnList.forEach(element => {
      if(element.qty<1){
        toast.error("Quantity must be greater then 0");
        return allOk=false;
      }
    });
    if(!allOk){
      return false;
    }
    returnList.map(item => items.push({
      matnum: item.matnum,
      qty: item.qty
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
          location.reload();
        }
        else{
          toast.error(result.data.data.response)
        }
      })
      .catch((error) => {
        console.log(error)
      })
  }

  const setQty = (qty, matnum) =>{
    // if(qty<1){
    //   toast.error("Quantity must be greater then 0")
    // }
    returnList.forEach(element => {
      if(element.matnum==matnum){
        element.qty=qty;
      }
    });
    setReturnList(returnList);
  }

  const QtyInput = ({qty, matnum , setQty}) =>{
    return (
      <div className="item-title-row" style={{ width: "100%", textAlign: "end", paddingRight: "5%" }}>
        {/* <div className="item-subtitle" style={{ fontSize: "14px" }}>Qty : {item.qty??0}</div> */}
        <input type='number' min={1} defaultValue={qty} onChange={(e)=>setQty(e.target.value, matnum)} className='form-control no-spin' style={{ float: "right", maxWidth: "35%", minWidth: "70px", padding: "3%", textAlign:"center" }} />
      </div>
    )
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
                                  <h5 className="me-3" style={{ color: "var(--dark)", marginBottom: "0" }}>{jobDetails.empname}</h5>
                                </div>
                              </div>
                              <div className="item-subtitle" style={{ fontSize: "11px" }}>{jobDetails.scheduledate}</div>
                            </div>
                          </div>

                          <div className="item-title-row">
                            <div className="item-footer" style={{ marginBottom: "0" }}>
                              <div className="d-flex align-items-center">
                                <h6 className="me-3" style={{ color: "var(--dark)", fontSize: "12px" }}>Job No : {jobDetails.jobnum}</h6>
                              </div>
                              <div className="d-flex align-items-center">
                                <h6 className="me-3" style={{ color: "var(--dark)", fontSize: "12px" }}>Type : {jobDetails.jobtype}</h6>
                              </div>
                            </div>
                          </div>
                          <div className="item-footer">
                            <div className="d-flex align-items-center">
                              <div className="item-subtitle">Delivery to : {jobDetails.jobaddr}</div>
                            </div>
                            <div className="d-flex align-items-center">
                              <h6 className="me-3" style={{ color: "var(--dark)", fontSize: "12px" }}>Status : {jobDetails.status}</h6>
                            </div>
                          </div>
                        </div>
                      </div>
                    </li>

                    <h5 className="title" style={{ textAlign: 'center', marginTop: "15px" }}>Returned Items</h5>
                    <li style={{ border: "1px solid var(--title)", borderRadius: "10px", margin: "5px 0", background: "white" }}>
                      <div className="order-status" style={{ marginTop: "0" }}>
                        <ul className="dz-timeline style-2">
                          {returnList.length>0 && returnList.map((item, i) => {
                            return (
                              <li key={i} className="timeline-item" style={{ margin: '0', padding: "8px 0" }}>
                                <div className="d-flex align-items-center">
                                  {/* <div className="item-title-row" style={{ margin: "0 5% 0 3%" }}>
                                      <input type="checkbox" />
                                    </div> */}

                                  <div className="item-media media media-40 dz-icon" style={{ margin: "0 15px 0 0" }}>
                                    <img src={item.imageurl && item.imageurl.length>0 ? item.imageurl: "/images/item.png"} alt="logo" />
                                  </div>

                                  <div className="item-title-row" style={{ color: "var(--dark)", width: "100%" }}>
                                    <div className="item-footer" style={{ marginBottom: "0", width: "inherit" }}>
                                      <div className="d-flex align-items-center">
                                        <h5 className="me-3" style={{ color: "var(--dark)", marginBottom: "0" }}>{item.matname}</h5>
                                      </div>
                                    </div>
                                    <div className="item-subtitle" style={{ fontSize: "11px" }}>{item.barcode}</div>
                                  </div>

                                  <QtyInput qty={item.qty} matnum={item.matnum} setQty={setQty}/>
                                  <div className="circle" style={{ cursor: "pointer" }} onClick={() => sActiveStep(2)}>
                                    <FontAwesomeIcon icon={faX} color='var(--primary)' style={{fontSize:"16px", fontWeight:"bolder", marginRight:"10px"}} onClick={()=>removeItem(item.matnum)} className='icon' />
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
                            <select className="form-control" value={selectedItem} onChange={(e)=>setSelectedItem(e.target.value)}>
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

function JORJob({ jobDetails, acceptTransfer, jobTransfer, collected, delivered, setShowReturn, handleFileChange }) {

  const [jobdetailsData, setJobdetailsData] = useState(null);
  const [details, setDetails] = useState(0);
  const [activeStep, setActiveStep] = useState(0);
  const [signature, setSignature] = useState('');
  const [remarks, setRemarks] = useState('');
  const [remarks2, setRemarks2] = useState('');
  const [toPostalCodes, setToPostalCodes] = useState([]);

  useEffect(()=>{
    if(jobDetails){
      setJobdetailsData(jobDetails);
      setRemarks(jobDetails.collectionremark);
      setRemarks2(jobDetails.deliveryremark);
      setToPostalCodes(jobDetails.collectionplan.map(item => item.locationaddrpostcode));
      // setToPostalCodes(["384003","787479"]);
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
      // cActiveStep(2);
    }
  }
  
  const setActualQty = (qty, matnum) =>{

    jobdetailsData.items.forEach(item => {
      if(item.matnum==matnum) {
        item.actualqty=qty;
      }
    })
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
                              <div className="item-subtitle" style={{ fontSize: "11px" }}>{jobDetails.scheduledate}</div>
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
                      <li style={{ padding:"0", borderRadius: "10px", margin: "5px 0", minHeight: "200px", background: "white" }}>
                        {toPostalCodes.length>1 && <GoogleMaps fromPostalCode={jobDetails.jobaddrpostcode} toPostalCodes ={ toPostalCodes} forDelivery={true}/>}
                      </li>
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
                              <li style={{ padding:"0", borderRadius: "10px", margin: "5px 0", minHeight: "200px" }}>
                                <GoogleMap fromPostalCode={jobDetails.jobaddrpostcode} toPostalCode={job.locationaddrpostcode}/>
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
                                                <h5 className="me-3" style={{ color: 'var(--dark)', marginBottom: "0" }}>{item.matname}</h5>
                                              </div>
                                            </div>
                                            <div className="item-subtitle" style={{ color: 'var(--dark)', fontSize: "11px" }}>{item.matnum}</div>
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
                    {(activeStep == 1) && <>

                      <li style={{ padding:"0", borderRadius: "10px", margin: "5px 0", minHeight: "200px", background: "white" }}>
                        {toPostalCodes.length>1 && <GoogleMaps fromPostalCode={jobDetails.jobaddrpostcode} toPostalCodes ={ toPostalCodes} forDelivery={true}/>}
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

                    {/* Step 3 Start*/}
                    {(activeStep == 2 && jobDetails.returneditems && jobDetails.returneditems.length>0) && <>
                      <h5 className="title" style={{ color: 'var(--dark)', textAlign: 'center', marginTop: "15px" }}>Returned Items</h5>
                      <li style={{ border: "1px solid var(--title)", borderRadius: "10px", margin: "5px 0", background: "white" }}>
                        <div className="order-status" style={{ marginTop: "0" }}>
                          <ul className="dz-timeline style-2">
                            {jobDetails.returneditems.map((item, i) => {
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
                    {/* Step 3 End */}
                    
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
                    
                    {activeStep == 1 && jobDetails.allowdeliver &&
                      <li style={{ borderRadius: "10px" }}>
                        <h5 className="title" style={{ textAlign: 'center', marginTop: "15px" }}>Photos</h5>
                        <div className="pt-2">
                          <input type="file" className="form-control" multiple accept="image/*" max="10" onChange={handleFileChange} style={{ width: "100%" }}/>
                        </div>
                      </li>
                    }
                  </ul>

                  {jobdetailsData && jobdetailsData.allowaccepttransfer && <>
                      <div className="col-md-12" style={{ textAlign: "center" }}>
                        <button type="button" className="btn btn-success w-50" onClick={() => { acceptTransfer(jobdetailsData.jobnum); }} style={{ maxWidth: "40%", borderRadius: "50px" }}>Accept</button>
                        <span style={{padding:"20px"}}></span>
                        <button type="button" className="btn btn-danger w-50" onClick={() => { jobTransfer(jobdetailsData.jobnum); }} style={{ maxWidth: "40%", borderRadius: "50px" }}>Reject</button>
                      </div>
                  </>}
                  

                  {/* {activeStep == 0 && <> */}
                  {activeStep == 0 && jobDetails.allowcollect &&
                    <div className="col-md-12" style={{ textAlign: "center" }}>
                      <button type="button" className="btn btn-danger w-100" onClick={() => { 
                        // cActiveStep(1); 
                        collected(jobDetails.jobnum, remarks); }} style={{ maxWidth: "40%", borderRadius: "50px" }}>Collected</button>
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

function JOSJob({ jobDetails, acceptTransfer, jobTransfer, collected, delivered, setShowReturn, handleFileChange }) {

  const [details, setDetails] = useState(0);
  const [activeStep, setActiveStep] = useState(0);
  const [remarks, setRemarks] = useState('');
  const [remarks2, setRemarks2] = useState('');
  const [toPostalCodes, setToPostalCodes] = useState([]);

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

  useEffect(()=>{
    if(jobDetails){
      setRemarks(jobDetails.collectionremark)
      setRemarks2(jobDetails.deliveryremark)
      setToPostalCodes(jobDetails.deliveryplan.map(item => item.locationaddrpostcode));
    }
  },[jobDetails])

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
                              <div className="item-subtitle" style={{ color: 'var(--dark)', fontSize: "11px" }}>{jobDetails.scheduledate}</div>
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
                      <li style={{ padding:"0", borderRadius: "10px", margin: "5px 0", minHeight: "200px", background: "white" }}>
                        {/* <GoogleMap fromPostalCode={jobDetails.jobaddrpostcode} toPostalCode={jobDetails.jobaddrpostcode}/> */}
                        {toPostalCodes.length>1 && <GoogleMaps fromPostalCode={jobDetails.jobaddrpostcode} toPostalCodes ={ toPostalCodes}/>}
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
                              <li style={{ color: 'var(--dark)',padding:"0", borderRadius: "10px", margin: "5px 0", minHeight: "200px" }}>
                                <GoogleMap fromPostalCode={jobDetails.jobaddrpostcode} toPostalCode={job.locationaddrpostcode}/>
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

                    {/* Step 3 Start*/}
                    {(activeStep == 2 && jobDetails.returneditems && jobDetails.returneditems.length>0) && <>
                      <h5 className="title" style={{ color: 'var(--dark)', textAlign: 'center', marginTop: "15px" }}>Returned Items</h5>
                      <li style={{ border: "1px solid var(--title)", borderRadius: "10px", margin: "5px 0", background: "white" }}>
                        <div className="order-status" style={{ marginTop: "0" }}>
                          <ul className="dz-timeline style-2">
                            {jobDetails.returneditems.map((item, i) => {
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
                    {/* Step 3 End */}

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

                    {activeStep == 1 && jobDetails.allowcollect &&
                      <li style={{ borderRadius: "10px" }}>
                        <h5 className="title" style={{ textAlign: 'center', marginTop: "15px" }}>Photos</h5>
                        <div className="pt-2">
                          <input type="file" className="form-control" multiple accept="image/*" max="10" onChange={handleFileChange} style={{ width: "100%" }}/>
                        </div>
                      </li>
                    }
                  </ul>

                  {jobDetails && jobDetails.allowaccepttransfer && <>
                    <div className="col-md-12" style={{ textAlign: "center" }}>
                      <button type="button" className="btn btn-success w-50" onClick={() => { acceptTransfer(jobDetails.jobnum); }} style={{ maxWidth: "40%", borderRadius: "50px" }}>Accept</button>
                      <span style={{padding:"20px"}}></span>
                      <button type="button" className="btn btn-danger w-50" onClick={() => { jobTransfer(jobDetails.jobnum); }} style={{ maxWidth: "40%", borderRadius: "50px" }}>Reject</button>
                    </div>
                  </>}

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
                      <button type="button" className="btn btn-danger w-100" onClick={() => { 
                        // cActiveStep(2); 
                        delivered(jobDetails.jobnum, remarks2); }} style={{ maxWidth: "40%", borderRadius: "50px" }}>Delivered</button>
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
  const [selectedFiles, setSelectedFiles] = useState([]);

  const handleFileChange = async (event) => {
    const files = event.target.files;
    const allowedTypes = ['image/jpeg', 'image/png']; // Add more allowed file types if needed
    const maxFiles = 10;
    const selectedImages = [];
  
    for (let i = 0; i < files.length; i++) {
      // selectedFiles.push(files[i]);
      // setSelectedFiles(selectedFiles);
      const file = files[i];
  
      if (!allowedTypes.includes(file.type)) {
        return toast.error('You can add only image files!');
      }
  
      const image = new Image();
      const reader = new FileReader();
  
      // Create a promise to read the file
      const readFile = () => {
        return new Promise((resolve, reject) => {
          reader.onload = () => resolve(reader.result);
          reader.onerror = reject;
          reader.readAsDataURL(file);
        });
      };
  
      // Resize the image using a canvas
      const resizeImage = (img, maxWidth, maxHeight) => {
        const canvas = document.createElement('canvas');
        let width = img.width;
        let height = img.height;
  
        if (width > height) {
          if (width > maxWidth) {
            height *= maxWidth / width;
            width = maxWidth;
          }
        } else {
          if (height > maxHeight) {
            width *= maxHeight / height;
            height = maxHeight;
          }
        }
  
        canvas.width = width;
        canvas.height = height;
  
        const ctx = canvas.getContext('2d');
        ctx.drawImage(img, 0, 0, width, height);
  
        return canvas.toDataURL(file.type);
      };
  
      try {
        const dataURL = await readFile();
        image.src = dataURL;
        await new Promise((resolve) => {
          image.onload = resolve;
        });
  
        const resizedDataURL = resizeImage(image, 800, 600); // Adjust the maxWidth and maxHeight as needed
  
        selectedImages.push(resizedDataURL);
      } catch (error) {
        console.error('Error reading or resizing image:', error);
      }
  
      if (selectedImages.length >= maxFiles) {
        break;
      }
    }
  
    if (selectedImages.length > 0 && selectedImages.length < 11) {
      setSelectedFiles(selectedImages);
    } 
    else if (selectedImages.length > 10) {
      toast.error(`You can add maximum ${maxFiles} image files!`);
    }
  };

  
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
    window.SpinnerShow();
    const body = {
        jobnum: jobnum,
        status: "Rejected"
    }
    axios.post(`job/updatestatus`,body)
      .then((result) => {
        if (result && result.data.success) {
          toast.error("Rejected Successfully !");
          navigate(`/jobs`);
        }
      })
      .catch((error) => {
        console.log(error)
      })
    window.SpinnerHide();
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

  // Helper function to convert dataURL to File object
  const dataURLtoFile = (dataURL, filename) => {
    const arr = dataURL.split(',');
    const mime = arr[0].match(/:(.*?);/)[1];
    const bstr = atob(arr[1]);
    let n = bstr.length;
    const u8arr = new Uint8Array(n);
    while (n--) {
      u8arr[n] = bstr.charCodeAt(n);
    }
    return new File([u8arr], filename, { type: mime });
  };

  const uploadPhotos = async (jobnum) =>{
    if(selectedFiles.length==0){
      return true;
    }

    const data = new FormData();
    data.append('jobnum', jobnum);

    selectedFiles.forEach((element, i) => {
      const resizedFile = dataURLtoFile(element, `image_${i}.jpg`);
      data.append('file', resizedFile);
    });

    return await axios.post(`job/image`,data)
      .then((result)=>{
        if(result && result.data.success){
          toast.success("Photos are uploaded successfully !")
          return true;
        }
        else{
          toast.error("Photos uploading failed !");
          return false;
        }
      })
      .catch((error)=>{
        toast.error("Photos Uploading Failed !");
        console.log(error)
        return false;
      })
  }

  const delivered = async (jobnum, remarks, signature, items=[]) => {
    window.SpinnerShow();
    const body = {
      jobnum: jobnum,
      status: "Delivered",
      remarks: remarks,
      signature: signature??"QUI=",
      items: items
    };

    await uploadPhotos(jobnum).then(ok =>{
      if(ok){
        axios.post(`job/updatestatus`, body)
        .then((result) => {
          if (result && result.data.success) {
            fetchJobDetails(jobnum);
          }
        })
        .catch((error) => {
          console.log(error)
        })
      }
      else {
        // navigate("/jobs");
      }
      })

    window.SpinnerHide();
  }

  const acceptTransfer = (jobnum)  =>{
    window.SpinnerShow();
    const body = {
        jobnum: jobnum,
        status: "Accepted"
    }
    axios.post(`job/updatestatus`,body)
      .then((result) => {
        if (result && result.data.success) {
          toast.error("Transferred Successfully !");
          navigate(`/jobs`);
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
        {jor && !showReturn && <JORJob jobDetails={jobDetails} acceptTransfer={acceptTransfer} jobTransfer={jobTransfer} collected={collected} delivered={delivered} setShowReturn={setShowReturn} handleFileChange={handleFileChange}/>}
        {jos && !showReturn && <JOSJob jobDetails={jobDetails} acceptTransfer={acceptTransfer} jobTransfer={jobTransfer} collected={collected} delivered={delivered} setShowReturn={setShowReturn} handleFileChange={handleFileChange}/>}
        {showReturn && <Return jobDetails={jobDetails} jobTransfer={jobTransfer} collected={collected} delivered={delivered} />}
        <MenuBar />
      </div>
    </>
  )
}

export default All
