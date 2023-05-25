import { useEffect } from 'react'
import Jobs from '../components/Jobs'
import ThemeSettings from '../settings/ThemeSettings'

function HomePage() {

  useEffect(() => {

  }, []);

  return (
    <>
    <ThemeSettings/>
    <Jobs/>
    </>
  )
}

export default HomePage
