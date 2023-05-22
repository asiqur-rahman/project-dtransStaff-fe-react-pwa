import { useEffect } from 'react'
import Home from '../components/Home'
import Jobs from '../components/Jobs'
import JobDetails from '../components/JobDetails'
import ThemeSettings from '../settings/ThemeSettings'
import Notification from '../components/Notification'
import Profile from '../components/Profile'
// import Spinner from '../components/Spinner'

function HomePage() {

  useEffect(() => {
    // window.SpinnerHide();
  }, []);

  return (
    <>
    <ThemeSettings/>
    <Jobs/>
    </>
  )
}

export default HomePage
