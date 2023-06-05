import { useEffect } from 'react';
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import HomePage  from './pages/HomePage'
import LoginPage  from './pages/LoginPage'
import JobsPage  from './pages/JobsPage'
import JobDetailsPage  from './pages/JobDetailsPage'
import ForgetPasswordPage  from './pages/ForgetPasswordPage'
import OTPPage  from './pages/OTPPage'
import ProfilePage  from './pages/ProfilePage'
import NotificationPage  from './pages/NotificationPage'
import LeavePage  from './pages/LeavePage'
import TransferPage  from './pages/TransferPage'
import PrivateRoutes from './utils/PrivateRoutes'
import Spinner from './utils/Spinner'
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';

function App() {

  useEffect(()=>{
    window.SpinnerHide()
  },[])
  return (
    <div>
      <Spinner/>
      <div className="App">
        <ToastContainer position="bottom-center"/>
        <Router>
          <Routes>
            <Route element={<PrivateRoutes />}>
                <Route element={<JobsPage/>} path="/" exact/>
                <Route element={<JobsPage/>} path="/jobs"/>
                <Route element={<JobDetailsPage/>} path="/job-details"/>
                <Route element={<ProfilePage/>} path="/profile"/>
                <Route element={<TransferPage/>} path="/transfer"/>
                <Route element={<NotificationPage/>} path="/notification"/>
                <Route element={<LeavePage/>} path="/my-leave"/>
            </Route>
            <Route element={<LoginPage/>} path="/login"/>
            <Route element={<ForgetPasswordPage/>} path="/forget-password"/>
            <Route element={<OTPPage/>} path="/otp-confirm"/>
          </Routes>
      </Router>
    </div>
    </div>
  )
}

export default App
