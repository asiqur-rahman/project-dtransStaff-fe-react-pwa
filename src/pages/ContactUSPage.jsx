import { useEffect } from 'react'
import { useParams } from 'react-router-dom';
import TopHeader from '../components/TopHeader'
import Spinner from '../components/Spinner'
import ContactUS from '../components/ContactUS'
import Navbar from '../components/Navbar'
import Footer from '../components/Footer'

function StoryPage() {

  useEffect(() => {
    AOS.init();
  }, []);

  return (
    <>
    <TopHeader/>
    <Spinner/>
    <Navbar/>
    <ContactUS/>
    <Footer/>
    </>
  )
}

export default StoryPage
