
import { useEffect, useState } from 'react'
import Axios, { web as AxiosWeb } from '../helper/axios'
import { Link } from "react-router-dom";

function Events(props) {

    const [eventTypeDetails, setEventTypeDetails] = useState(false);
    const [events, setEvents] = useState(false);
    const Render = () => {

        useEffect(() => {
            if (props.id && (!eventTypeDetails || eventTypeDetails.id != props.id)) {
                AxiosWeb.get(`/eventType/details/${props.id}`)
                    .then(result => {
                        window.SpinnerHide();
                        if (result.data.status == 200) {
                            setEventTypeDetails(result.data.data);
                        }
                    })
            }
            else if (props.page && props.page == "home-page" && !events) {
                AxiosWeb.get(`/event/homePage`)
                    .then(result => {
                        window.SpinnerHide();
                        if (result.data.status == 200) {
                            setEvents(result.data.data);
                        }
                    })
            }
        }, [props.id, props.page])

        useEffect(() => {
            AOS.init();
        }, []);

        return (
            <>
                {props.id && <>
                    {eventTypeDetails ? <>
                        <div className="page-banner-area bg-2">
                            <div className="container">
                                <div className="page-banner-content">
                                    <h1>{eventTypeDetails.eventTypeName}</h1>
                                    <ul>
                                        <li><a href="#">Events</a></li>
                                        <li>{eventTypeDetails.eventTypeName}</li>
                                    </ul>
                                </div>
                            </div>
                        </div>


                        <div className="events-area pt-70 pb-70">
                            <div className="container">
                                <div className="row justify-content-center">
                                    {eventTypeDetails.events.map((item, i) => {
                                        return (
                                            <div className="col-lg-4 col-md-6">
                                                <div className="single-events-card style-4">
                                                    <div className="events-image">
                                                        <a href={`/event-details/${item.id}`}><img src="/images/events/events-3.jpg" alt="Image" style={{minWidth:"-webkit-fill-available"}}/></a>
                                                        <div className="date">
                                                            <span>{new Date(item.eventDate).getDate()}</span>
                                                            <p>{new Date(item.eventDate).toLocaleString('default', { month: 'short' })} {new Date(item.eventDate).getFullYear()}</p>
                                                        </div>
                                                    </div>
                                                    <div className="events-content">
                                                        <a href={`/event-details/${item.id}`}><h3>{item.eventName}</h3></a>
                                                    </div>
                                                </div>
                                            </div>
                                        )
                                    })
                                    }

                                    {/* <div className="col-lg-4 col-md-6">
                                    <div className="single-events-card style-4">
                                        <div className="events-image">
                                            <a href="events-details.html"><img src="/images/events/events-2.jpg" alt="Image" /></a>
                                            <div className="date">
                                                <span>17</span>
                                                <p>Mar 2023</p>
                                            </div>
                                        </div>
                                        <div className="events-content">
                                            <a href="events-details.html"><h3>Inauguration of 2nd Batch of “Sustainability Management” training program</h3></a>
                                        </div>
                                    </div>
                                </div>
                                <div className="col-lg-4 col-md-6">
                                    <div className="single-events-card style-4">
                                        <div className="events-image">
                                            <a href="events-details.html"><img src="/images/events/events-1.jpg" alt="Image" /></a>
                                            <div className="date">
                                                <span>17</span>
                                                <p>Mar 2023</p>
                                            </div>
                                        </div>
                                        <div className="events-content">
                                            <a href="events-details.html"><h3>Inauguration of the First Batch of “Sustainability Management” training program</h3></a>
                                        </div>
                                    </div>
                                </div> */}
                                </div>
                            </div>
                        </div>
                    </> 
                    :
                    <>
                        <div className="page-banner-area bg-1">
                            <div className="container">
                                <div className="page-banner-content">
                                    <h1>Events</h1>
                                    <ul>
                                        <li><a href="#">Events</a></li>
                                        <li>Event</li>
                                    </ul>
                                </div>
                            </div>
                        </div>
                        <div className="courses-details-area pt-70 pb-70">
                            <div className="container">
                                <div className="row">
                                    <div className="col-md-12">
                                        <div className="courses-details">
                                            <div className="courses-card" style={{ textAlign: "center" }}>
                                                <h2>No Event Type Found !</h2>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </>}
                </>}

                {props.page && props.page == "home-page" && events.length>0 && <>
                    <div className="events-area bg-f4f6f9 ptb-100">
                        <div className="container">
                            <div className="section-title">
                                <h2>Events</h2>
                                {/* <p>Lorem ipsum dolor sit amet consectetur adipiscing elit ut elit tellus luctus nec ullamcorper mattis </p> */}
                            </div>
                            <div className="row justify-content-center">
                                {events && events.map((item,i)=>{
                                    return (
                                        <div className="col-lg-4 col-md-6" key={i}>
                                            <div className="single-events-card style-4">
                                                <div className="events-image">
                                                    <a href="events-details.html"><img loading="lazy" src={item.files && item.files.length>0 ? item.files[0].link:"/images/events/events-2.jpg"} alt="Image" style={{minWidth:"-webkit-fill-available"}}/></a>
                                                    <div className="date">
                                                        <span>{new Date(item.eventDate).getDate()}</span>
                                                        <p>{new Date(item.eventDate).toLocaleString('default', { month: 'short' })} {new Date(item.eventDate).getFullYear()}</p>
                                                    </div>
                                                </div>
                                                <div className="events-content">
                                                    <a href="events-details.html"><h3>{item.eventName}</h3></a>
                                                </div>
                                            </div>
                                        </div>
                                    )
                                })}
                            </div>
                            <div className="more-health-care text-center">
                                <p>Select From Other Options. <a href="trainings.html" className="read-more-btn active">More on Events<i className="flaticon-next"></i></a></p>
                            </div>
                        </div>
                    </div>
                </>}

            </>
        )
    }

    return (
        <>
            {(props.id || props.page) && <Render />}
        </>

    )

}

export default Events

