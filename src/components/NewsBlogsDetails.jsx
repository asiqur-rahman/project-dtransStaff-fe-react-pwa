import { useEffect, useState } from 'react'
import Axios, { web as AxiosWeb } from '../helper/axios'

function EventDetails(props) {

    const [details, setDetails] = useState(false)

    useEffect(() => {
        if (props.id) {
            AxiosWeb.get(`/newsAndBlog/details/id/${props.id}`)
                .then(result => {
                    window.SpinnerHide();
                    if (result.data.status == 200) {
                        result.data.data.newsAndBlogTags=result.data.data.newsAndBlogTags.split(",")
                        setDetails(result.data.data)
                    }
                });
        }
        else if (props.page && props.page == "home-page" && !details) {
            AxiosWeb.get(`/newsAndBlog/homePage`)
                .then(result => {
                    window.SpinnerHide();
                    if (result.data.status == 200) {
                        setDetails(result.data.data);
                    }
                })
        }
    }, [props.id, props.page])

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


                <div className="news-details-area pt-100 pb-70">
                    <div className="container">
                        <div className="row">
                            <div className="col-lg-8">
                                <div className="news-details">
                                    <div className="news-simple-card">
                                        {details.files.length>0 && <img src={details.files[0].link} alt="Image"/>}
                                            <div className="list">
                                                <ul>
                                                    <li><i className="flaticon-user"></i>By <a href="news-details.html">Admin</a></li>
                                                </ul>
                                            </div>
                                            <h2>{details.newsAndBlogName}</h2>
                                            <p dangerouslySetInnerHTML={{ __html: details.newsAndBlogDetails }}></p>
                                            {/* <p>At BIM premises, the consecutive 3rd batch was inaugurated by Mr. Sharif Md Mashud, Director (Additional Charge), BIM, and Deputy Secretary of the People’s Republic of Bangladesh. BIM academics Mohammad Nazmi Newaz and Mohammad Sayeedur Rahman facilitated the opening sessions. Mr. Mohammad Shamsul Arafin represented GiZ in the training. 27 professionals from different industries were participated.</p> */}
                                    </div>

                                    <div className="blog-img-and-content">
                                        <div className="row">
                                            <div className="col-lg-6 col-md-6">
                                                {details.files.length>1 && <img src={details.files[1].link} style={{height:"250px"}} alt="Image"/>}
                                                {/* <img  src="/images/news/news-33.jpg" alt="Image"/> */}
                                            </div>
                                            <div className="col-lg-6 col-md-6">
                                                {details.files.length>2 && <img src={details.files[2].link} style={{height:"250px"}} alt="Image"/>}
                                                {/* <img style={{height:"250px"}} src="/images/news/news-44.jpg" alt="Image"/> */}
                                            </div>
                                        </div>
                                    </div>
                                    <div className="tags-and-share">
                                        <div className="row align-items-center">
                                            <div className="col-lg-6 col-md-6">
                                                <div className="tags">
                                                    <ul>
                                                        <li><span>Tags :</span></li>
                                                        {details.newsAndBlogTags && details.newsAndBlogTags.map((item,i)=>{
                                                            return (
                                                                <li key={i}><a href="#">{item}</a></li>
                                                            )
                                                        })}
                                                        
                                                    </ul>
                                                </div>
                                            </div>
                                            <div className="col-lg-6 col-md-6">
                                                <div className="share">
                                                    <ul>
                                                        <li><span>Share :</span></li>
                                                        <li>
                                                            <a href="https://www.facebook.com/" target="_blank"><i className="flaticon-facebook"></i></a>
                                                        </li>
                                                        <li>
                                                            <a href="https://www.twitter.com/" target="_blank"><i className="flaticon-twitter"></i></a>
                                                        </li>
                                                        <li>
                                                            <a href="https://instagram.com/?lang=en" target="_blank"><i className="flaticon-instagram"></i></a>
                                                        </li>
                                                        <li>
                                                            <a href="https://linkedin.com/?lang=en" target="_blank"><i className="flaticon-linkedin"></i></a>
                                                        </li>
                                                    </ul>
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                    <div className="comments">
                                        <h3>0 comments</h3>
                                        <div className="single-comments-box">

                                        </div>
                                    </div>
                                    <div className="reply-area">
                                        <div className="reply-form">
                                            <h3>Leave a Reply</h3>
                                            <p>Your email address will not be published.</p>
                                            <form>
                                                <div className="row">
                                                    <div className="col-lg-12">
                                                        <div className="form-group">
                                                            <textarea className="form-control" id="review" rows="4" placeholder="Comment"/>
                                                        </div>
                                                    </div>
                                                    <div className="col-lg-4">
                                                        <div className="form-group">
                                                            <input type="text" className="form-control" id="name" placeholder="Name"/>
                                                        </div>
                                                    </div>
                                                    <div className="col-lg-4">
                                                        <div className="form-group">
                                                            <input type="email" className="form-control" id="email" placeholder="Email"/>
                                                        </div>
                                                    </div>
                                                    <div className="col-lg-4">
                                                        <div className="form-group">
                                                            <input type="text" className="form-control" id="website" placeholder="Website"/>
                                                        </div>
                                                    </div>
                                                </div>
                                                <div className="form-check">
                                                    <input className="form-check-input" type="checkbox" value="" id="flexCheckDefault"/>
                                                        <label className="form-check-label" for="flexCheckDefault">
                                                            Save my name, email, and website in this browser for the next time I comment.
                                                        </label>
                                                </div>
                                                <button type="submit" className="default-btn btn">Post a Comment <i className="flaticon-paper-plane"></i></button>
                                            </form>
                                        </div>
                                    </div>
                                </div>
                            </div>
                            <div className="col-lg-4">
                                <div className="serch-content">
                                    <h3>Search</h3>
                                    <div className="form-group">
                                        <input type="text" className="form-control" placeholder="Find Your Course"/>
                                            <button type="submit" className="src-btn">
                                                <i className="flaticon-search"></i>
                                            </button>
                                    </div>
                                </div>

                                <div className="related-post-area">
                                    <h3>Related Post</h3>
                                    <div className="related-post-box">
                                        <div className="related-post-content">
                                            <a href="latest-news.html"><img src="/images/events/events-3.jpg" alt="Image"/></a>
                                            <h4><a href="latest-news.html">Professor Tom comments on the volunteer B. Snack brand</a></h4>
                                            <p><i className="flaticon-tag"></i> Social Sciences</p>
                                        </div>
                                    </div>
                                    <div className="related-post-box">
                                        <div className="related-post-content">
                                            <a href="latest-news.html"><img src="/images/events/events-2.jpg" alt="Image"/></a>
                                            <h4><a href="latest-news.html">Making a meaningful difference in patients’ lives.</a></h4>
                                            <p><i className="flaticon-tag"></i> Social Sciences</p>
                                        </div>
                                    </div>
                                    <div className="related-post-box">
                                        <div className="related-post-content">
                                            <a href="latest-news.html"><img src="/images/events/events-1.jpg" alt="Image"/></a>
                                            <h4><a href="latest-news.html">Happiness begins with good health</a></h4>
                                            <p><i className="flaticon-tag"></i> Social Sciences</p>
                                        </div>
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
                                        <div className="courses-card" style={{ textAlign: "center" }}>
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
