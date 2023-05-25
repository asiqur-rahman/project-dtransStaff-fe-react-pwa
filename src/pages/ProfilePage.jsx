import { useEffect } from 'react'
import ThemeSettings from '../settings/ThemeSettings'
import Profile from '../components/Profile'
// import Spinner from '../components/Spinner'

function HomePage() {

  useEffect(() => {
    // window.SpinnerHide();
  }, []);

  return (
    <>
    <ThemeSettings/>
    <Profile/>
    </>
  )
}

export default HomePage
