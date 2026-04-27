# Asian Grill - Premium Online Ordering Platform

🍜 **A modern, full-featured restaurant ordering platform with authentication, user dashboard, and complete menu system.**

## ✨ Features

### 🔐 Authentication
- User login and registration
- Persistent user sessions with localStorage
- Password validation

### 📊 Dashboard
- Welcome message with user greeting
- Loyalty points display
- Quick stats (total orders this month)
- Quick navigation links
- Featured dishes showcase

### 🍽️ Menu System
- 12+ Asian dishes with images
- Search functionality
- Category filtering (Appetizers, Mains, Specialties, Desserts)
- Shopping cart with real-time calculations
- Auto-calculated tax (8%)

### 👤 User Profile
- View and edit personal information
- Update contact details
- Set food preferences
- View loyalty points

### 📋 Orders History
- View all past orders
- Order status tracking
- Order details and totals

### ⚙️ Settings
- Notification preferences (Email, SMS, Promotions)
- Language selection
- Dark mode toggle
- Account management (Change password, Download data, Delete account)

### 🎯 Additional Features
- Responsive design (mobile, tablet, desktop)
- Beautiful gradient UI
- Smooth animations and transitions
- Real-time cart updates
- Sticky navigation
- Sidebar navigation

## 🚀 Installation

```bash
# Clean install
rm -rf node_modules package-lock.json

# Install dependencies
npm install

# Start dev server
npm start
```

The app will open at **http://localhost:3000**

## 📝 Demo Credentials

**Email:** demo@example.com  
**Password:** password123

(Or create your own account by registering)

## 🏗️ Project Structure

```
src/
├── pages/
│   ├── Login.jsx          # Login page
│   ├── Register.jsx       # Registration page
│   ├── Dashboard.jsx      # Main dashboard
│   ├── Menu.jsx           # Menu with cart
│   ├── Orders.jsx         # Order history
│   ├── Profile.jsx        # User profile
│   └── Settings.jsx       # User settings
├── components/
│   ├── Header.jsx         # Top navigation
│   └── Sidebar.jsx        # Side navigation
├── App.jsx                # Main app with routing
└── main.jsx               # Entry point
```

## 🛠️ Tech Stack

- **React 18** - UI Framework
- **React Router v6** - Navigation
- **Vite** - Build tool
- **Tailwind CSS** - Styling
- **Font Awesome** - Icons
- **LocalStorage** - Data persistence

## 💾 Data Persistence

User data is stored in browser localStorage and persists across sessions.

## 🎨 Design Highlights

- Beautiful red/orange gradient theme
- Responsive layout with sidebar
- Smooth animations and hover effects
- Clean, modern UI components
- Professional typography and spacing

## 📱 Pages

- **Login** - User authentication
- **Register** - New account creation
- **Dashboard** - Home with quick links and featured items
- **Menu** - Full menu with search and cart
- **Orders** - Order history and tracking
- **Profile** - User information management
- **Settings** - Preferences and account settings

## 🔒 Features to Add

- [ ] Payment processing integration
- [ ] Real-time order tracking
- [ ] Email notifications
- [ ] Rating and reviews
- [ ] Multiple delivery addresses
- [ ] Promo codes
- [ ] Advanced filtering

---

**Made with ❤️ for Asian Grill**

Built with React, Vite, and Tailwind CSS 🚀