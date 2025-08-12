import './App.css';

// Pages Import
import Dashboard from './pages/dashboard/Dashboard';
import { BrowserRouter, Route, Routes } from 'react-router-dom'
import CourseSelection from './pages/payment/CourseSelection'
import PricePlan from './pages/payment/PricePlan'


function App() {

  return (
    <BrowserRouter>
      <Routes>

        <Route path='/' element={<CourseSelection />} />

        <Route path='/dashboard' element={<Dashboard />} />


        <Route path='/price' element={<PricePlan />} />
      </Routes>

    </BrowserRouter>
  )
}

export default App
