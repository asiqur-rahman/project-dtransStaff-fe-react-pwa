import { useEffect, useState } from 'react'
import Axios, { web as AxiosWeb } from '../helper/axios'

function EventDetails(props) {

    const [details, setDetails] = useState(false)

    useEffect(() => {
        if (props.id) {
            AxiosWeb.get(`/event/details/id/${props.id}`)
            .then(result => {
                window.SpinnerHide();
                if (result.data.status == 200) {
                    setDetails(result.data.data)
                }
            });
        }

    }, [props.id])

    return (
        <>
            {details ? <>
                <div className="page-banner-area bg-1">
                    <div className="container">
                        <div className="page-banner-content">
                            <h1>{details.eventName}</h1>
                            <ul>
                                <li><a href={`/event-type/${details.eventTypeId}`}>{details['eventType.eventTypeName']}</a></li>
                                <li>{details.eventName}</li>
                            </ul>
                        </div>
                    </div>
                </div>


                <div className="events-details-area pt-70 pb-70">
                    <div className="container">
                        <div className="row">
                            <div className="col-lg-12">
                                <div className="events-details-left-content pr-20">
                                    <div className="events-image">
                                        <img src={details.files.length>0? details.files[0].link:"/images/events/events-3.jpg"} alt="Image"/>
                                    </div>
                                    <div style={{textAlign:"justify"}} className="meetings">
                                        <h2>{details.eventName}</h2>
                                        <h5>{`${new Date(details.eventDate).getDate()} ${new Date(details.eventDate).toLocaleString('default', { month: 'short' })}, ${new Date(details.eventDate).getFullYear()}`}</h5>
                                        <p dangerouslySetInnerHTML={{ __html: details.eventDetails }}></p>
                                    </div>
                                </div>
                            </div>

                        </div>
                    </div>
                </div>
            </>
            :
            <>
                <div className="page-banner-area bg-1">
                    <div className="container">
                        <div className="page-banner-content">
                            <h1>Event</h1>
                            <ul>
                                <li><a href="training-courses.html">Events</a></li>
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
                                    <div className="courses-card" style={{textAlign:"center"}}>
                                        <h2>No Event Found !</h2>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </>
            }
        </>
    )
}

export default EventDetails
