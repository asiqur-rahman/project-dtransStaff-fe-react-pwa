import { useEffect } from 'react'
import { useParams } from 'react-router-dom';
import TopHeader from '../components/TopHeader'
import Spinner from '../components/Spinner'
import FAQ from '../components/FAQ'
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
    <FAQ/>
    <Footer/>
    </>
  )
}

export default StoryPage
