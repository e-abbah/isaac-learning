import './App.css'
import { BrowserRouter, Route, Routes } from 'react-router-dom';

// Pages Import
import CourseSelection from './pages/payment/CourseSelection';
import Dashboard from './pages/dashboard/Dashboard';

function App() {

  return (
    <BrowserRouter>
      <Routes>

        <Route path='/' element={<CourseSelection />} />

        <Route path='/dashboard' element={<Dashboard />} />


      </Routes>

    </BrowserRouter>
  )
}

export default App
