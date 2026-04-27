import React, { useState } from 'react'
import Header from './components/Header'
import Hero from './components/Hero'
import Menu from './components/Menu'
import Cart from './components/Cart'

const App = () => {
  const [cartItems, setCartItems] = useState([])
  const [searchTerm, setSearchTerm] = useState('')
  const [selectedCategory, setSelectedCategory] = useState('all')

  const menuItems = [
    {
      id: 1,
      name: 'Spring Rolls',
      category: 'appetizers',
      price: 5.99,
      description: 'Crispy golden spring rolls with sweet and sour sauce',
      image: 'https://images.unsplash.com/photo-1609501676725-7186f017a4b5?w=400&h=300&fit=crop'
    },
    {
      id: 2,
      name: 'Chicken Satay',
      category: 'appetizers',
      price: 7.99,
      description: 'Grilled chicken skewers with peanut sauce',
      image: 'https://images.unsplash.com/photo-1555939594-58d7cb561455?w=400&h=300&fit=crop'
    },
    {
      id: 3,
      name: 'Beef Teriyaki',
      category: 'mains',
      price: 14.99,
      description: 'Grilled beef strips with teriyaki glaze and vegetables',
      image: 'https://images.unsplash.com/photo-1540189549336-e6e99c3679fe?w=400&h=300&fit=crop'
    },
    {
      id: 4,
      name: 'Chicken Pad Thai',
      category: 'mains',
      price: 12.99,
      description: 'Stir-fried noodles with chicken, peanuts and lime',
      image: 'https://images.unsplash.com/photo-1626082927389-6cd097cdc6ec?w=400&h=300&fit=crop'
    },
    {
      id: 5,
      name: 'Vegetable Stir Fry',
      category: 'mains',
      price: 10.99,
      description: 'Mixed vegetables in garlic sauce with rice',
      image: 'https://images.unsplash.com/photo-1609501676725-7186f017a4b5?w=400&h=300&fit=crop'
    },
    {
      id: 6,
      name: 'Mongolian Beef',
      category: 'specialties',
      price: 15.99,
      description: 'Tender beef with scallions in savory sauce',
      image: 'https://images.unsplash.com/photo-1546069901-ba9599a7e63c?w=400&h=300&fit=crop'
    },
    {
      id: 7,
      name: 'Kung Pao Chicken',
      category: 'specialties',
      price: 13.99,
      description: 'Spicy chicken with peanuts and peppers',
      image: 'https://images.unsplash.com/photo-1609501676725-7186f017a4b5?w=400&h=300&fit=crop'
    },
    {
      id: 8,
      name: 'Mango Sticky Rice',
      category: 'desserts',
      price: 6.99,
      description: 'Sweet sticky rice with fresh mango',
      image: 'https://images.unsplash.com/photo-1586190203458-43b2c5a3f1ab?w=400&h=300&fit=crop'
    },
    {
      id: 9,
      name: 'Green Tea Ice Cream',
      category: 'desserts',
      price: 5.99,
      description: 'Creamy green tea ice cream',
      image: 'https://images.unsplash.com/photo-1563805042-7684c019e0e0?w=400&h=300&fit=crop'
    },
    {
      id: 10,
      name: 'Shrimp Pad See Ew',
      category: 'mains',
      price: 13.99,
      description: 'Shrimp with wide noodles and soy sauce',
      image: 'https://images.unsplash.com/photo-1626082927389-6cd097cdc6ec?w=400&h=300&fit=crop'
    },
    {
      id: 11,
      name: 'Crispy Duck',
      category: 'specialties',
      price: 16.99,
      description: 'Half duck with crispy skin and plum sauce',
      image: 'https://images.unsplash.com/photo-1546069901-ba9599a7e63c?w=400&h=300&fit=crop'
    },
    {
      id: 12,
      name: 'Summer Rolls',
      category: 'appetizers',
      price: 6.99,
      description: 'Fresh rice paper rolls with vegetables and shrimp',
      image: 'https://images.unsplash.com/photo-1609501676725-7186f017a4b5?w=400&h=300&fit=crop'
    }
  ]

  const addToCart = (item) => {
    const existingItem = cartItems.find(i => i.id === item.id)
    if (existingItem) {
      setCartItems(cartItems.map(i =>
        i.id === item.id ? { ...i, quantity: i.quantity + 1 } : i
      ))
    } else {
      setCartItems([...cartItems, { ...item, quantity: 1 }])
    }
  }

  const removeFromCart = (itemId) => {
    setCartItems(cartItems.filter(i => i.id !== itemId))
  }

  const updateQuantity = (itemId, quantity) => {
    if (quantity === 0) {
      removeFromCart(itemId)
    } else {
      setCartItems(cartItems.map(i =>
        i.id === itemId ? { ...i, quantity } : i
      ))
    }
  }

  const filteredItems = menuItems.filter(item => {
    const matchesSearch = item.name.toLowerCase().includes(searchTerm.toLowerCase()) ||
      item.description.toLowerCase().includes(searchTerm.toLowerCase())
    const matchesCategory = selectedCategory === 'all' || item.category === selectedCategory
    return matchesSearch && matchesCategory
  })

  return (
    <div className="min-h-screen">
      <Header />
      <Hero searchTerm={searchTerm} setSearchTerm={setSearchTerm} />
      <div className="flex flex-col lg:flex-row gap-6 max-w-7xl mx-auto px-4 py-8">
        <Menu
          items={filteredItems}
          selectedCategory={selectedCategory}
          setSelectedCategory={setSelectedCategory}
          addToCart={addToCart}
        />
        <Cart
          items={cartItems}
          removeFromCart={removeFromCart}
          updateQuantity={updateQuantity}
        />
      </div>
    </div>
  )
}

export default App