import { useEffect, useState } from 'react'
import Axios, { web as AxiosWeb } from '../helper/axios'

function CourseDetails(props) {

    const [details, setDetails] = useState(false)

    useEffect(() => {
        if (props.id) {
            AxiosWeb.get(`/course/details/id/${props.id}`)
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
                            <h1>{details.courseName}</h1>
                            <ul>
                                <li><a href="training-courses.html">Training Courses</a></li>
                                <li>{details.courseName}</li>
                            </ul>
                        </div>
                    </div>
                </div>


                <div className="courses-details-area pt-70 pb-70">
                    <div className="container">
                        <div className="row">
                            <div className="col-lg-7">
                                <div className="courses-details">
                                    <div className="courses-card">
                                        <h2>{details.courseName} <small style={{ fontSize: "15px" }}> (Code – ‘{details.courseCode}’)</small></h2>

                                        <div className="list">
                                            <ul>
                                                <li><i className="flaticon-clock"></i><span>Last Update: </span>April 04, 2023</li>
                                            </ul>
                                        </div>
                                    </div>
                                    <div className="description">
                                        <div className="container p-0">
                                            <nav>
                                                <div className="nav nav-tabs d-flex justify-content-between" id="nav-tab" role="tablist">
                                                    <button className="nav-link active" id="nav-overview-tab" data-bs-toggle="tab" data-bs-target="#nav-overview" type="button" role="tab" aria-controls="nav-overview" aria-selected="true">Overview</button>
                                                    <button className="nav-link" id="nav-curriculum-tab" data-bs-toggle="tab" data-bs-target="#nav-curriculum" type="button" role="tab" aria-controls="nav-curriculum" aria-selected="false">Outline</button>
                                                    <button className="nav-link" id="nav-instructor-tab" data-bs-toggle="tab" data-bs-target="#nav-instructor" type="button" role="tab" aria-controls="nav-instructor" aria-selected="false">Instructors</button>
                                                    <button className="nav-link" id="nav-reviews-tab" data-bs-toggle="tab" data-bs-target="#nav-reviews" type="button" role="tab" aria-controls="nav-reviews" aria-selected="false">Reviews</button>
                                                </div>
                                            </nav>
                                            <div className="tab-content" id="nav-tabContent">
                                                <div className="tab-pane fade show active" id="nav-overview" role="tabpanel" aria-labelledby="nav-overview-tab">
                                                    <div className="overview">
                                                            {/* <p>
                                                                Though not a new concept, but often ignored in Bangladesh context,
                                                                sustainable operations in business became a must. Even in ensuring personal sustainable career and future growth, the professionals should have at least basic knowledge in sustainability management. The training program offers a fundamental knowledge on overall sustainability and sustainability management.
                                                            </p> */}
                                                        <div className="learn" dangerouslySetInnerHTML={{ __html: details.courseOverview }}></div>
                                                    </div>
                                                </div>
                                                <div className="tab-pane fade" id="nav-curriculum" role="tabpanel" aria-labelledby="nav-curriculum-tab">
                                                    <div className="curriculum">
                                                        {/* <p>The training program focuses on the following topics:</p>
                                                        <div className="curriculum-list">
                                                            <ul>
                                                                <li>1)	Sustainable Corporate Management.</li>
                                                                <li>2)	Scope and Components of Sustainability Management.</li>
                                                                <li>3)	Self-responsibilities to Obligations: Regulations and Buyers’ Conditions.</li>
                                                                <li>4)	Financial and Economic Valuation of Sustainability Measures.</li>
                                                                <li>5)	Implementational Challenges and Skills for Sustainability Managers:  Negotiation, Communication and marketing.</li>
                                                            </ul>
                                                        </div> */}
                                                        <div className="learn" dangerouslySetInnerHTML={{ __html: details.courseOutline }}></div>
                                                    </div>
                                                </div>
                                                <div className="tab-pane fade" id="nav-instructor" role="tabpanel" aria-labelledby="nav-instructor-tab">
                                                    <div className="row">
                                                        <div className="single-alumni-events-card">
                                                            <div className="row align-items-center">
                                                                <div className="col-lg-4 col-md-4">
                                                                    <div className="alumni-img">
                                                                        <a href="instructor-details.html">
                                                                            <img src="/images/team/team.jpg" alt="Image" />
                                                                        </a>
                                                                    </div>
                                                                </div>
                                                                <div className="col-lg-8 col-md-8">
                                                                    <div className="alumni-content">
                                                                        <h3>Mohammad Nazmi Newaz, PhD</h3>
                                                                        <strong>Head of Management Department</strong><br />
                                                                        <p>Senior Management Counsellor, BIM</p>
                                                                        <a href="instructor-details.html" className="read-more-btn">Read More<i className="flaticon-next"></i></a>
                                                                    </div>
                                                                </div>
                                                            </div>
                                                        </div>

                                                        <div className="single-alumni-events-card">
                                                            <div className="row align-items-center">
                                                                <div className="col-lg-4 col-md-4">
                                                                    <div className="alumni-img">
                                                                        <a href="instructor-details.html">
                                                                            <img src="/images/team/team.jpg" alt="Image" />
                                                                        </a>
                                                                    </div>
                                                                </div>
                                                                <div className="col-lg-8 col-md-8">
                                                                    <div className="alumni-content">
                                                                        <h3>Mohammad Sayeedur Rahman, <small>Doctoral Student</small></h3>
                                                                        <strong>Management Counsellor</strong><br />
                                                                        <p>Research, Evaluation and Publication department, BIM</p>
                                                                        <a href="instructor-details.html" className="read-more-btn">Read More<i className="flaticon-next"></i></a>
                                                                    </div>
                                                                </div>
                                                            </div>
                                                        </div>
                                                    </div>
                                                </div>
                                                <div className="tab-pane fade" id="nav-reviews" role="tabpanel" aria-labelledby="nav-reviews-tab">
                                                    <div className="reviews">
                                                        <div className="single-reviews-card">
                                                            <img src="/images/courses/review-1.png" alt="Images" />
                                                            <h2>Jorge Overall</h2>
                                                            <div className="date">
                                                                <p>jan 17, 2023 at 10:43 am</p>
                                                            </div>
                                                            <div className="icon">
                                                                <i className="ri-star-fill"></i>
                                                                <i className="ri-star-fill"></i>
                                                                <i className="ri-star-fill"></i>
                                                                <i className="ri-star-fill"></i>
                                                                <i className="ri-star-fill"></i>
                                                            </div>
                                                            <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tem incid idunt ut dolore magna aliqua. Ut enim ad minim ven iam quis nostrud </p>
                                                        </div>

                                                        <div className="review-form">
                                                            <h3>Write a Review</h3>
                                                            <form>
                                                                <div className="row">
                                                                    <div className="col-lg-6">
                                                                        <div className="form-group">
                                                                            <label>Name</label>
                                                                            <input type="text" className="form-control" id="name" />
                                                                        </div>
                                                                    </div>
                                                                    <div className="col-lg-6">
                                                                        <div className="form-group">
                                                                            <label>Email</label>
                                                                            <input type="email" className="form-control" id="email" />
                                                                        </div>
                                                                    </div>
                                                                    <div className="col-lg-12">
                                                                        <div className="form-group">
                                                                            <label>Summary</label>
                                                                            <textarea className="form-control" id="review" rows="4"></textarea>
                                                                        </div>
                                                                    </div>
                                                                </div>
                                                                <button type="submit" className="default-btn btn">Submit Review</button>
                                                            </form>
                                                        </div>
                                                    </div>
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </div>
                            <div className="col-lg-5">
                                <div className="enroll-courses">
                                    <div className="enroll-img">
                                        <img src="/images/courses/courses-4.jpg" alt="Image" />
                                        <div className="icon">
                                            <a className="popup-youtube play-btn" href={details.courseYoutubeLink}><i className="ri-play-fill"></i></a>
                                        </div>
                                    </div>
                                    <div className="list">
                                        <ul>
                                            <li>
                                                <span>Status :</span> Continuous Offering <br />
                                                (please send us your intent through registration)
                                            </li>
                                            <li>
                                                <span>Duration :</span>{details.courseDurationInHours} Hours <br />
                                                (preferably in 5 to 7 weekdays/weekend days)
                                            </li>
                                            {/* <li><span>Delivery Mode :</span>Blended Learning</li> */}
                                            <li>
                                                <span>Fee per Person :</span>BDT {details.courseFee}/-
                                                <br />(excluding Tax and VAT)
                                            </li>
                                        </ul>
                                    </div>
                                    <a href="#" className="default-btn btn">Enroll Course</a>
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
                            <h1>Course</h1>
                            <ul>
                                <li><a href="training-courses.html">Courses</a></li>
                                <li>Course</li>
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
                                        <h2>No Course Found !</h2>
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

export default CourseDetails
