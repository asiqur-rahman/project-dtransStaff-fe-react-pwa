import { useEffect } from 'react'
import ThemeSettings from '../settings/ThemeSettings'
import Notification from '../components/Notification'
// import Spinner from '../components/Spinner'

function HomePage() {

  useEffect(() => {
    // window.SpinnerHide();
  }, []);

  return (
    <>
    <ThemeSettings/>
    <Notification/>
    </>
  )
}

export default HomePage
