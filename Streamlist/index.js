// Import the functions you need from the SDKs you need
import React, { useState, useEffect } from 'react';
import { firebase } from "firebase/app";
import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";
import "firebase/auth";

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const analytics = getAnalytics(app);
const auth = firebase.auth();

firebase.initializeApp({
  
  });