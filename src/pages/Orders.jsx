import React from 'react'

const Orders = () => {
  const orders = [
    { id: 1, date: '2024-04-20', total: 45.99, status: 'Delivered', items: 3 },
    { id: 2, date: '2024-04-18', total: 32.50, status: 'Delivered', items: 2 },
    { id: 3, date: '2024-04-15', total: 58.75, status: 'Delivered', items: 4 },
    { id: 4, date: '2024-04-12', total: 29.99, status: 'Delivered', items: 2 },
  ]

  const getStatusColor = (status) => {
    switch(status) {
      case 'Delivered': return 'bg-green-100 text-green-800'
      case 'Processing': return 'bg-blue-100 text-blue-800'
      case 'Cancelled': return 'bg-red-100 text-red-800'
      default: return 'bg-gray-100 text-gray-800'
    }
  }

  return (
    <div className="p-8">
      <h2 className="text-3xl font-bold mb-6">📋 My Orders</h2>
      
      <div className="bg-white rounded-lg shadow-lg overflow-hidden">
        <table className="w-full">
          <thead>
            <tr className="bg-gray-100 border-b">
              <th className="px-6 py-3 text-left font-bold">Order ID</th>
              <th className="px-6 py-3 text-left font-bold">Date</th>
              <th className="px-6 py-3 text-left font-bold">Items</th>
              <th className="px-6 py-3 text-left font-bold">Total</th>
              <th className="px-6 py-3 text-left font-bold">Status</th>
              <th className="px-6 py-3 text-left font-bold">Action</th>
            </tr>
          </thead>
          <tbody>
            {orders.map(order => (
              <tr key={order.id} className="border-b hover:bg-gray-50">
                <td className="px-6 py-3 font-semibold">#{order.id}</td>
                <td className="px-6 py-3">{order.date}</td>
                <td className="px-6 py-3">{order.items} items</td>
                <td className="px-6 py-3 font-bold">${order.total.toFixed(2)}</td>
                <td className="px-6 py-3">
                  <span className={`px-3 py-1 rounded-full text-sm font-semibold ${getStatusColor(order.status)}`}>
                    {order.status}
                  </span>
                </td>
                <td className="px-6 py-3">
                  <button className="text-red-600 hover:text-red-800 font-bold">View</button>
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>

      <div className="mt-8 bg-blue-50 border border-blue-200 rounded-lg p-6">
        <h3 className="font-bold text-blue-800 mb-2">💡 Tip</h3>
        <p className="text-blue-700">You've earned 150 loyalty points from your orders! Use them to get discounts on your next purchase.</p>
      </div>
    </div>
  )
}

export default Orders