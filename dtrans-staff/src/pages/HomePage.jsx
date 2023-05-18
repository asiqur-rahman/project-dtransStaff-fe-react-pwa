import { useEffect } from 'react'
import All from '../components/All'
// import Spinner from '../components/Spinner'

function HomePage() {

  useEffect(() => {
    // window.SpinnerHide();
  }, []);

  return (
    <>
    <All/>
    </>
  )
}

export default HomePage
