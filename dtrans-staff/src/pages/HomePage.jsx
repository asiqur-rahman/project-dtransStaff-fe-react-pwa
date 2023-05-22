import { useEffect } from 'react'
import All from '../components/All'
import ThemeSettings from '../settings/ThemeSettings'
// import Spinner from '../components/Spinner'

function HomePage() {

  useEffect(() => {
    // window.SpinnerHide();
  }, []);

  return (
    <>
    <ThemeSettings/>
    <All/>
    </>
  )
}

export default HomePage
