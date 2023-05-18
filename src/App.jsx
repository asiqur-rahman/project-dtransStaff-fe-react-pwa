import { BrowserRouter, Routes, Route } from "react-router-dom";
import HomePage  from './pages/HomePage'
import AboutUSPage  from './pages/AboutUSPage'
import AboutOrganizationPage  from './pages/AboutOrganizationPage'
import StoryPage  from './pages/StoryPage'
import StudyPage  from './pages/StudyPage'
import NewsBlogsPage  from './pages/NewsBlogsPage'
import EventTypePage  from './pages/EventTypePage'
import CourseTypePage  from './pages/CourseTypePage'
import CourseDetailsPage  from './pages/CourseDetailsPage'
import EventDetailsPage  from './pages/EventDetailsPage'
import NewsBlogsDetailsPage  from './pages/NewsBlogsDetailsPage'
import ContactUSPage  from './pages/ContactUSPage'
import FAQPage  from './pages/FAQPage'
import PrivacyPolicyPage  from './pages/PrivacyPolicyPage'
import TermsAndConditionPage  from './pages/TermsAndConditionPage'

function App() {

  return (
    <div>
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<HomePage />} />
          <Route path="/about-us/:page" element={<AboutUSPage />} />
          <Route path="/about-organization/:page" element={<AboutOrganizationPage />} />
          <Route path="/stories/:page" element={<StoryPage />} />
          <Route path="/study/:page" element={<StudyPage />} />
          <Route path="/course-type/:id" element={<CourseTypePage />} />
          <Route path="/research/:page" element={<StudyPage />} />
          <Route path="/stories/:page" element={<HomePage />} />
          <Route path="/event-type/:id" element={<EventTypePage />} />
          <Route path="/news-blogs/:page" element={<NewsBlogsPage />} />
          <Route path="/news-and-blog-details/:id" element={<NewsBlogsDetailsPage />} />
          <Route path="/registration/:page" element={<HomePage />} />
          <Route path="/course-details/:id" element={<CourseDetailsPage />} />
          <Route path="/event-details/:id" element={<EventDetailsPage />} />
          <Route path="/contact-us" element={<ContactUSPage />} />
          <Route path="/faq" element={<FAQPage />} />
          <Route path="/privacy-policy" element={<PrivacyPolicyPage />} />
          <Route path="/terms-and-condition" element={<TermsAndConditionPage />} />
        </Routes>
      </BrowserRouter>
    </div>
  )
}

export default App
