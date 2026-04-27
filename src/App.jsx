import React, { useState, useEffect } from 'react'
import { BrowserRouter as Router, Routes, Route, Navigate } from 'react-router-dom'
import Login from './pages/Login'
import Register from './pages/Register'
import Dashboard from './pages/Dashboard'
import Menu from './pages/Menu'
import Orders from './pages/Orders'
import Settings from './pages/Settings'
import Profile from './pages/Profile'
import Header from './components/Header'
import Sidebar from './components/Sidebar'

const App = () => {
  const [isLoggedIn, setIsLoggedIn] = useState(false)
  const [user, setUser] = useState(null)
  const [sidebarOpen, setSidebarOpen] = useState(true)

  useEffect(() => {
    const storedUser = localStorage.getItem('user')
    if (storedUser) {
      setUser(JSON.parse(storedUser))
      setIsLoggedIn(true)
    }
  }, [])

  const handleLogin = (userData) => {
    setUser(userData)
    setIsLoggedIn(true)
    localStorage.setItem('user', JSON.stringify(userData))
  }

  const handleLogout = () => {
    setUser(null)
    setIsLoggedIn(false)
    localStorage.removeItem('user')
  }

  const handleProfileUpdate = (updatedUser) => {
    setUser(updatedUser)
    localStorage.setItem('user', JSON.stringify(updatedUser))
  }

  return (
    <Router>
      {isLoggedIn ? (
        <div className="flex h-screen bg-gray-100">
          <Sidebar isOpen={sidebarOpen} setIsOpen={setSidebarOpen} onLogout={handleLogout} />
          <div className="flex-1 flex flex-col overflow-hidden">
            <Header onLogout={handleLogout} user={user} toggleSidebar={() => setSidebarOpen(!sidebarOpen)} />
            <div className="flex-1 overflow-auto">
              <Routes>
                <Route path="/" element={<Dashboard user={user} />} />
                <Route path="/menu" element={<Menu />} />
                <Route path="/orders" element={<Orders />} />
                <Route path="/profile" element={<Profile user={user} onUpdate={handleProfileUpdate} />} />
                <Route path="/settings" element={<Settings user={user} onUpdate={handleProfileUpdate} />} />
                <Route path="*" element={<Navigate to="/" />} />
              </Routes>
            </div>
          </div>
        </div>
      ) : (
        <Routes>
          <Route path="/login" element={<Login onLogin={handleLogin} />} />
          <Route path="/register" element={<Register onLogin={handleLogin} />} />
          <Route path="*" element={<Navigate to="/login" />} />
        </Routes>
      )}
    </Router>
  )
}

export default App