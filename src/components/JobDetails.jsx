import React, { useEffect, useState } from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faCircle, faCircleCheck } from '@fortawesome/free-solid-svg-icons';
import { GoogleMap, DirectionsRenderer } from 'react-google-maps';
import MenuBar from './Menubar';
import Sidebar from './Sidebar';
import './JobDetails.css';

const MapRoute = ({ origin, destination }) => {
  const mapRef = useRef(null);

  useEffect(() => {
    const directionsService = new window.google.maps.DirectionsService();

    const request = {
      origin,
      destination,
      travelMode: window.google.maps.TravelMode.DRIVING
    };

    directionsService.route(request, (result, status) => {
      if (status === window.google.maps.DirectionsStatus.OK) {
        const directionsRenderer = new window.google.maps.DirectionsRenderer();
        directionsRenderer.setDirections(result);
        directionsRenderer.setMap(mapRef.current);
      }
    });
  }, [origin, destination]);

  return (
    <GoogleMap
      ref={mapRef}
      defaultZoom={10}
      defaultCenter={{ lat: 0, lng: 0 }}
      options={{
        disableDefaultUI: true
      }}
    />
  );
};

function Stepper() {
  const [activeStep, setActiveStep] = useState(1);


  return (
    <div className="item-list style-2 recent-jobs-list" style={{ marginTop: "30px" }}>
      <div className="stepper">
        <div className={`step ${activeStep >= 0 ? 'active' : 'inactive'}`}>
          <div className="circle">
            <FontAwesomeIcon icon={activeStep >= 0 ? faCircleCheck : faCircle} size='2x' color='var(--primary)' className='icon' />
          </div>
          <div className="step-text">Collected</div>
        </div>
        <div className={`line ${activeStep >= 0 ? 'active' : ''}`}></div>
        <div className={`step ${activeStep >= 1 ? 'active' : 'inactive'}`}>
          <div className="circle">
            <FontAwesomeIcon icon={activeStep >= 1 ? faCircleCheck : faCircle} size='2x' color='var(--primary)' className='icon' />
          </div>
          <div className="step-text">Delivered</div>
        </div>
        <div className={`line ${activeStep >= 1 ? 'active' : ''}`}></div>
        <div className={`step ${activeStep >= 2 ? 'active' : 'inactive'}`}>
          <div className="circle">
            <FontAwesomeIcon icon={activeStep >= 2 ? faCircleCheck : faCircle} size='2x' color='var(--primary)' className='icon' />
          </div>
          <div className="step-text">Completed</div>
        </div>
      </div>
    </div>
  );
}


function All() {
  const preventDefault = (event) => {
    // event.preventDefault(); // Prevents the default behavior of the anchor tag
    // Additional functionality can be added here if needed
  };

  useEffect(() => {

  }, []);

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

                <Stepper />
                {/* <!-- Item box Start --> */}

                <div className="item-list recent-jobs-list">
                  {/* <h4 className="title my-4">Job Details</h4> */}

                  <ul>
                    <li style={{ border: "1px solid var(--title)", borderRadius: "10px", margin: "5px 0" }}>
                      <div className="item-content">
                        <div className="item-inner" style={{ margin: "10px 0" }}>

                          <div className="d-flex align-items-center">
                            <div className="item-media media media-40" style={{ marginLeft: "0", marginRight: "15px" }}>
                              <img src="/images/avatar60x60.jpg" alt="logo" />
                            </div>
                            <div className="item-title-row" >
                              <div className="item-footer" style={{ marginBottom: "0" }}>
                                <div className="d-flex align-items-center">
                                  <h5 className="me-3" style={{ marginBottom: "0" }}>asdsd</h5>
                                </div>
                              </div>
                              <div className="item-subtitle" style={{ fontSize: "11px" }}>asda</div>
                            </div>
                          </div>

                          <div className="item-title-row">
                            <div className="item-footer" style={{ marginBottom: "0" }}>
                              <div className="d-flex align-items-center">
                                <h6 className="me-3" style={{ fontSize: "12px" }}>Job No : asdsad</h6>
                              </div>
                              <div className="d-flex align-items-center">
                                <h6 className="me-3" style={{ fontSize: "12px" }}>Type : asdasd</h6>
                              </div>
                            </div>
                          </div>
                          <div className="item-footer">
                            <div className="d-flex align-items-center">
                              <div className="item-subtitle">From : asdasda</div>
                            </div>
                            <div className="d-flex align-items-center">
                            <h6 className="me-3" style={{ fontSize: "12px" }}>Status : asdasd</h6>
                            </div>
                          </div>
                        </div>
                      </div>
                    </li>
                    <li style={{ border: "1px solid var(--title)", borderRadius: "10px", margin: "5px 0", minHeight:"200px" }}>
                      
                    </li>
                    <li style={{ border: "1px solid var(--title)", borderRadius: "10px", margin: "5px 0" }}>
                      
                    </li>
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
