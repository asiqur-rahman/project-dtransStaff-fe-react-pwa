import { useEffect } from 'react'
import ThemeSettings from '../settings/ThemeSettings'
import ApplyLeave from '../components/ApplyLeave'
// import Spinner from '../components/Spinner'

function HomePage() {

  useEffect(() => {
    // window.SpinnerHide();
  }, []);

  return (
    <>
    <ThemeSettings/>
    <ApplyLeave/>
    </>
  )
}

export default HomePage
