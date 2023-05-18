import { useEffect } from 'react'
import { useParams } from 'react-router-dom';
import TopHeader from '../components/TopHeader'
import Spinner from '../components/Spinner'
import CourseType from '../components/CourseType'
import Navbar from '../components/Navbar'
import Footer from '../components/Footer'

function CoursePage() {
  const { id } = useParams();

  return (
    <>
    <TopHeader/>
    <Spinner/>
    <Navbar/>
    <CourseType id={id}/>
    <Footer/>
    </>
  )
}

export default CoursePage
