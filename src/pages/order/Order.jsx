//Order 

import React, { useState } from 'react';
import './order.css';

const Order = () => {
  const [orders] = useState([
    {
      orderId: 'ORD123456',
      date: '2024-11-01',
      items: [
        { name: 'Product 1', size: 'M', quantity: 2, price: 50 },
        { name: 'Product 2', size: 'L', quantity: 1, price: 30 },
      ],
      total: 130,
      status: 'Delivered',
    },
    {
      orderId: 'ORD123456',
      date: '2024-11-01',
      items: [
        { name: 'Product 1', size: 'M', quantity: 2, price: 50 },
        { name: 'Product 2', size: 'L', quantity: 1, price: 30 },
      ],
      total: 130,
      status: 'Delivered',
    },
    
    {
      orderId: 'ORD654321',
      date: '2024-10-25',
      items: [
        { name: 'Product 3', size: 'S', quantity: 3, price: 20 },
      ],
      total: 60,
      status: 'Shipped',
    },
  ]);

  return (
    <div className="order-page section">
      <h1>Your Orders</h1>
      <div className="order-container">
        {orders.map((order, index) => (
          <div key={index} className="order-card">
            <div className="order-header">
              <h3>Order ID: {order.orderId}</h3>
              <p>Date: {order.date}</p>
            </div>
            <div className="order-items">
              {order.items.map((item, idx) => (
                <div key={idx} className="order-item">
                  <p>{item.name} (Size: {item.size})</p>
                  <p>Quantity: {item.quantity}</p>
                  <p>Price: ${item.price}</p>
                </div>
              ))}
            </div>
            <div className="order-footer">
              <p><strong>Total: ${order.total}</strong></p>
              <p className={`status ${order.status.toLowerCase()}`}>Status: {order.status}</p>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Order;

