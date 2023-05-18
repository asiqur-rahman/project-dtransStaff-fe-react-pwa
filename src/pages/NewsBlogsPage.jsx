import { useEffect } from 'react'
import { useParams } from 'react-router-dom';
import TopHeader from '../components/TopHeader'
import Spinner from '../components/Spinner'
import Blogs from '../components/Blogs'
import LatestNews from '../components/LatestNews'
import Navbar from '../components/Navbar'
import Footer from '../components/Footer'

function NewsBlogsPage() {
  const { page } = useParams();

  return (
    <>
    <TopHeader/>
    <Spinner/>
    <Navbar/>
    <LatestNews page={page}/>
    <Blogs page={page}/>
    <Footer/>
    </>
  )
}

export default NewsBlogsPage
