import { useEffect,useState } from 'react'
import Axios, {web as AxiosWeb} from '../helper/axios'
import { Link } from "react-router-dom";

function CampusInformation(props) {

    const [details, setDetails]= useState(false);

    const Render = () => {

        useEffect(() => {
            if(props.page && !details){
                AOS.init();
                AxiosWeb.get(`/page/aboutOrg`)
                .then(result=>{
                      window.SpinnerHide();
                      if(result.data.status==200){
                          if(result.data.data)setDetails(result.data.data);
                          else setDetails([]);
                      }
                })
                .catch(e=>{
                    console.log(e)
                })
            }
            
        }, [props.page]);

        useEffect(() => {
            AOS.init();
        }, []);

        return (
            <>
                {props.page && props.page == "details" && <>
                    <div className="page-banner-area bg-2">
                        <div className="container">
                            <div className="page-banner-content">
                                <h1>Sus-Plan</h1>
                                <ul>
                                    <li><a href="#">About Us</a></li>
                                    <li>Sus-Plan</li>
                                </ul>
                            </div>
                        </div>
                    </div>

                    <div className="campus-information-area pb-70">
                        <div className="container">
                            <div className="row align-items-center">
                                <div className="col-lg-12" data-aos="fade-up" data-aos-easing="ease-in-sine" data-aos-duration="1300" data-aos-once="true">
                                    <div className="campus-image pl-20" style={{textAlign:"center"}}>
                                        <img loading="lazy" src={details && details.files.length>0 ? details.files[0].link : "/images/campus-information/campus-1.jpg"} alt="Image" />
                                    </div>
                                </div>
                                <div className="col-lg-12" data-aos="fade-right" data-aos-easing="ease-in-sine" data-aos-duration="1300" data-aos-once="true">
                                    <div className="campus-content pr-20">
                                        <div className="campus-title">
                                            <h2>{details ? details.organizationName:''}</h2>
                                            <p style={{ textAlign: "justify" }} dangerouslySetInnerHTML={{ __html: details.organizationOverview }}></p>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </>}

                {props.page && props.page == "home-page" && details.organizationName && <>

                <div className="campus-information-area pb-70">
                        <div className="container">
                            <div className="row align-items-center">
                                <div className={details.files && details.files.length>0 ? "col-lg-6":"col-lg-12"} data-aos="fade-right" data-aos-easing="ease-in-sine" data-aos-duration="1300" data-aos-once="true">
                                    <div className="campus-content pr-20">
                                        <div className="campus-title">
                                            <h2>{details ? details.organizationName:''}</h2>
                                            <p style={{ textAlign: "justify", maxHeight:"230px", overflow: "hidden" }}dangerouslySetInnerHTML={{ __html: details.organizationOverview }}></p>
                                        </div>
                                        <a href="/about-organization/details" className="default-btn btn">Read More<i className="flaticon-next"></i></a>
                                    </div>
                                </div>

                                {details.files && details.files.length>0 &&
                                <div className="col-lg-6" data-aos="fade-up" data-aos-easing="ease-in-sine" data-aos-duration="1300" data-aos-once="true">
                                    <div className="campus-image pl-20">
                                        <img loading="lazy" src={details.files[0].link} alt="Image" />
                                    </div>
                                </div>}

                            </div>
                        </div>
                    </div>
                </>}

            </>
        )
    }

    return (
        <>
            {props.page && <Render />}
        </>
    )
}

export default CampusInformation
