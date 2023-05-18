import { useEffect, useState } from 'react'
import Axios, { web as AxiosWeb } from '../helper/axios'

function Story(props) {

    const [pageDetails, setPageDetails] = useState(false)

    useEffect(() => {
        AxiosWeb.get(`/footerPage/contactUS`)
            .then(result => {
                if (result.data.status == 200) {
                    window.SpinnerHide();
                    if (result.data.data.footerPageDetails && result.data.data.footerPageDetails.length > 0) {
                        setPageDetails(JSON.parse(result.data.data.footerPageDetails))
                    }
                }
            })
    }, [])

    return (
        <>
            <div className="page-banner-area bg-2">
                <div className="container">
                    <div className="page-banner-content">
                        <h1>Contact Us</h1>
                        <ul>
                            <li><a href="index.html">Home</a></li>
                            <li>Contact Us</li>
                        </ul>
                    </div>
                </div>
            </div>


            <div className="contact-us-area pt-100 pb-70">
                <div className="container">
                    <div className="row">
                        <div className="col-lg-6">
                            <div className="contacts-form">
                                <h3>Leave a message</h3>
                                <form id="contactForm">
                                    <div className="row">
                                        <div className="col-lg-6 col-sm-6">
                                            <div className="form-group">
                                                <label>Your name</label>
                                                <input type="text" name="name" id="name" className="form-control" required data-error="Please enter your name" />
                                                <div className="help-block with-errors"></div>
                                            </div>
                                        </div>
                                        <div className="col-lg-6 col-sm-6">
                                            <div className="form-group">
                                                <label>Your email</label>
                                                <input type="email" name="email" id="email" className="form-control" required data-error="Please enter your email" />
                                                <div className="help-block with-errors"></div>
                                            </div>
                                        </div>
                                        <div className="col-lg-6 col-sm-6">
                                            <div className="form-group">
                                                <label>Your phone</label>
                                                <input type="text" name="phone_number" id="phone_number" required data-error="Please enter your number" className="form-control" />
                                                <div className="help-block with-errors"></div>
                                            </div>
                                        </div>
                                        <div className="col-lg-6 col-sm-6">
                                            <div className="form-group">
                                                <label>Subject</label>
                                                <input type="text" name="msg_subject" id="msg_subject" className="form-control" required data-error="Please enter your subject" />
                                                <div className="help-block with-errors"></div>
                                            </div>
                                        </div>
                                        <div className="col-12">
                                            <div className="form-group">
                                                <label>Your message</label>
                                                <textarea name="message" className="form-control" id="message" cols="30" rows="8" required data-error="Write your message"></textarea>
                                                <div className="help-block with-errors"></div>
                                            </div>
                                        </div>
                                        <div className="form-group">
                                            <div className="form-check">
                                                <input name="gridCheck" value="I agree to the terms and privacy policy." className="form-check-input" type="checkbox" id="gridCheck" required />
                                                <label className="form-check-label" for="gridCheck">
                                                    I agree to the <a href="terms-conditions.html">terms</a> and <a href="privacy-policy.html">privacy policy</a>
                                                </label>
                                                <div className="help-block with-errors gridCheck-error"></div>
                                            </div>
                                        </div>
                                        <div className="col-lg-12 col-md-12">
                                            <button type="submit" className="default-btn">
                                                <span>Send message</span>
                                            </button>
                                            <div id="msgSubmit" className="h3 text-center hidden"></div>
                                            <div className="clearfix"></div>
                                        </div>
                                    </div>
                                </form>
                            </div>
                        </div>
                        <div className="col-lg-6">
                            <div className="contact-and-address">
                                <h2>Let's Contact Us</h2>
                                <p>{pageDetails.contactDetails}</p>
                                <div className="contact-and-address-content">
                                    <div className="row">
                                        <div className="col-lg-6 col-md-6">
                                            <div className="contact-card">
                                                <div className="icon">
                                                    <i className="ri-phone-line"></i>
                                                </div>
                                                <h4>Contact</h4>
                                                <p>Mobile: <a href="tel:+8819906886">{pageDetails.contactNo}</a></p>
                                                <p>Email: <a href="#"><span>{pageDetails.email}</span></a></p>
                                            </div>
                                        </div>
                                        <div className="col-lg-6 col-md-6">
                                            <div className="contact-card">
                                                <div className="icon">
                                                    <i className="ri-map-pin-line"></i>
                                                </div>
                                                <h4>Address</h4>
                                                <p>{pageDetails.address}</p>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                                <div className="social-media">
                                    <h3>Social Media</h3>
                                    <p>{pageDetails.socialDetails}</p>
                                    <ul>
                                        <li>
                                            <a href={pageDetails.fbLink} target="_blank"><i className="flaticon-facebook"></i></a>
                                        </li>
                                        <li>
                                            <a href={pageDetails.twiLink} target="_blank"><i className="flaticon-twitter"></i></a>
                                        </li>
                                        <li>
                                            <a href={pageDetails.insLink} target="_blank"><i className="flaticon-instagram"></i></a>
                                        </li>
                                        <li>
                                            <a href={pageDetails.linkLink} target="_blank"><i className="flaticon-linkedin"></i></a>
                                        </li>
                                    </ul>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </>
    )
}

export default Story
