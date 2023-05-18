import { useEffect } from 'react'
import { useParams } from 'react-router-dom';
import TopHeader from '../components/TopHeader'
import Spinner from '../components/Spinner'
import Story from '../components/Story'
import Navbar from '../components/Navbar'
import Footer from '../components/Footer'

function StoryPage() {
  const { page } = useParams();

  useEffect(() => {
    AOS.init();
  }, []);

  return (
    <>
    <TopHeader/>
    <Spinner/>
    <Navbar/>
    <Story page={page}/>
    <Footer/>
    </>
  )
}

export default StoryPage
