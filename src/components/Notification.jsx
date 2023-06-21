import React, { useEffect, useState } from 'react';
import { Link } from 'react-router-dom';
import MenuBar from './Menubar'
import Sidebar from './Sidebar';
import * as common from '../utils/common.utils'
import { Button, Modal } from 'react-bootstrap';
import { useLocation, useNavigate } from 'react-router-dom';
import axios from '../utils/axios.utils'

function All() {
  const navigate = useNavigate();
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
            setNotifications(result.data.data);
          }
        })
        .catch((error) => {
          console.log(error)
        })
    }
    window.SpinnerHide();
  }, []);

  const openModal = (refnum) => {
    navigate(`/notification-details?refnum=${refnum}`)
    
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

        <Sidebar menuName="Notification" />

        {/* <!-- Page Content --> */}
        <div className="page-content bottom-content pt-5">
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

        <MenuBar menu={"notification"}/>

      </div>
    </>
  )
}

export default All
