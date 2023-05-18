import { useEffect,useState } from 'react'
import Axios, {web as AxiosWeb} from '../helper/axios'
import { Link } from "react-router-dom";

function Course(props) {

    const [courseTypeDetails, setCourseTypeDetails]= useState(false);
    const [courseTypes, setCourseTypes]= useState(false);
    const RenderCourse = () =>{

        useEffect(()=>{
            if(props.id && (!courseTypeDetails || courseTypeDetails.id!=props.id)){
              AxiosWeb.get(`/courseType/details/${props.id}`)
              .then(result=>{
                    window.SpinnerHide();
                    if(result.data.status==200){
                        setCourseTypeDetails(result.data.data);
                    }
              })
            }
            else if (props.page && props.page == "home-page" && !courseTypes){
                AxiosWeb.get(`/courseType/homePage`)
              .then(result=>{
                    window.SpinnerHide();
                    if(result.data.status==200){
                        setCourseTypes(result.data.data);
                    }
              })
            }
        },[props.id,props.page])
        
        useEffect(() => {
            AOS.init();
        }, []);

        return (
            <>
            {!props.page &&<>
            {courseTypeDetails ? <>
                <div className="page-banner-area bg-1">
                    <div className="container">
                        <div className="page-banner-content">
                            <h1>{courseTypeDetails.courseTypeName}</h1>
                            <ul>
                                <li><a href="#">Study</a></li>
                                <li>{courseTypeDetails.courseTypeName}</li>
                            </ul>
                        </div>
                    </div>
                </div>
                <div className="courses-area ptb-100 bg-f4f6f9">
                    <div className="container">
                        <div className="row justify-content-center">

                            {courseTypeDetails.courses.map((item,i)=>{
                                return (
                                    <div key={i} className="col-lg-4 col-md-6" data-aos="fade-up" data-aos-duration="1200" data-aos-delay="200" data-aos-once="true">
                                        <div className="single-courses-card">
                                            <div className="courses-img">
                                                <Link to={`/course-details/${item.id}`}><img loading="lazy" src={item.files.length>0?item.files[0].link:"/images/courses/courses-1.jpg"} alt="Image" /></Link>
                                            </div>
                                            <div className="courses-content">
                                                <Link to={`/course-details/${item.id}`}><h3>{item.courseName}<br /><small style={{fontSize:"15px"}}>Code – ‘{item.courseCode}’</small></h3></Link>
                                            </div>
                                        </div>
                                    </div>
                                )
                            })}

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
            </>} 
            </>}

            {props.page && props.page == "home-page" && courseTypes.length>0 && <>
                <div className="courses-area ptb-100 bg-f4f6f9">
                    <div className="container">
                        <div className="section-title">
                            <h2>Our Courses</h2>
                            {/* <p>Lorem ipsum dolor sit amet consectetur adipiscing elit ut elit tellus luctus nec ullamcorper mattis</p> */}
                        </div>
                        <div className="row justify-content-center">

                            {courseTypes && courseTypes.map((item,i)=>{
                                return (
                                    <div key={i} className="col-lg-4 col-md-6"  data-aos="fade-up" data-aos-duration="1200" data-aos-delay="200" data-aos-once="true">
                                        <div className="single-courses-card">
                                            <div className="courses-img">
                                            <Link to={`/course-details/${item.id}`}><img loading="lazy" src={item.files.length>0?item.files[0].link:"/images/courses/courses-1.jpg"} alt="Image" style={{minHeight:"225px"}}/></Link>
                                            </div>
                                            <div className="courses-content">
                                            <Link to={`/course-details/${item.id}`}><h3>{item.courseTypeName}</h3></Link>
                                            </div>
                                        </div>
                                    </div>
                                )
                            })}

                        </div>
                    </div>
                </div>
            </>}

        </>
    )
    }

    return (
        <>
        {(props.id || props.page) && <RenderCourse/>} 
        </>
        
    )
        
}

export default Course
