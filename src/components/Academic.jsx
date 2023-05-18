
import HeroSlider, { Slide, Nav } from "hero-slider";
import { useEffect,useState } from 'react'
import Axios, {web as AxiosWeb} from '../helper/axios'

function Academic() {

    const [sliders, setSliders]= useState([]);

    useEffect(() => {
        AOS.init();
        AxiosWeb.get(`/page/homePageWhyChooseUs`)
        .then(result=>{
            window.SpinnerHide();
            if(result.data.status==200 && result.data.data && result.data.data.homePageWhyChooseUs && result.data.data.homePageWhyChooseUs.length>0) {
                var jsonData= JSON.parse(result.data.data.homePageWhyChooseUs);
                setSliders(jsonData);
            }
        })
    }, []);
    return (
        <>
        {sliders.length>0 &&
        
        <div className="academic-area pt-100 pb-70">
            <div className="container">
                <div className="section-title">
                    <h2>Why Choose Sus-Plan</h2>
                    {/* <p>Lorem ipsum dolor sit amet consectetur adipiscing elit ut elit tellus luctus nec ullamcorper mattis </p> */}
                </div>
                <div className="row justify-content-center">
                    
                        {sliders.map((item,i)=>{
                            return (
                                <div className="col-lg-4 col-md-6" data-aos="fade-up" data-aos-duration="1200" data-aos-delay="200" data-aos-once="true">
                                <div className="single-academics-card" key={i}>
                                    <div className="academic-top-content">
                                        <i className={item.wcuIcon}></i>
                                        <a href="courses.html"><h3>{item.wcuTitle}</h3></a>
                                    </div>
                                    <p>
                                        {item.wcuDescription}
                                    </p>
                                    <a href="#" className="read-more-btn">{item.wcuShortNote}<i className="flaticon-next"></i></a>
                                </div>
                            </div>
                            )
                        })}
                        
                    {/* <div className="col-lg-4 col-md-6" data-aos="fade-up" data-aos-duration="1200" data-aos-delay="400" data-aos-once="true">
                        <div className="single-academics-card">
                            <div className="academic-top-content">
                                <i className="flaticon-graduation"></i>
                                <a href="courses.html"><h3>Skilled Instructors</h3></a>
                            </div>
                            <p>
                                Lorem ipsum dolor sit amet consectetur ad
                                piscing elit ut elit tellus luctus nec dolor sit amet consec teturul
                            </p>
                            <a href="courses.html" className="read-more-btn">Skilled Instructors<i className="flaticon-next"></i></a>
                        </div>
                    </div>
                    <div className="col-lg-4 col-md-6" data-aos="fade-up" data-aos-duration="1200" data-aos-delay="600" data-aos-once="true">
                        <div className="single-academics-card">
                            <div className="academic-top-content">
                                <i className="flaticon-writing-tool"></i>
                                <a href="courses.html"><h3>Lifelong learning</h3></a>
                            </div>
                            <p>
                                Lorem ipsum dolor sit amet consectetur ad
                                piscing elit ut elit tellus luctus nec dolor sit amet consec teturul
                            </p>
                            <a href="courses.html" className="read-more-btn">Lifelong learning<i className="flaticon-next"></i></a>
                        </div>
                    </div> */}
                </div>
            </div>
        </div>
        }

        </>
        
    )
}

export default Academic
