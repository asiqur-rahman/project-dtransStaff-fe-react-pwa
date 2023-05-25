import { useEffect } from 'react'
import JobDetails from '../components/JobDetails'
import ThemeSettings from '../settings/ThemeSettings'

function HomePage() {

  useEffect(() => {
    // window.SpinnerHide();
  }, []);

  return (
    <>
    <ThemeSettings/>
    <JobDetails/>
    </>
  )
}

export default HomePage
