import { useEffect,useState } from 'react'
import Axios, {web as AxiosWeb} from '../helper/axios'
import { Link } from "react-router-dom";

function LatestNews(props) {
    const [newsDetails, setNewsDetails]= useState(false);
    const [newsList, setNewsList]= useState(false);
    const [news, setNews]= useState(false);
    
    const Render = () => {
        useEffect(()=>{
            if(!newsList){
              AxiosWeb.get(`/newsAndBlog/list?listFor=news&filesNeeded=true&limit=5&offset=0`)
              .then(result=>{
                    window.SpinnerHide();
                    if(result.data){
                        setNewsDetails(result.data);
                        setNewsList(result.data.data);
                    }
              })
            }
            else if (props.page && props.page == "home-page" && !news){
                AxiosWeb.get(`/newsAndBlog/homePage`)
              .then(result=>{
                    window.SpinnerHide();
                    if(result.data.status==200){
                        setNews(result.data.data);
                    }
              })
            }
        },[props.id,props.page])

        useEffect(() => {
            window.SpinnerHide();
            AOS.init();
        }, []);
        return (
            <>
                {props.page && props.page == "news" && <>
                    <div className="page-banner-area bg-2">
                        <div className="container">
                            <div className="page-banner-content">
                                <h1>Latest News</h1>
                                <ul>
                                    <li><a href="#">News & Blog</a></li>
                                    <li>Latest News</li>
                                </ul>
                            </div>
                        </div>
                    </div>

                    <div className="latest-news-area pt-100 pb-70">
                        <div className="container">
                            <div className="row">
                                <div className="col-lg-8">
                                    <div className="latest-news-left-content pr-20">
                                        {newsList && newsList.map((item,i)=>{
                                            return (
                                                <div key={i} style={{ backgroundImage: `${item.files.length>0?`url(${item.files[0].link})`:"url(/images/events/events-3.jpg)"}` }} className="latest-news-simple-card">
                                                    <div className="news-content">
                                                        <div className="list">
                                                            <ul>
                                                                <li><i className="flaticon-user"></i>By <a href={`/news-and-blog-details/${item.id}`}>Admin</a></li>
                                                            </ul>
                                                        </div>
                                                        <a href={`/news-and-blog-details/${item.id}`}><h3>{item.newsAndBlogName}</h3></a>
                                                        <a href={`/news-and-blog-details/${item.id}`} className="read-more-btn active">Read More<i className="flaticon-next"></i></a>
                                                    </div>
                                                </div>
                                            )
                                        })}
{/*                                         
                                        <div style={{ backgroundImage: "url(/images/events/events-2.jpg" }} className="latest-news-simple-card">
                                            <div className="news-content">
                                                <div className="list">
                                                    <ul>
                                                        <li><i className="flaticon-user"></i>By <a href="news-details.html">Admin</a></li>
                                                    </ul>
                                                </div>
                                                <a href="news-details.html"><h3>Inauguration of 2nd Batch of “Sustainability Management” training program</h3></a>
                                                <a href="news-details.html" className="read-more-btn active">Read More<i className="flaticon-next"></i></a>
                                            </div>
                                        </div>
                                        <div style={{ backgroundImage: "url(/images/events/events-1.jpg" }} className="latest-news-simple-card">
                                            <div className="news-content">
                                                <div className="list">
                                                    <ul>
                                                        <li><i className="flaticon-user"></i>By <a href="news-details.html">Admin</a></li>
                                                    </ul>
                                                </div>
                                                <a href="news-details.html"><h3>Inauguration of the First Batch of “Sustainability Management” training program</h3></a>
                                                <a href="news-details.html" className="read-more-btn active">Read More<i className="flaticon-next"></i></a>
                                            </div>
                                        </div> */}

                                    </div>
                                </div>
                                <div className="col-lg-4">
                                    <div className="serch-content">
                                        <h3>Search</h3>
                                        <div className="form-group">
                                            <input type="text" className="form-control" placeholder="Find Your Course" />
                                            <button type="submit" className="src-btn">
                                                <i className="flaticon-search"></i>
                                            </button>
                                        </div>
                                    </div>

                                    <div className="related-post-area">
                                        <h3>Recent News</h3>
                                        <div className="related-post-box">
                                            <div className="related-post-content">
                                                <a href="latest-news.html"><img src="/images/events/events-3.jpg" alt="Image" /></a>
                                                <h4><a href="latest-news.html">Inauguration of 3rd Batch of “Sustainability Management” training program</a></h4>
                                            </div>
                                        </div>
                                        <div className="related-post-box">
                                            <div className="related-post-content">
                                                <a href="latest-news.html"><img src="/images/events/events-2.jpg" alt="Image" /></a>
                                                <h4><a href="latest-news.html">Inauguration of 2nd Batch of “Sustainability Management” training program</a></h4>
                                            </div>
                                        </div>
                                        <div className="related-post-box">
                                            <div className="related-post-content">
                                                <a href="latest-news.html"><img src="/images/events/events-1.jpg" alt="Image" /></a>
                                                <h4><a href="latest-news.html">Inauguration of the First Batch of “Sustainability Management” training program</a></h4>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </>}

                {props.page && props.page == "home-page" && news.length>0 && <>
                    <div className="lates-news-area ptb-100">
                        <div className="container">
                            <div className="section-title">
                                <h2>Latest News & Blog</h2>
                                {/* <p>Lorem ipsum dolor sit amet consectetur adipiscing elit ut elit tellus luctus nec ullamcorper mattis</p> */}
                            </div>
                            <div className="row justify-content-center">
                                {news && news.map((item,i)=>{
                                    return (
                                        <div key={i} className="col-lg-4 col-md-6" data-aos="fade-up" data-aos-duration="1200" data-aos-delay="200" data-aos-once="true">
                                            <div className="single-news-card">
                                                <div className="news-img">
                                                    <a href={`/news-and-blog-details/${item.id}`}><img loading="lazy" src={item.files && item.files.length>0 ? item.files[0].link : "/images/events/events-3.jpg"} alt="Image" /></a>
                                                </div>
                                                <div className="news-content">
                                                    <div className="list">
                                                        <ul>
                                                            <li><i className="flaticon-user"></i>By <a href={`/news-and-blog-details/${item.id}`}>Admin</a></li>
                                                        </ul>
                                                    </div>
                                                    <a href={`/news-and-blog-details/${item.id}`}><h3>{item.newsAndBlogName}</h3></a>
                                                    <a href={`/news-and-blog-details/${item.id}`} className="read-more-btn">Read More<i className="flaticon-next"></i></a>
                                                </div>
                                            </div>
                                        </div>
                                    )
                                })}
                            </div>
                            <div className="more-latest-news text-center">
                                <p>Select From Other Options.<a href="latest-news.html" className="read-more-btn active"> More on News & Blog <i className="flaticon-next"></i></a></p>
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

export default LatestNews
