import { useEffect } from 'react'
import Home from '../components/Home'
import Jobs from '../components/Jobs'
import JobDetails from '../components/JobDetails'
import ThemeSettings from '../settings/ThemeSettings'
// import Spinner from '../components/Spinner'

function HomePage() {

  useEffect(() => {
    // window.SpinnerHide();
  }, []);

  return (
    <>
    <ThemeSettings/>
    {/* <Home/> */}
    {/* <Jobs/> */}
    <JobDetails/>
    </>
  )
}

export default HomePage
