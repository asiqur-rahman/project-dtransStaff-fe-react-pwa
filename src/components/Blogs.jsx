import { useEffect,useState } from 'react'
import Axios, {web as AxiosWeb} from '../helper/axios'

function Blogs(props) {
    const [blogDetails, setBlogDetails]= useState(false);
    const [blogList, setBlogList]= useState(false);
    const [blog, setBlog]= useState(false);
    
    const Render = () => {
        useEffect(()=>{
            if(!blogList){
              AxiosWeb.get(`/newsAndBlog/list?listFor=blog&filesNeeded=true&limit=5&offset=0`)
              .then(result=>{
                    window.SpinnerHide();
                    if(result.data){
                        setBlogDetails(result.data);
                        setBlogList(result.data.data);
                    }
              })
            }
            else if (props.page && props.page == "home-page" && !newss){
                AxiosWeb.get(`/news/homePage`)
              .then(result=>{
                    window.SpinnerHide();
                    if(result.data.status==200){
                        setBlog(result.data.data);
                    }
              })
            }
        },[props.id,props.page])

        useEffect(() => {
            AOS.init();
        }, []);
        return (
            <>
                {props.page && props.page == "blog" && <>
                    <div className="page-banner-area bg-2">
                        <div className="container">
                            <div className="page-banner-content">
                                <h1>Blogs</h1>
                                <ul>
                                    <li><a href="#">News & Blog</a></li>
                                    <li>Blogs</li>
                                </ul>
                            </div>
                        </div>
                    </div>

                    <div className="latest-news-area pt-70 pb-70">
                        <div className="container">
                            <div className="row">
                                <div className="col-lg-8">
                                    <div className="latest-news-left-content pr-20">

                                        <div className="latest-news-card-area">
                                            <div className="row">

                                                {blogList && blogList.map((item,i)=>{
                                                    return (
                                                        <div key={i} className="col-lg-6 col-md-6">
                                                            <div className="single-news-card">
                                                                <div className="news-img">
                                                                    <a href={`/news-and-blog-details/${item.id}`}><img src={item.files.length>0?item.files[0].link:"/images/news/news-2.jpg"} alt="Image" /></a>
                                                                </div>
                                                                <div className="news-content">
                                                                    <div className="list">
                                                                        <ul>
                                                                            <li><i className="flaticon-user"></i>By <a href={`/news-and-blog-details/${item.id}`}>Admin</a></li>
                                                                            <li><i className="flaticon-tag"></i>{item.newsAndBlogTags}</li>
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
                                        </div>
                                        {/* <div className="paginations">
                                            <ul>
                                                <li><a href="latest-news.html"><i className="flaticon-back"></i></a></li>
                                                <li><a href="latest-news.html" className="active">01</a></li>
                                                <li><a href="latest-news.html">02</a></li>
                                                <li><a href="latest-news.html">03</a></li>
                                                <li><a href="latest-news.html"><i className="flaticon-next"></i></a></li>
                                            </ul>
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
                                    <div className="category-list">
                                        <h3>Category List</h3>
                                        <ul>
                                            <li>
                                                <a href="academics.html">Student<i className="ri-arrow-drop-right-fill"></i></a>
                                            </li>
                                            <li>
                                                <a href="academics.html">Seminar<i className="ri-arrow-drop-right-fill"></i></a>
                                            </li>
                                            <li>
                                                <a href="academics.html">Research<i className="ri-arrow-drop-right-fill"></i></a>
                                            </li>
                                            <li>
                                                <a href="academics.html">Event<i className="ri-arrow-drop-right-fill"></i></a>
                                            </li>
                                            <li>
                                                <a href="academics.html">Event<i className="ri-arrow-drop-right-fill"></i></a>
                                            </li>
                                        </ul>
                                    </div>
                                    <div className="related-post-area">
                                        <h3>Related Post</h3>
                                        <div className="related-post-box">
                                            <div className="related-post-content">
                                                <a href="latest-news.html"><img src="/images/news/news-2.jpg" alt="Image" /></a>
                                                <h4><a href="latest-news.html">Professor Tom comments on the volunteer B. Snack brand</a></h4>
                                                <p><i className="flaticon-tag"></i> Social Sciences</p>
                                            </div>
                                        </div>
                                        <div className="related-post-box">
                                            <div className="related-post-content">
                                                <a href="latest-news.html"><img src="/images/news/news-3.jpg" alt="Image" /></a>
                                                <h4><a href="latest-news.html">Making a meaningful difference in patients’ lives.</a></h4>
                                                <p><i className="flaticon-tag"></i> Social Sciences</p>
                                            </div>
                                        </div>
                                        <div className="related-post-box">
                                            <div className="related-post-content">
                                                <a href="latest-news.html"><img src="/images/news/news-1.jpg" alt="Image" /></a>
                                                <h4><a href="latest-news.html">Happiness begins with good health</a></h4>
                                                <p><i className="flaticon-tag"></i> Social Sciences</p>
                                            </div>
                                        </div>
                                    </div>
                                </div>
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

export default Blogs
