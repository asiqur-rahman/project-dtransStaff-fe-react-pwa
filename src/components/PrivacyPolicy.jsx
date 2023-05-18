import { useEffect, useState } from 'react'
import Axios, { web as AxiosWeb } from '../helper/axios'

function Story(props) {

    const [pageDetails, setPageDetails] = useState(false)

    useEffect(() => {
        AxiosWeb.get(`/footerPage/privacyPolicy`)
            .then(result => {
                if (result.data.status == 200) {
                    window.SpinnerHide();
                    if (result.data.data.footerPageDetails && result.data.data.footerPageDetails.length > 0) {
                        setPageDetails(result.data.data.footerPageDetails)
                    }
                }
            })
    }, [])

    return (
        <>
            <div className="page-banner-area bg-2">
                <div className="container">
                    <div className="page-banner-content">
                        <h1>Privacy Policy</h1>
                        <ul>
                            <li><a href="index.html">Home</a></li>
                            <li>Privacy Policy</li>
                        </ul>
                    </div>
                </div>
            </div>


            <div className="privacy-policy-area pt-100 pb-70">
                <div className="container">
                    <div className="row">
                        <div className="col-lg-12">
                            <div style={{textAlign:"justify"}} className="privacy-content pr-20">
                                <h2>Privacy Policy</h2>
                                <div style={{textAlign:"justify"}} dangerouslySetInnerHTML={{__html: pageDetails}}></div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </>
    )
}

export default Story
