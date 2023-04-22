// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";
import 'firebase/firestore';

const db = firebase.firestore();

// Add a new customer to the "customers" collection
db.collection('customers').add({
  name: 'John Doe',
  email: 'john.doe@example.com',
  phone: '123-456-7890',
  address: '123 Main St, Anytown USA',
  notes: 'This customer is a VIP',
})
.then(docRef => {
  console.log('Customer added with ID: ', docRef.id);
})
.catch(error => {
  console.error('Error adding customer: ', error);
});

const firebaseConfig = {
  apiKey: "AIzaSyBYxGbGf0vZeytzqk2wuI7N7KGQYZE_r5c",
  authDomain: "crumb-e284f.firebaseapp.com",
  projectId: "crumb-e284f",
  storageBucket: "crumb-e284f.appspot.com",
  messagingSenderId: "905936478395",
  appId: "1:905936478395:web:8a483dc92c109f5049499e",
  measurementId: "G-JD64ZHR5BW"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const analytics = getAnalytics(app);