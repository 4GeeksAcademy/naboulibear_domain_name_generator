import React, { useState } from 'react'

const Settings = ({ user, onUpdate }) => {
  const [settings, setSettings] = useState({
    emailNotifications: true,
    smsNotifications: false,
    promotionalEmails: true,
    orderUpdates: true,
    darkMode: false,
    language: 'english'
  })

  const [saveMessage, setSaveMessage] = useState('')

  const handleToggle = (key) => {
    setSettings(prev => ({ ...prev, [key]: !prev[key] }))
  }

  const handleSave = () => {
    setSaveMessage('✅ Settings saved successfully!')
    setTimeout(() => setSaveMessage(''), 3000)
  }

  return (
    <div className="p-8 max-w-2xl">
      <h2 className="text-3xl font-bold mb-6">⚙️ Settings</h2>

      {saveMessage && (
        <div className="bg-green-100 border border-green-400 text-green-700 px-4 py-3 rounded mb-6">
          {saveMessage}
        </div>
      )}

      {/* Notification Settings */}
      <div className="bg-white rounded-lg shadow-lg p-6 mb-6">
        <h3 className="text-xl font-bold mb-4 pb-4 border-b">🔔 Notification Settings</h3>
        
        <div className="space-y-4">
          <div className="flex items-center justify-between">
            <div>
              <p className="font-semibold">Email Notifications</p>
              <p className="text-gray-600 text-sm">Receive order updates via email</p>
            </div>
            <label className="relative inline-flex items-center cursor-pointer">
              <input
                type="checkbox"
                checked={settings.emailNotifications}
                onChange={() => handleToggle('emailNotifications')}
                className="sr-only peer"
              />
              <div className="w-11 h-6 bg-gray-200 peer-focus:outline-none peer-focus:ring-4 peer-focus:ring-red-300 rounded-full peer peer-checked:after:translate-x-full peer-checked:after:border-white after:content-[''] after:absolute after:top-[2px] after:left-[2px] after:bg-white after:border-gray-300 after:border after:rounded-full after:h-5 after:w-5 after:transition-all peer-checked:bg-red-600"></div>
            </label>
          </div>

          <div className="flex items-center justify-between">
            <div>
              <p className="font-semibold">SMS Notifications</p>
              <p className="text-gray-600 text-sm">Receive SMS updates for orders</p>
            </div>
            <label className="relative inline-flex items-center cursor-pointer">
              <input
                type="checkbox"
                checked={settings.smsNotifications}
                onChange={() => handleToggle('smsNotifications')}
                className="sr-only peer"
              />
              <div className="w-11 h-6 bg-gray-200 peer-focus:outline-none peer-focus:ring-4 peer-focus:ring-red-300 rounded-full peer peer-checked:after:translate-x-full peer-checked:after:border-white after:content-[''] after:absolute after:top-[2px] after:left-[2px] after:bg-white after:border-gray-300 after:border after:rounded-full after:h-5 after:w-5 after:transition-all peer-checked:bg-red-600"></div>
            </label>
          </div>

          <div className="flex items-center justify-between">
            <div>
              <p className="font-semibold">Promotional Emails</p>
              <p className="text-gray-600 text-sm">Receive special offers and promotions</p>
            </div>
            <label className="relative inline-flex items-center cursor-pointer">
              <input
                type="checkbox"
                checked={settings.promotionalEmails}
                onChange={() => handleToggle('promotionalEmails')}
                className="sr-only peer"
              />
              <div className="w-11 h-6 bg-gray-200 peer-focus:outline-none peer-focus:ring-4 peer-focus:ring-red-300 rounded-full peer peer-checked:after:translate-x-full peer-checked:after:border-white after:content-[''] after:absolute after:top-[2px] after:left-[2px] after:bg-white after:border-gray-300 after:border after:rounded-full after:h-5 after:w-5 after:transition-all peer-checked:bg-red-600"></div>
            </label>
          </div>

          <div className="flex items-center justify-between">
            <div>
              <p className="font-semibold">Order Updates</p>
              <p className="text-gray-600 text-sm">Get notified when your order status changes</p>
            </div>
            <label className="relative inline-flex items-center cursor-pointer">
              <input
                type="checkbox"
                checked={settings.orderUpdates}
                onChange={() => handleToggle('orderUpdates')}
                className="sr-only peer"
              />
              <div className="w-11 h-6 bg-gray-200 peer-focus:outline-none peer-focus:ring-4 peer-focus:ring-red-300 rounded-full peer peer-checked:after:translate-x-full peer-checked:after:border-white after:content-[''] after:absolute after:top-[2px] after:left-[2px] after:bg-white after:border-gray-300 after:border after:rounded-full after:h-5 after:w-5 after:transition-all peer-checked:bg-red-600"></div>
            </label>
          </div>
        </div>
      </div>

      {/* Preferences */}
      <div className="bg-white rounded-lg shadow-lg p-6 mb-6">
        <h3 className="text-xl font-bold mb-4 pb-4 border-b">🎨 Preferences</h3>
        
        <div className="space-y-4">
          <div>
            <label className="block text-gray-700 font-semibold mb-2">Language</label>
            <select
              value={settings.language}
              onChange={(e) => setSettings(prev => ({ ...prev, language: e.target.value }))}
              className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-red-600"
            >
              <option value="english">English</option>
              <option value="spanish">Spanish</option>
              <option value="chinese">Chinese</option>
              <option value="japanese">Japanese</option>
            </select>
          </div>

          <div className="flex items-center justify-between">
            <div>
              <p className="font-semibold">Dark Mode</p>
              <p className="text-gray-600 text-sm">Enable dark theme</p>
            </div>
            <label className="relative inline-flex items-center cursor-pointer">
              <input
                type="checkbox"
                checked={settings.darkMode}
                onChange={() => handleToggle('darkMode')}
                className="sr-only peer"
              />
              <div className="w-11 h-6 bg-gray-200 peer-focus:outline-none peer-focus:ring-4 peer-focus:ring-red-300 rounded-full peer peer-checked:after:translate-x-full peer-checked:after:border-white after:content-[''] after:absolute after:top-[2px] after:left-[2px] after:bg-white after:border-gray-300 after:border after:rounded-full after:h-5 after:w-5 after:transition-all peer-checked:bg-red-600"></div>
            </label>
          </div>
        </div>
      </div>

      {/* Account */}
      <div className="bg-white rounded-lg shadow-lg p-6">
        <h3 className="text-xl font-bold mb-4 pb-4 border-b">🔐 Account</h3>
        
        <div className="space-y-3">
          <button className="w-full bg-blue-600 text-white py-2 rounded hover:bg-blue-700 transition">
            Change Password
          </button>
          <button className="w-full bg-orange-600 text-white py-2 rounded hover:bg-orange-700 transition">
            Download My Data
          </button>
          <button className="w-full bg-red-600 text-white py-2 rounded hover:bg-red-700 transition">
            Delete Account
          </button>
        </div>
      </div>

      <button
        onClick={handleSave}
        className="w-full mt-6 bg-gradient-to-r from-red-600 to-orange-600 text-white py-3 rounded-lg font-bold hover:from-red-700 hover:to-orange-700 transition"
      >
        Save All Settings
      </button>
    </div>
  )
}

export default Settings