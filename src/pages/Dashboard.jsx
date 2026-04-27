import React from 'react'

const Dashboard = ({ user }) => {
  return (
    <div className="p-8">
      <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-8">
        {/* Welcome Card */}
        <div className="bg-gradient-to-br from-red-500 to-orange-500 text-white rounded-lg shadow-lg p-6">
          <h2 className="text-2xl font-bold mb-2">Welcome, {user?.name}! 👋</h2>
          <p className="text-orange-100">Ready to order some delicious Asian food?</p>
        </div>

        {/* Loyalty Points */}
        <div className="bg-white rounded-lg shadow-lg p-6">
          <div className="flex items-center justify-between">
            <div>
              <p className="text-gray-600 text-sm">Loyalty Points</p>
              <p className="text-3xl font-bold text-red-600">{user?.loyaltyPoints || 0}</p>
              <p className="text-gray-500 text-xs mt-1">Earn points on every order</p>
            </div>
            <i className="fas fa-star text-4xl text-yellow-400"></i>
          </div>
        </div>

        {/* Quick Stats */}
        <div className="bg-white rounded-lg shadow-lg p-6">
          <div className="flex items-center justify-between">
            <div>
              <p className="text-gray-600 text-sm">Total Orders</p>
              <p className="text-3xl font-bold text-green-600">12</p>
              <p className="text-gray-500 text-xs mt-1">This month</p>
            </div>
            <i className="fas fa-shopping-bag text-4xl text-blue-400"></i>
          </div>
        </div>
      </div>

      {/* Quick Links */}
      <div className="bg-white rounded-lg shadow-lg p-6">
        <h3 className="text-xl font-bold text-gray-800 mb-4">Quick Links</h3>
        <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
          <a href="/menu" className="bg-gradient-to-br from-red-500 to-orange-500 text-white p-4 rounded-lg text-center hover:shadow-lg transition">
            <i className="fas fa-utensils block mb-2 text-2xl"></i>
            <span className="font-bold">Browse Menu</span>
          </a>
          <a href="/orders" className="bg-gradient-to-br from-blue-500 to-blue-600 text-white p-4 rounded-lg text-center hover:shadow-lg transition">
            <i className="fas fa-history block mb-2 text-2xl"></i>
            <span className="font-bold">My Orders</span>
          </a>
          <a href="/profile" className="bg-gradient-to-br from-green-500 to-green-600 text-white p-4 rounded-lg text-center hover:shadow-lg transition">
            <i className="fas fa-user block mb-2 text-2xl"></i>
            <span className="font-bold">Profile</span>
          </a>
          <a href="/settings" className="bg-gradient-to-br from-purple-500 to-purple-600 text-white p-4 rounded-lg text-center hover:shadow-lg transition">
            <i className="fas fa-cog block mb-2 text-2xl"></i>
            <span className="font-bold">Settings</span>
          </a>
        </div>
      </div>

      {/* Featured Dishes */}
      <div className="mt-8 bg-white rounded-lg shadow-lg p-6">
        <h3 className="text-xl font-bold text-gray-800 mb-4">🌟 Featured This Week</h3>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
          {[
            { name: 'Spicy Mongolian Beef', price: '$15.99', image: 'https://images.unsplash.com/photo-1546069901-ba9599a7e63c?w=400&h=300&fit=crop' },
            { name: 'Green Tea Ice Cream', price: '$5.99', image: 'https://images.unsplash.com/photo-1563805042-7684c019e0e0?w=400&h=300&fit=crop' },
            { name: 'Crispy Duck', price: '$16.99', image: 'https://images.unsplash.com/photo-1546069901-ba9599a7e63c?w=400&h=300&fit=crop' }
          ].map((item, index) => (
            <div key={index} className="rounded-lg overflow-hidden shadow hover:shadow-lg transition">
              <img src={item.image} alt={item.name} className="w-full h-40 object-cover" />
              <div className="p-3">
                <p className="font-bold text-gray-800">{item.name}</p>
                <p className="text-red-600 font-bold">{item.price}</p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  )
}

export default Dashboard