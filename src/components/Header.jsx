import React from 'react'

const Header = () => {
  return (
    <header className="bg-gradient-to-r from-red-600 to-orange-600 text-white shadow-lg sticky top-0 z-50">
      <div className="max-w-7xl mx-auto px-4 py-4 flex items-center justify-between">
        <div className="flex items-center gap-3">
          <i className="fas fa-utensils text-2xl"></i>
          <h1 className="text-3xl font-bold">Asian Grill</h1>
        </div>
        <p className="hidden md:block text-orange-100">Premium Asian Cuisine</p>
      </div>
    </header>
  )
}

export default Header