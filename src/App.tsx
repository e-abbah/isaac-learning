import './App.css';

// Recat Router Hooks
import { BrowserRouter, Route, Routes } from 'react-router-dom'

// Pages Import
import Dashboard from './pages/dashboard/Dashboard';

import MainDashboard from './pages/dashboard/MainDashboard';
import Modules from './pages/modules/Modules';
import Quiz from './pages/quiz/Quiz';
import MockExam from './pages/mockexams/MockExams';
import Community from './pages/community/Community';

import Profile from './pages/profile/Profile';
import ProgressSummary from './pages/profile/ProgressSummary';
import Activity from './pages/profile/Activity';
import Bookmarks from './pages/profile/Bookmarks';
import Settings from './pages/profile/Settings';

import Notification from './pages/notification/Notification';



import CourseSelection from './pages/payment/CourseSelection';
import PricePlan from './pages/payment/PricePlan';

// Componenets
import ScrollToTop from './components/ScrollToTop';


function App() {

  return (
    <BrowserRouter>
      <ScrollToTop />
      <Routes>

        <Route path='/' element={<CourseSelection />} />

        <Route path='dashboard' element={<Dashboard />} >
          <Route index element={<MainDashboard />} />
          <Route path='dashboard' element={<MainDashboard />} />
          <Route path='modules' element={<Modules />} />
          <Route path='quiz' element={<Quiz />} />
          <Route path='mock-exam' element={<MockExam />} />
          <Route path='community' element={<Community />} />

          <Route path='profile' element={<Profile />} >
            <Route path='progress-summary' element={<ProgressSummary />} />
            <Route path='activity' element={<Activity />} />
            <Route path='bookmarks' element={<Bookmarks />} />
            <Route path='settings' element={<Settings />} />
          </Route>

          <Route path='notification' element={<Notification />} />
        </Route>

        <Route path='/price' element={<PricePlan />} />
      </Routes>

    </BrowserRouter>
  )
}

export default App
