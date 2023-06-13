import React, { useEffect, useState } from 'react';
import { Link } from 'react-router-dom';
import MenuBar from './Menubar'
import * as common from '../utils/common.utils'
import { Button, Modal } from 'react-bootstrap';
import axios from '../utils/axios.utils'

function All() {
  const [showModal, setShowModal] = useState(false);
  const [notifications, setNotifications] = useState(false);
  const [header, setHeader] = useState(false);
  const [body, setBody] = useState(false);
  useEffect(() => {
    window.SpinnerShow();
    let user = common.getUser();
    if (user) {
      axios.get(`notification`)
        .then((result) => {
          if (result && result.data.success) {
            setNotifications(result.data.data)
          }
        })
        .catch((error) => {
          console.log(error)
        })
    }
    window.SpinnerHide();
  }, []);

  const openModal = (refnum) => {
    axios.get(`notification/${refnum}`)
      .then((result) => {
        if (result && result.data.success) {
          setHeader(result.data.data.title);
          setBody(result.data.data.body);
          setShowModal(true);
        }
      })
      .catch((error) => {
        console.log(error)
      })
    
  };
  const handleShow = () => {
    window.handleRemoveFadeFromModal();
  };
  const closeModal = () => {
    setShowModal(false);
  };

  return (
    <>
      <div className="page-wraper">
        {/* <!-- Header --> */}
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
                  <h5 className="mb-0 ms-2 text-nowrap">Notification</h5>
                </div>
                <div className="mid-content">
                </div>
                <div className="right-content">
                </div>
              </div>
            </div>
          </div>
        </header>

        {/* <!-- Page Content --> */}
        <div className="page-content bottom-content">
          <div className="container">
            {notifications && notifications.map((item, i) => {
              return (
                <a href="#" key={i} className={`notification ${item.new && "bg-success"}`} onClick={()=>openModal(item.refnum)}>
                  <div className="notification-content item-list">
                    <div className="item-content">
                      <div className="media media-35">
                        <img src="/images/item.png" alt="image" />
                      </div>
                      <div className="item-inner">
                        <h5 className="title" style={{ fontSize: "14px" }}>{item.title}</h5>
                        <p className="mb-0" style={{ fontSize: "13px" }}>{item.summary}</p>
                      </div>
                      <div className={`ms-auto font-10 ${item.new ? "text-white" : "text-dark"} d-flex align-items-center`}>
                        <svg style={{ marginRight: "5px" }} width="12" height="12" viewBox="0 0 12 12" fill="none" xmlns="http://www.w3.org/2000/svg">
                          <path d="M6 11C8.76142 11 11 8.76142 11 6C11 3.23858 8.76142 1 6 1C3.23858 1 1 3.23858 1 6C1 8.76142 3.23858 11 6 11Z" stroke={item.new ? "#fff" : "#787878"} strokeLinecap="round" strokeLinejoin="round"></path>
                          <path d="M6 3V6L8 7" stroke={item.new ? "#fff" : "#787878"} strokeLinecap="round" strokeLinejoin="round"></path>
                        </svg>
                        {" "}{item.date}
                      </div>
                    </div>
                  </div>
                </a>)
            })}
          </div>
        </div>

        <Modal centered={true} show={showModal} onEntered={handleShow} onHide={closeModal} className="notification-modal">
          <Modal.Header closeButton style={{display:"block"}}>
            <Modal.Title style={{textAlign:"center"}}>{header}</Modal.Title>
          </Modal.Header>
          <Modal.Body>
          <div style={{fontSize:"14px"}} dangerouslySetInnerHTML={{ __html: body }}></div>
          </Modal.Body>
          <Modal.Footer>
            <Button variant="secondary" onClick={closeModal}>
              Close
            </Button>
          </Modal.Footer>
        </Modal>

        {/* <!-- Page Content End--> */}

        <MenuBar />

      </div>
    </>
  )
}

export default All
