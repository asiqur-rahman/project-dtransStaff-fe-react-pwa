import { useEffect } from 'react'
import ThemeSettings from '../settings/ThemeSettings'
import Feedback from '../components/Feedback'
// import Spinner from '../components/Spinner'

function HomePage() {

  useEffect(() => {
    // window.SpinnerHide();
  }, []);

  return (
    <>
    <ThemeSettings/>
    <Feedback/>
    </>
  )
}

export default HomePage
