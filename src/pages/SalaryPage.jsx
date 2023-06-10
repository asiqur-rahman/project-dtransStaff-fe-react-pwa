import { useEffect } from 'react'
import Salary from '../components/Salary'
import ThemeSettings from '../settings/ThemeSettings'

function HomePage() {

  useEffect(() => {

  }, []);

  return (
    <>
    <ThemeSettings/>
    <Salary/>
    </>
  )
}

export default HomePage
