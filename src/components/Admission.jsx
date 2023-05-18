function Admission() {

    return (
        <div className="admisssion-area ptb-100 admission-bg">
        <div className="container">
            <div className="row align-items-center">
                <div className="col-lg-6 col-md-6">
                    <div className="admission-left-content">
                        <h2>You're Learning Started Today!</h2>
                        <p>Lorem ipsum dolor sit amet consectetur adipiscing elit ut elit tellus luctus nec ullamcorper mattis</p>
                        <a href="courses.html" className="default-btn btn">More on admission<i className="flaticon-next"></i></a>
                    </div>
                </div>
                <div className="col-lg-6 col-md-6">
                    <div className="admission-right-content">
                        <ul>
                            <li><p>Watch Video</p></li>
                            <li>
                                <div className="icon">
                                    <a className="popup-youtube play-btn" href="https://www.youtube.com/watch?v=LHBE6Q9XlzI"><i className="ri-play-fill"></i></a>
                                </div>
                            </li>
                        </ul>
                    </div>
                </div>
            </div>
        </div>
    </div>
    )
  }
  
  export default Admission
  