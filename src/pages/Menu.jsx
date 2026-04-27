import React, { useState } from 'react'

const Menu = () => {
  const [cart, setCart] = useState([])
  const [searchTerm, setSearchTerm] = useState('')
  const [selectedCategory, setSelectedCategory] = useState('all')

  const menuItems = [
    { id: 1, name: 'Spring Rolls', category: 'appetizers', price: 5.99, image: 'https://images.unsplash.com/photo-1609501676725-7186f017a4b5?w=400&h=300&fit=crop' },
    { id: 2, name: 'Chicken Satay', category: 'appetizers', price: 7.99, image: 'https://images.unsplash.com/photo-1555939594-58d7cb561455?w=400&h=300&fit=crop' },
    { id: 3, name: 'Beef Teriyaki', category: 'mains', price: 14.99, image: 'https://images.unsplash.com/photo-1540189549336-e6e99c3679fe?w=400&h=300&fit=crop' },
    { id: 4, name: 'Chicken Pad Thai', category: 'mains', price: 12.99, image: 'https://images.unsplash.com/photo-1626082927389-6cd097cdc6ec?w=400&h=300&fit=crop' },
    { id: 5, name: 'Vegetable Stir Fry', category: 'mains', price: 10.99, image: 'https://images.unsplash.com/photo-1609501676725-7186f017a4b5?w=400&h=300&fit=crop' },
    { id: 6, name: 'Mongolian Beef', category: 'specialties', price: 15.99, image: 'https://images.unsplash.com/photo-1546069901-ba9599a7e63c?w=400&h=300&fit=crop' },
    { id: 7, name: 'Kung Pao Chicken', category: 'specialties', price: 13.99, image: 'https://images.unsplash.com/photo-1609501676725-7186f017a4b5?w=400&h=300&fit=crop' },
    { id: 8, name: 'Mango Sticky Rice', category: 'desserts', price: 6.99, image: 'https://images.unsplash.com/photo-1586190203458-43b2c5a3f1ab?w=400&h=300&fit=crop' },
    { id: 9, name: 'Green Tea Ice Cream', category: 'desserts', price: 5.99, image: 'https://images.unsplash.com/photo-1563805042-7684c019e0e0?w=400&h=300&fit=crop' },
    { id: 10, name: 'Shrimp Pad See Ew', category: 'mains', price: 13.99, image: 'https://images.unsplash.com/photo-1626082927389-6cd097cdc6ec?w=400&h=300&fit=crop' },
    { id: 11, name: 'Crispy Duck', category: 'specialties', price: 16.99, image: 'https://images.unsplash.com/photo-1546069901-ba9599a7e63c?w=400&h=300&fit=crop' },
    { id: 12, name: 'Summer Rolls', category: 'appetizers', price: 6.99, image: 'https://images.unsplash.com/photo-1609501676725-7186f017a4b5?w=400&h=300&fit=crop' }
  ]

  const filteredItems = menuItems.filter(item => {
    const matchesSearch = item.name.toLowerCase().includes(searchTerm.toLowerCase())
    const matchesCategory = selectedCategory === 'all' || item.category === selectedCategory
    return matchesSearch && matchesCategory
  })

  const addToCart = (item) => {
    const existingItem = cart.find(i => i.id === item.id)
    if (existingItem) {
      setCart(cart.map(i => i.id === item.id ? { ...i, quantity: i.quantity + 1 } : i))
    } else {
      setCart([...cart, { ...item, quantity: 1 }])
    }
  }

  const subtotal = cart.reduce((sum, item) => sum + (item.price * item.quantity), 0)
  const tax = subtotal * 0.08
  const total = subtotal + tax

  return (
    <div className="p-8">
      <div className="grid grid-cols-1 lg:grid-cols-3 gap-6">
        {/* Menu Section */}
        <div className="lg:col-span-2">
          {/* Search */}
          <div className="mb-6">
            <input
              type="text"
              placeholder="Search dishes..."
              value={searchTerm}
              onChange={(e) => setSearchTerm(e.target.value)}
              className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-red-600"
            />
          </div>

          {/* Categories */}
          <div className="flex gap-2 mb-6 flex-wrap">
            {['all', 'appetizers', 'mains', 'specialties', 'desserts'].map(cat => (
              <button
                key={cat}
                onClick={() => setSelectedCategory(cat)}
                className={`px-4 py-2 rounded-lg font-semibold transition ${
                  selectedCategory === cat
                    ? 'bg-red-600 text-white'
                    : 'bg-white text-red-600 border-2 border-red-600 hover:bg-red-50'
                }`}
              >
                {cat.charAt(0).toUpperCase() + cat.slice(1)}
              </button>
            ))}
          </div>

          {/* Menu Grid */}
          <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
            {filteredItems.map(item => (
              <div key={item.id} className="bg-white rounded-lg shadow hover:shadow-lg transition overflow-hidden">
                <img src={item.image} alt={item.name} className="w-full h-40 object-cover" />
                <div className="p-4">
                  <h3 className="font-bold text-gray-800 mb-1">{item.name}</h3>
                  <p className="text-red-600 font-bold mb-3">${item.price.toFixed(2)}</p>
                  <button
                    onClick={() => addToCart(item)}
                    className="w-full bg-red-600 text-white py-2 rounded hover:bg-red-700 transition"
                  >
                    Add to Cart
                  </button>
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* Cart Section */}
        <div className="bg-white rounded-lg shadow-lg p-6 h-fit sticky top-20">
          <h3 className="text-xl font-bold mb-4">🛒 Your Cart</h3>
          {cart.length === 0 ? (
            <p className="text-gray-500 text-center py-8">Cart is empty</p>
          ) : (
            <>
              <div className="space-y-3 mb-4 max-h-64 overflow-y-auto">
                {cart.map(item => (
                  <div key={item.id} className="flex justify-between items-center border-b pb-2">
                    <div>
                      <p className="font-semibold text-sm">{item.name}</p>
                      <p className="text-gray-600 text-xs">x{item.quantity}</p>
                    </div>
                    <p className="font-bold text-red-600">${(item.price * item.quantity).toFixed(2)}</p>
                  </div>
                ))}
              </div>
              <div className="border-t pt-4 space-y-2">
                <div className="flex justify-between">
                  <span>Subtotal:</span>
                  <span>${subtotal.toFixed(2)}</span>
                </div>
                <div className="flex justify-between">
                  <span>Tax (8%):</span>
                  <span>${tax.toFixed(2)}</span>
                </div>
                <div className="flex justify-between font-bold text-lg border-t pt-2">
                  <span>Total:</span>
                  <span className="text-red-600">${total.toFixed(2)}</span>
                </div>
                <button className="w-full bg-gradient-to-r from-red-600 to-orange-600 text-white py-2 rounded font-bold hover:from-red-700 hover:to-orange-700 transition mt-4">
                  Checkout
                </button>
              </div>
            </>
          )}
        </div>
      </div>
    </div>
  )
}

export default Menu