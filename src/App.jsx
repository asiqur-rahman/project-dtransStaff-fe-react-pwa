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
import * as common from './utils/common.utils';
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
    error,
    loading
  } = usePushNotifications();
  
  const isConsentGranted = userConsent === "granted";
  
  useEffect(()=>{
    const userDetails = common.getUser();
    const pushNotificationSubscribed = userDetails.pushNotificationSubscribed;
    window.SpinnerHide()
    if((pushNotificationSupported || !isConsentGranted) && common.isUserLogedIn() && !pushNotificationSubscribed){
      onClickAskUserPermission();
    }
  },[isConsentGranted,common.isUserLogedIn()])

  useEffect(()=>{
    if((pushNotificationSupported || isConsentGranted || !userSubscription) && common.isUserLogedIn()){
      onClickSusbribeToPushNotification();
    }
  },[pushNotificationSupported,isConsentGranted])

  useEffect(()=>{
    if((userSubscription || !pushServerSubscriptionId) && common.isUserLogedIn()){
      onClickSendSubscriptionToPushServer();
      var userDetails = common.getUser();
      userDetails.pushNotificationSubscribed = true;
      common.setSession(userDetails);
    }
  },[userSubscription,pushServerSubscriptionId])

  useEffect(()=>{
    if(pushServerSubscriptionId && common.isUserLogedIn()){
      onClickSendNotification();
    }
  },[pushServerSubscriptionId])
  
  return (
    <div>
      <Spinner/>
      <div className="App">
        <ToastContainer position="top-center"/>
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
      </Router>
    </div>
    </div>
  )
}

export default App
