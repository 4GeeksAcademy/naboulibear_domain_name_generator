import React from 'react'
import MenuItem from './MenuItem'

const Menu = ({ items, selectedCategory, setSelectedCategory, addToCart }) => {
  const categories = [
    { id: 'all', label: 'All Items' },
    { id: 'appetizers', label: 'Appetizers' },
    { id: 'mains', label: 'Main Courses' },
    { id: 'specialties', label: 'Specialties' },
    { id: 'desserts', label: 'Desserts' }
  ]

  return (
    <div className="flex-1">
      {/* Category Buttons */}
      <div className="flex flex-wrap gap-2 mb-8">
        {categories.map(cat => (
          <button
            key={cat.id}
            onClick={() => setSelectedCategory(cat.id)}
            className={`px-4 py-2 rounded-lg font-semibold transition ${
              selectedCategory === cat.id
                ? 'bg-red-600 text-white'
                : 'bg-white text-red-600 border-2 border-red-600 hover:bg-red-50'
            }`}
          >
            {cat.label}
          </button>
        ))}
      </div>

      {/* Menu Items Grid */}
      <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
        {items.map(item => (
          <MenuItem
            key={item.id}
            item={item}
            onAddToCart={addToCart}
          />
        ))}
      </div>

      {items.length === 0 && (
        <div className="text-center py-12">
          <p className="text-gray-500 text-lg">No items found. Try a different search or category.</p>
        </div>
      )}
    </div>
  )
}

export default Menu