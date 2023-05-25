import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import HomePage  from './pages/HomePage'
import LoginPage  from './pages/LoginPage'
import JobsPage  from './pages/JobsPage'
import JobDetailsPage  from './pages/JobDetailsPage'
import ForgetPasswordPage  from './pages/ForgetPasswordPage'
import OTPPage  from './pages/OTPPage'
import ProfilePage  from './pages/ProfilePage'
import NotificationPage  from './pages/NotificationPage'
import PrivateRoutes from './utils/PrivateRoutes'
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';

function App() {

  return (
    <div>
      <div className="App">
        <ToastContainer position="bottom-center"/>
        <Router>
          <Routes>
            <Route element={<PrivateRoutes />}>
                <Route element={<JobsPage/>} path="/" exact/>
                <Route element={<JobsPage/>} path="/jobs"/>
                <Route element={<JobDetailsPage/>} path="/job-details"/>
                <Route element={<ProfilePage/>} path="/profile"/>
                <Route element={<NotificationPage/>} path="/notification"/>
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
