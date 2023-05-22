import { useEffect } from 'react'
import Home from '../components/Home'
import Category from '../components/Category'
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
    <Category/>
    </>
  )
}

export default HomePage
