import { useEffect } from 'react'
import ThemeSettings from '../settings/ThemeSettings'
import Leave from '../components/Leave'
// import Spinner from '../components/Spinner'

function HomePage() {

  useEffect(() => {
    // window.SpinnerHide();
  }, []);

  return (
    <>
    <ThemeSettings/>
    <Leave/>
    </>
  )
}

export default HomePage
