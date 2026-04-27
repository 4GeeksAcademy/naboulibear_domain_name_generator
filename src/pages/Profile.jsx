import React, { useState } from 'react'

const Profile = ({ user, onUpdate }) => {
  const [isEditing, setIsEditing] = useState(false)
  const [formData, setFormData] = useState(user)

  const handleChange = (e) => {
    const { name, value } = e.target
    setFormData(prev => ({ ...prev, [name]: value }))
  }

  const handleSave = () => {
    onUpdate(formData)
    setIsEditing(false)
  }

  return (
    <div className="p-8">
      <h2 className="text-3xl font-bold mb-6">👤 My Profile</h2>

      <div className="grid grid-cols-1 lg:grid-cols-3 gap-6">
        {/* Profile Picture */}
        <div className="bg-white rounded-lg shadow-lg p-6 flex flex-col items-center">
          <div className="w-32 h-32 bg-gradient-to-br from-red-500 to-orange-500 rounded-full flex items-center justify-center text-white text-5xl mb-4">
            <i className="fas fa-user"></i>
          </div>
          <h3 className="text-xl font-bold">{user?.name}</h3>
          <p className="text-gray-600">{user?.email}</p>
          <div className="mt-4 pt-4 border-t w-full text-center">
            <p className="text-sm text-gray-600">Loyalty Points</p>
            <p className="text-2xl font-bold text-yellow-500">{user?.loyaltyPoints}</p>
          </div>
        </div>

        {/* Profile Details */}
        <div className="lg:col-span-2 bg-white rounded-lg shadow-lg p-6">
          <div className="flex justify-between items-center mb-6">
            <h3 className="text-xl font-bold">Personal Information</h3>
            <button
              onClick={() => setIsEditing(!isEditing)}
              className="bg-red-600 text-white px-4 py-2 rounded hover:bg-red-700 transition"
            >
              {isEditing ? 'Cancel' : 'Edit Profile'}
            </button>
          </div>

          <div className="space-y-4">
            <div>
              <label className="block text-gray-700 font-semibold mb-2">Full Name</label>
              <input
                type="text"
                name="name"
                value={formData.name}
                onChange={handleChange}
                disabled={!isEditing}
                className="w-full px-4 py-2 border border-gray-300 rounded-lg disabled:bg-gray-100"
              />
            </div>

            <div>
              <label className="block text-gray-700 font-semibold mb-2">Email</label>
              <input
                type="email"
                name="email"
                value={formData.email}
                onChange={handleChange}
                disabled={!isEditing}
                className="w-full px-4 py-2 border border-gray-300 rounded-lg disabled:bg-gray-100"
              />
            </div>

            <div>
              <label className="block text-gray-700 font-semibold mb-2">Phone</label>
              <input
                type="tel"
                name="phone"
                value={formData.phone}
                onChange={handleChange}
                disabled={!isEditing}
                className="w-full px-4 py-2 border border-gray-300 rounded-lg disabled:bg-gray-100"
              />
            </div>

            <div>
              <label className="block text-gray-700 font-semibold mb-2">Address</label>
              <textarea
                name="address"
                value={formData.address}
                onChange={handleChange}
                disabled={!isEditing}
                className="w-full px-4 py-2 border border-gray-300 rounded-lg disabled:bg-gray-100"
                rows="3"
              />
            </div>

            <div>
              <label className="block text-gray-700 font-semibold mb-2">Preferences</label>
              <input
                type="text"
                name="preferences"
                value={formData.preferences}
                onChange={handleChange}
                disabled={!isEditing}
                placeholder="e.g., No spicy, allergies, etc."
                className="w-full px-4 py-2 border border-gray-300 rounded-lg disabled:bg-gray-100"
              />
            </div>

            {isEditing && (
              <button
                onClick={handleSave}
                className="w-full bg-green-600 text-white py-2 rounded font-bold hover:bg-green-700 transition"
              >
                Save Changes
              </button>
            )}
          </div>
        </div>
      </div>
    </div>
  )
}

export default Profile