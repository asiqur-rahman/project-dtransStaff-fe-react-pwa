import { useEffect, useState } from 'react'
import Axios, {web as AxiosWeb} from '../helper/axios'

function Story(props) {

    const [pageDetails, setPageDetails]=useState(false)

    useEffect(()=>{
        if(props.page){
          AxiosWeb.get(`/page/breadcrumb/${props.page}`)
          .then(result=>{
              if(result.data.status==200){
                window.SpinnerHide();
                setPageDetails(result.data.data)
              }
          })
        }
        
      },[props.page])

    return (
        <>
        <div className="page-banner-area bg-2">
            <div className="container">
                <div className="page-banner-content">
                    <h1>Sus-Plan</h1>
                    <ul>
                        <li><a href="#">Stories</a></li>
                        <li>Sus-Plan</li>
                    </ul>
                </div>
            </div>
        </div>
        <div className="campus-information-area pt-70 pb-70">
        <div className="container">
            <div className="row align-items-center">
                {pageDetails && pageDetails.files.length>0 &&
                <div class="events-image">
                    <img src={pageDetails.files[0].link} alt="Image" loading='lazy'/>
                </div>
                }
                <div className="col-lg-12" data-aos="fade-right" data-aos-easing="ease-in-sine" data-aos-duration="1300" data-aos-once="true">
                    <div className="campus-content pr-20">
                        <div className="campus-title">
                            <h2>{pageDetails.title}</h2>
                            <p style={{textAlign:"justify"}} dangerouslySetInnerHTML={{__html: pageDetails.content}}>

                            </p>
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
  