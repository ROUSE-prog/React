import React, { useState, useEffect } from 'react';
import firebase from '../firebase';
import api from './api';

const CustomerList = () => {
  const [customers, setCustomers] = useState([]);

  useEffect(() => {
    // Get all the customers from the "customers" collection in Firestore
    const unsubscribe = firebase.firestore()
      .collection('customers')
      .onSnapshot((snapshot) => {
        const customers = snapshot.docs.map(doc => ({
          id: doc.id,
          ...doc.data()
        }));
        setCustomers(customers);
      });

    return () => unsubscribe();
  }, []);

  // Function to delete a customer from the "customers" collection in Firestore
  const deleteCustomer = (customerId) => {
    firebase.firestore()
      .collection('customers')
      .doc(customerId)
      .delete()
      .then(() => {
        console.log('Customer deleted successfully!');
      })
      .catch((error) => {
        console.error('Error deleting customer: ', error);
      });
  };

  return (
    <div>
      <h1>Customer List</h1>
      <ul>
        {customers.map((customer) => (
          <li key={customer.id}>
            <h2>{customer.name}</h2>
            <p>Email: {customer.email}</p>
            <p>Phone: {customer.phone}</p>
            <button onClick={() => deleteCustomer(customer.id)}>Delete</button>
          </li>
        ))}
      </ul>
    </div>
  );
};

export default CustomerList;
