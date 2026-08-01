import React from 'react'
import { BrowserRouter, Route, Routes } from 'react-router-dom'
import Dashboard from './pages/Dashboard'
import Register from './pages/Register'
import Login from './pages/Login'
import UploadReport from './pages/UploadReport'
import ReportDetails from './pages/ReportDetails'
import ProtectedRoute from './components/ProtectedRoute'
import Reports from "./pages/Reports"
const App = () => {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Login/>}/>
        <Route path='/register' element={<Register/>}/>
        <Route path='/dashboard' element={
            <ProtectedRoute>
              <Dashboard />
            </ProtectedRoute>
        }/>
        <Route path='/upload' element={
            <ProtectedRoute>
              <UploadReport />
            </ProtectedRoute>
        }/>
        <Route path='/report/:id' element={
            <ProtectedRoute>
              <ReportDetails />
            </ProtectedRoute>
        }/>
        <Route
        path="/reports"
        element={<Reports />}
        />
        <Route
        path="/report/:id"
        element={<ReportDetails />}
        />
      </Routes>
    </BrowserRouter>
  )
}

export default App
