import { useEffect } from 'react'
import Transfer from '../components/Transfer'
import ThemeSettings from '../settings/ThemeSettings'

function HomePage() {

  useEffect(() => {
    // window.SpinnerHide();
  }, []);

  return (
    <>
    <ThemeSettings/>
    <Transfer/>
    </>
  )
}

export default HomePage
