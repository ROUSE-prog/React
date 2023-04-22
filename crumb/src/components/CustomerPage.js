import React from 'react';

const CustomerPage = ({ customer }) => {
  return (
    <div>
      <h1>{customer.name}</h1>
      <p>Email: {customer.email}</p>
      <p>Phone: {customer.phone}</p>
      <p>Address: {customer.address}</p>
      <p>Notes: {customer.notes}</p>
    </div>
  );
};

export default CustomerPage;
