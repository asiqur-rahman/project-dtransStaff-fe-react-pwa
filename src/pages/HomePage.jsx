import { useEffect } from 'react'
import TopHeader from '../components/TopHeader'
import Spinner from '../components/Spinner'
import Navbar from '../components/Navbar'
import Banner from '../components/Banner'
import Academic from '../components/Academic'
import CampusInformation from '../components/CampusInformation'
import CourseType from '../components/CourseType'
import Admission from '../components/Admission'
import EventTypePage from '../components/EventType'
import LatestNews from '../components/LatestNews'
import Footer from '../components/Footer'

function HomePage() {

  useEffect(() => {
    window.SpinnerHide();
    // AOS.init();
  }, []);

  return (
    <>
    <Spinner/>
    <TopHeader/>
    <Navbar/>
    <Banner/>
    <Academic/>
    <CampusInformation page="home-page"/>
    <CourseType page="home-page"/>
    <Admission/>
    <EventTypePage page="home-page"/>
    <LatestNews page="home-page"/>
    <Footer/>
    </>
  )
}

export default HomePage
