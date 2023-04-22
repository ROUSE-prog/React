import React from 'react';

const Dashboard = () => {
  const data = [
    { name: 'John Doe', email: 'john.doe@example.com', phone: '123-456-7890' },
    { name: 'Jane Smith', email: 'jane.smith@example.com', phone: '123-456-7890' },
    { name: 'Bob Johnson', email: 'bob.johnson@example.com', phone: '123-456-7890' },
  ];

  return (
    <div>
      <h1>Dashboard</h1>
      <ul>
        {data.map((customer, index) => (
          <li key={index}>
            <h2>{customer.name}</h2>
            <p>Email: {customer.email}</p>
            <p>Phone: {customer.phone}</p>
          </li>
        ))}
      </ul>
    </div>
  );
};

export default Dashboard;
