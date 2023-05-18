import { useEffect } from 'react'
import { useParams } from 'react-router-dom';
import TopHeader from '../components/TopHeader'
import Spinner from '../components/Spinner'
import EventDetails from '../components/EventDetails'
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
    <EventDetails id={id}/>
    <Footer/>
    </>
  )
}

export default CourseDetailsPage
