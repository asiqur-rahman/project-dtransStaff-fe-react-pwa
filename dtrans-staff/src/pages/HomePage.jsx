import { useEffect } from 'react'
import Home from '../components/Home'
import Categiory from '../components/Categiory'
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
    <Categiory/>
    </>
  )
}

export default HomePage
