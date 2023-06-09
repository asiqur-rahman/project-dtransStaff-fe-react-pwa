import { useEffect } from 'react'
import JobRecords from '../components/JobRecords'
import ThemeSettings from '../settings/ThemeSettings'

function HomePage() {

  useEffect(() => {

  }, []);

  return (
    <>
    <ThemeSettings/>
    <JobRecords/>
    </>
  )
}

export default HomePage
