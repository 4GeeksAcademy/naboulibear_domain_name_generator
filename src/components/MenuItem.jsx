import React from 'react'

const MenuItem = ({ item, onAddToCart }) => {
  return (
    <div className="bg-white rounded-lg shadow-lg overflow-hidden hover:shadow-xl transition transform hover:scale-105">
      <img
        src={item.image}
        alt={item.name}
        className="w-full h-48 object-cover"
      />
      <div className="p-4">
        <h3 className="text-xl font-bold text-gray-800">{item.name}</h3>
        <p className="text-gray-600 text-sm mt-2">{item.description}</p>
        <div className="flex justify-between items-center mt-4">
          <span className="text-2xl font-bold text-red-600">${item.price.toFixed(2)}</span>
          <button
            onClick={() => onAddToCart(item)}
            className="bg-gradient-to-r from-red-500 to-orange-500 text-white px-4 py-2 rounded-lg hover:from-red-600 hover:to-orange-600 transition font-semibold"
          >
            <i className="fas fa-shopping-cart mr-2"></i>Add
          </button>
        </div>
      </div>
    </div>
  )
}

export default MenuItem