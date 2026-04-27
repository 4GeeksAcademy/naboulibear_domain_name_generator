import React, { useState } from 'react'
import { useNavigate, Link } from 'react-router-dom'

const Login = ({ onLogin }) => {
  const [email, setEmail] = useState('')
  const [password, setPassword] = useState('')
  const [error, setError] = useState('')
  const [loading, setLoading] = useState(false)
  const navigate = useNavigate()

  const handleSubmit = async (e) => {
    e.preventDefault()
    setError('')
    setLoading(true)

    if (!email || !password) {
      setError('Please fill in all fields')
      setLoading(false)
      return
    }

    // Simulate login
    setTimeout(() => {
      const userData = {
        id: 1,
        email,
        name: email.split('@')[0],
        phone: '+1-234-567-8900',
        address: '123 Main St, City, State',
        preferences: 'No spicy',
        loyaltyPoints: 150
      }
      onLogin(userData)
      setLoading(false)
      navigate('/')
    }, 1000)
  }

  return (
    <div className="min-h-screen bg-gradient-to-br from-red-600 to-orange-600 flex items-center justify-center p-4">
      <div className="bg-white rounded-lg shadow-2xl p-8 w-full max-w-md">
        <div className="text-center mb-8">
          <i className="fas fa-utensils text-4xl text-red-600 mb-4"></i>
          <h1 className="text-3xl font-bold text-gray-800">Asian Grill</h1>
          <p className="text-gray-600 mt-2">Premium Asian Cuisine</p>
        </div>

        <form onSubmit={handleSubmit} className="space-y-4">
          {error && (
            <div className="bg-red-100 border border-red-400 text-red-700 px-4 py-3 rounded">
              {error}
            </div>
          )}

          <div>
            <label className="block text-gray-700 font-semibold mb-2">Email</label>
            <input
              type="email"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-red-600"
              placeholder="your@email.com"
            />
          </div>

          <div>
            <label className="block text-gray-700 font-semibold mb-2">Password</label>
            <input
              type="password"
              value={password}
              onChange={(e) => setPassword(e.target.value)}
              className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-red-600"
              placeholder="••••••••"
            />
          </div>

          <button
            type="submit"
            disabled={loading}
            className="w-full bg-gradient-to-r from-red-600 to-orange-600 text-white py-2 rounded-lg font-bold hover:from-red-700 hover:to-orange-700 transition disabled:opacity-50"
          >
            {loading ? 'Logging in...' : 'Login'}
          </button>
        </form>

        <p className="text-center text-gray-600 mt-4">
          Don't have an account? <Link to="/register" className="text-red-600 font-bold hover:underline">Register</Link>
        </p>

        <hr className="my-6" />

        <div className="text-center text-sm text-gray-500">
          <p className="mb-2"><strong>Demo Credentials:</strong></p>
          <p>Email: demo@example.com</p>
          <p>Password: password123</p>
        </div>
      </div>
    </div>
  )
}

export default Login