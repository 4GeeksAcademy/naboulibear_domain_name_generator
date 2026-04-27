import React from 'react'

const Hero = ({ searchTerm, setSearchTerm }) => {
  return (
    <section className="bg-gradient-to-r from-orange-400 via-red-400 to-yellow-400 text-white py-12 px-4">
      <div className="max-w-4xl mx-auto text-center">
        <h2 className="text-4xl font-bold mb-4">Welcome to Asian Grill</h2>
        <p className="text-lg mb-8 text-gray-100">Authentic Asian cuisine delivered to your door</p>
        <div className="relative">
          <input
            type="text"
            placeholder="Search for dishes..."
            value={searchTerm}
            onChange={(e) => setSearchTerm(e.target.value)}
            className="w-full px-6 py-3 rounded-lg text-gray-800 focus:outline-none focus:ring-4 focus:ring-red-600"
          />
          <i className="fas fa-search absolute right-4 top-4 text-gray-400"></i>
        </div>
      </div>
    </section>
  )
}

export default Hero