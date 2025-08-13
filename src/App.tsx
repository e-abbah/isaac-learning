import './App.css';

// Recat Router Hooks
import { BrowserRouter, Route, Routes } from 'react-router-dom'

// Context Provider Import
import { PaymentProvider } from './context/PaymentContext';

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
import IndividualPayment from './pages/payment/IndividualPayment';


function App() {

  return (
    <BrowserRouter>
      <PaymentProvider>
        <ScrollToTop />
        <Routes>
          {/* 
          <Route path='/' element={<CourseSelection />} /> */}

<<<<<<< HEAD
        {/* Dashboard page and all its sub pages */}
        <Route path='dashboard' element={<Dashboard />} >
          <Route index element={<MainDashboard />} />
          <Route path='dashboard' element={<MainDashboard />} />
          <Route path='modules' element={<Modules />} />
          <Route path='quiz' element={<Quiz />} />
          <Route path='mock-exam' element={<MockExam />} />
          <Route path='community' element={<Community />} />
          <Route path='notification' element={<Notification />} />

          {/* Profile page and its sub pages */}
          <Route path='profile' element={<Profile />} >
          <Route index element={<ProgressSummary />} />
            <Route path='progress-summary' element={<ProgressSummary />} />
            <Route path='activity' element={<Activity />} />
            <Route path='bookmarks' element={<Bookmarks />} />
            <Route path='settings' element={<Settings />} />
          </Route>

        </Route>

        <Route path='/course' element={<CourseSelection />} />
        <Route path='/price' element={<PricePlan />} />
        <Route path='/payment' element={<IndividualPayment />} />
      </Routes>

=======
          {/* Dashboard page and all its sub pages */}
          <Route path='dashboard' element={<Dashboard />} >
            <Route index element={<MainDashboard />} />
            <Route path='dashboard' element={<MainDashboard />} />
            <Route path='modules' element={<Modules />} />
            <Route path='quiz' element={<Quiz />} />
            <Route path='mock-exam' element={<MockExam />} />
            <Route path='community' element={<Community />} />

            {/* Profile page and its ub pages */}
            <Route path='profile' element={<Profile />} >
              <Route index element={<ProgressSummary />} />
              <Route path='progress-summary' element={<ProgressSummary />} />
              <Route path='activity' element={<Activity />} />
              <Route path='bookmarks' element={<Bookmarks />} />
              <Route path='settings' element={<Settings />} />
            </Route>

            <Route path='notification' element={<Notification />} />
          </Route>

          <Route path='/course' element={<CourseSelection />} />
          <Route path='/dashboard' element={<Dashboard />} />
          <Route path='/price' element={<PricePlan />} />
          <Route path='/payment' element={<IndividualPayment />} />
        </Routes>
      </PaymentProvider>
>>>>>>> 57ebbd1e7c6e18a43f3c6584e902f763ea0eb0aa
    </BrowserRouter>
  )
}

export default App
