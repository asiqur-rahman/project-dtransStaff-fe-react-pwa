import { useEffect, useState } from 'react'
import Axios, {web as AxiosWeb} from '../helper/axios'

function Story(props) {

    const [pageDetails, setPageDetails] = useState(false)

    useEffect(() => {
        AxiosWeb.get(`/footerPage/faq`)
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
                <h1>FAQs</h1>
                <ul>
                    <li><a href="index.html">Home</a></li>
                    <li>FAQs</li>
                </ul>
            </div>
        </div>
    </div>


    <div className="faq-area ptb-100">
        <div className="container">
            <div className="row align-items-center">

                <div className="col-lg-6">
                    <div className="faq-image pr-20">
                        <img src="/images/faq-img.jpg" alt="Image"/>
                    </div>
                </div>
                <div className="col-lg-6">
                    <div className="faq-left-content pl-20">
                        <div className="faq-title">
                            <h2>Need To Ask Some Questions Or Check Questions</h2>
                            {/* <p>There are many variations of passages of Lorem Ipsum available, but the majority in injected humour, randomised words don't look believable</p> */}
                        </div>
                        <div className="accordion" id="accordionExample">
                            {
                                pageDetails && pageDetails.map((item,i)=>{
                                    return (
                                        <div className="accordion-item" key={i}>
                                            <h2 className="accordion-header" id="headingOne">
                                                <button className="accordion-button" type="button" data-bs-toggle="collapse" data-bs-target={`#collapse${i}`} aria-expanded="true" aria-controls="collapseOne">
                                                    {`${i+1}. ${item.question}`}
                                                </button>
                                            </h2>
                                            <div id={`collapse${i}`} className={`accordion-collapse collapse ${i==0?'show':''}`} aria-labelledby="headingOne" data-bs-parent="#accordionExample">
                                                <div className="accordion-body">
                                                    {item.answer}
                                                </div>
                                            </div>
                                        </div>
                                    )
                                })
                            }
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
  