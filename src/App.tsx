


import './App.css'
import Dashboard from './pages/Dashboard'
import { BrowserRouter as Router, Routes, Route, Navigate } from 'react-router-dom'
import ComingSoon from './pages/ComingSoon'
import Layout from './pages/Layout'

function App() {
  return (
    <Router>
      <div className="bg-[#F6F8FA]">
        <Routes>
          <Route path="/" element={<Navigate to="/patients" replace />} />
          <Route element={<Layout />}>
            <Route path="/overview" element={<ComingSoon />} />
            <Route path="/patients" element={<Dashboard />} />
            <Route path="/schedule" element={<ComingSoon />} />
            <Route path="/message" element={<ComingSoon />} />
            <Route path="/transaction" element={<ComingSoon />} />
          </Route>
        </Routes>
      </div>
    </Router>
  )
}

export default App
