import React from 'react'
import { Link, useNavigate } from 'react-router-dom'

const Header = ({ onLogout, user, toggleSidebar }) => {
  const navigate = useNavigate()

  const handleLogout = () => {
    onLogout()
    navigate('/login')
  }

  return (
    <header className="bg-white border-b border-gray-200 shadow-sm sticky top-0 z-40">
      <div className="flex items-center justify-between px-6 py-4">
        <div className="flex items-center gap-4">
          <button onClick={toggleSidebar} className="lg:hidden text-gray-600 hover:text-gray-900 text-2xl">
            <i className="fas fa-bars"></i>
          </button>
          <h1 className="text-2xl font-bold text-gray-800 hidden sm:block">Asian Grill</h1>
        </div>

        <div className="flex items-center gap-6">
          {/* Search */}
          <div className="hidden md:flex items-center bg-gray-100 rounded-lg px-4 py-2 flex-1 max-w-xs">
            <i className="fas fa-search text-gray-400 mr-2"></i>
            <input
              type="text"
              placeholder="Search..."
              className="bg-transparent outline-none w-full text-sm"
            />
          </div>

          {/* Notifications */}
          <button className="relative text-gray-600 hover:text-red-600 text-xl">
            <i className="fas fa-bell"></i>
            <span className="absolute -top-2 -right-2 bg-red-600 text-white text-xs rounded-full w-5 h-5 flex items-center justify-center">3</span>
          </button>

          {/* User Menu */}
          <div className="flex items-center gap-3 pl-6 border-l border-gray-200">
            <div className="w-10 h-10 bg-gradient-to-br from-red-500 to-orange-500 rounded-full flex items-center justify-center text-white">
              <i className="fas fa-user"></i>
            </div>
            <div className="hidden sm:block">
              <p className="font-semibold text-sm text-gray-800">{user?.name}</p>
              <p className="text-xs text-gray-600">{user?.email}</p>
            </div>
          </div>

          {/* Dropdown Menu */}
          <div className="relative group">
            <button className="text-gray-600 hover:text-gray-900">
              <i className="fas fa-chevron-down"></i>
            </button>
            <div className="absolute right-0 mt-2 w-48 bg-white rounded-lg shadow-lg opacity-0 invisible group-hover:opacity-100 group-hover:visible transition z-50">
              <Link to="/profile" className="block px-4 py-2 text-gray-700 hover:bg-gray-100">
                <i className="fas fa-user mr-2"></i>Profile
              </Link>
              <Link to="/settings" className="block px-4 py-2 text-gray-700 hover:bg-gray-100">
                <i className="fas fa-cog mr-2"></i>Settings
              </Link>
              <hr className="my-2" />
              <button
                onClick={handleLogout}
                className="w-full text-left px-4 py-2 text-red-600 hover:bg-red-50"
              >
                <i className="fas fa-sign-out-alt mr-2"></i>Logout
              </button>
            </div>
          </div>
        </div>
      </div>
    </header>
  )
}

export default Header