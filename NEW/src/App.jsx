import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import HomePage  from './pages/HomePage'
import LoginPage  from './pages/LoginPage'
import JobsPage  from './pages/JobsPage'
import JobDetailsPage  from './pages/JobDetailsPage'
import ProfilePage  from './pages/ProfilePage'
import NotificationPage  from './pages/NotificationPage'
import PrivateRoutes from './utils/PrivateRoutes'

function App() {

  return (
    <div>
      <div className="App">
        <Router>
          <Routes>
            <Route element={<PrivateRoutes />}>
                <Route element={<HomePage/>} path="/" exact/>
                <Route element={<JobsPage/>} path="/jobs"/>
                <Route element={<JobDetailsPage/>} path="/job-details"/>
                <Route element={<ProfilePage/>} path="/profile"/>
                <Route element={<NotificationPage/>} path="/notification"/>
            </Route>
            <Route element={<LoginPage/>} path="/login"/>
          </Routes>
      </Router>
    </div>
    </div>
  )
}

export default App
