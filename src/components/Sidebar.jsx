import React from 'react'
import { Link, useLocation } from 'react-router-dom'

const Sidebar = ({ isOpen, setIsOpen, onLogout }) => {
  const location = useLocation()

  const menuItems = [
    { label: 'Dashboard', icon: 'fas fa-home', path: '/' },
    { label: 'Browse Menu', icon: 'fas fa-utensils', path: '/menu' },
    { label: 'My Orders', icon: 'fas fa-receipt', path: '/orders' },
    { label: 'Profile', icon: 'fas fa-user', path: '/profile' },
    { label: 'Settings', icon: 'fas fa-cog', path: '/settings' }
  ]

  const isActive = (path) => location.pathname === path

  return (
    <>
      {/* Mobile Overlay */}
      {isOpen && (
        <div
          className="fixed inset-0 bg-black bg-opacity-50 lg:hidden z-30"
          onClick={() => setIsOpen(false)}
        ></div>
      )}

      {/* Sidebar */}
      <aside
        className={`fixed left-0 top-0 h-screen w-64 bg-gradient-to-br from-red-700 to-orange-700 text-white shadow-lg transform transition-transform duration-300 z-40 lg:translate-x-0 lg:static ${
          isOpen ? 'translate-x-0' : '-translate-x-full'
        }`}
      >
        {/* Logo */}
        <div className="p-6 border-b border-orange-600">
          <div className="flex items-center gap-3">
            <i className="fas fa-utensils text-2xl"></i>
            <h2 className="text-2xl font-bold">Asian Grill</h2>
          </div>
          <p className="text-sm text-orange-200 mt-2">Order Your Favorites</p>
        </div>

        {/* Menu */}
        <nav className="p-6 space-y-2">
          {menuItems.map((item) => (
            <Link
              key={item.path}
              to={item.path}
              onClick={() => setIsOpen(false)}
              className={`flex items-center gap-3 px-4 py-3 rounded-lg transition ${
                isActive(item.path)
                  ? 'bg-orange-600 text-white'
                  : 'text-orange-100 hover:bg-orange-600 hover:text-white'
              }`}
            >
              <i className={`${item.icon} w-5`}></i>
              <span>{item.label}</span>
            </Link>
          ))}
        </nav>

        {/* Bottom Section */}
        <div className="absolute bottom-0 left-0 right-0 p-6 border-t border-orange-600">
          <div className="bg-orange-600 bg-opacity-50 rounded-lg p-4 mb-4">
            <p className="text-sm text-orange-100 mb-2">⭐ Loyalty Points</p>
            <p className="text-2xl font-bold">150</p>
          </div>
          <button
            onClick={onLogout}
            className="w-full bg-red-600 text-white py-2 rounded-lg hover:bg-red-700 transition font-semibold"
          >
            <i className="fas fa-sign-out-alt mr-2"></i>Logout
          </button>
        </div>
      </aside>
    </>
  )
}

export default Sidebar