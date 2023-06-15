import { useEffect } from 'react'
import ThemeSettings from '../settings/ThemeSettings'
import NotificationDetails from '../components/NotificationDetails'
// import Spinner from '../components/Spinner'

function HomePage() {

  useEffect(() => {
    // window.SpinnerHide();
  }, []);

  return (
    <>
    <ThemeSettings/>
    <NotificationDetails/>
    </>
  )
}

export default HomePage
