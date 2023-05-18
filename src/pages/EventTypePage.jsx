import { useEffect } from 'react'
import { useParams } from 'react-router-dom';
import TopHeader from '../components/TopHeader'
import Spinner from '../components/Spinner'
import EventType from '../components/EventType'
import Navbar from '../components/Navbar'
import Footer from '../components/Footer'

function EventsPage() {
  const { id } = useParams();

  return (
    <>
    <TopHeader/>
    <Spinner/>
    <Navbar/>
    <EventType id={id}/>
    <Footer/>
    </>
  )
}

export default EventsPage
