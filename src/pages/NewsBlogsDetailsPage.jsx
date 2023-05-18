import { useEffect } from 'react'
import { useParams } from 'react-router-dom';
import TopHeader from '../components/TopHeader'
import Spinner from '../components/Spinner'
import NewsBlogsDetails from '../components/NewsBlogsDetails'
import Navbar from '../components/Navbar'
import Footer from '../components/Footer'

function CourseDetailsPage() {
  const { id } = useParams();

  useEffect(() => {
    AOS.init();
  }, []);

  return (
    <>
    <TopHeader/>
    <Spinner/>
    <Navbar/>
    <NewsBlogsDetails id={id}/>
    <Footer/>
    </>
  )
}

export default CourseDetailsPage
