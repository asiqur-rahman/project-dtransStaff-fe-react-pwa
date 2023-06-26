import { useEffect } from 'react';
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import HomePage  from './pages/HomePage'
import LoginPage  from './pages/LoginPage'
import JobsPage  from './pages/JobsPage'
import JobDetailsPage  from './pages/JobDetailsPage'
import JobRecordsPage  from './pages/JobRecordsPage'
import ForgetPasswordPage  from './pages/ForgetPasswordPage'
import OTPPage  from './pages/OTPPage'
import ProfilePage  from './pages/ProfilePage'
import NotificationPage  from './pages/NotificationPage'
import NotificationDetailsPage  from './pages/NotificationDetailsPage'
import LeavePage  from './pages/LeavePage'
import ApplyLeavePage  from './pages/ApplyLeavePage'
import SalaryPage  from './pages/SalaryPage'
import TransferPage  from './pages/TransferPage'
import FeedbackPage  from './pages/FeedbackPage'
import PrivateRoutes from './utils/PrivateRoutes'
import Spinner from './utils/Spinner'
import { ToastContainer, toast } from 'react-toastify';
import usePushNotifications from "./pushNotification/usePushNotifications";
import 'react-toastify/dist/ReactToastify.css';

function App() {
  const {
    userConsent,
    pushNotificationSupported,
    userSubscription,
    onClickAskUserPermission,
    onClickSusbribeToPushNotification,
    onClickSendSubscriptionToPushServer,
    pushServerSubscriptionId,
    onClickSendNotification,
    error
  } = usePushNotifications();

  const isConsentGranted = userConsent === "granted";

  return (
    <div>
      {/* <Spinner/> */}
      <div className="App">
        {/* <ToastContainer position="top-center"/>
        <Router>
          <Routes>
            <Route element={<PrivateRoutes />}>
                <Route element={<JobsPage/>} path="/" exact/>
                <Route element={<JobsPage/>} path="/jobs"/>
                <Route element={<JobDetailsPage/>} path="/job-details"/>
                <Route element={<JobRecordsPage/>} path="/job-records"/>
                <Route element={<ProfilePage/>} path="/profile"/>
                <Route element={<TransferPage/>} path="/transfer"/>
                <Route element={<NotificationPage/>} path="/notification"/>
                <Route element={<NotificationDetailsPage/>} path="/notification-details"/>
                <Route element={<LeavePage/>} path="/my-leave"/>
                <Route element={<ApplyLeavePage/>} path="/apply-leave"/>
                <Route element={<SalaryPage/>} path="/salary"/>
                <Route element={<FeedbackPage/>} path="/feedback"/>
            </Route>
            <Route element={<LoginPage/>} path="/login"/>
            <Route element={<ForgetPasswordPage/>} path="/forget-password"/>
            <Route element={<OTPPage/>} path="/otp-confirm"/>
          </Routes>
      </Router> */}

      <button disabled={!pushNotificationSupported || isConsentGranted} onClick={onClickAskUserPermission}>
        {isConsentGranted ? "Consent granted" : " Ask user permission"}
      </button>

      <button disabled={!pushNotificationSupported || !isConsentGranted || userSubscription} onClick={onClickSusbribeToPushNotification}>
        {userSubscription ? "Push subscription created" : "Create Notification subscription"}
      </button>

      <button disabled={!userSubscription || pushServerSubscriptionId} onClick={onClickSendSubscriptionToPushServer}>
        {pushServerSubscriptionId ? "Subscrption sent to the server" : "Send subscription to push server"}
      </button>

      {pushServerSubscriptionId && (
        <div>
          <p>The server accepted the push subscrption!</p>
          <button onClick={onClickSendNotification}>Send a notification</button>
        </div>
      )}
    </div>
    </div>
  )
}

export default App
