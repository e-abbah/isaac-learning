import './App.css';

// Pages Import
import Dashboard from './pages/dashboard/Dashboard';
import { BrowserRouter, Route, Routes } from 'react-router-dom'
import CourseSelection from './pages/payment/CourseSelection'
import PricePlan from './pages/payment/PricePlan'
import IndividualPayment from './pages/payment/IndividualPayment';


function App() {

  return (
    <BrowserRouter>
      <Routes>
        <Route path='/course' element={<CourseSelection />} />
        <Route path='/dashboard' element={<Dashboard />} />
        <Route path='/price' element={<PricePlan />} />
        <Route path='/payment' element={<IndividualPayment />} />
      </Routes>

    </BrowserRouter>
  )
}

export default App
