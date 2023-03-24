import React, { useState, useEffect } from 'react';
import firebase from './firebase';

function App() {
  const [user, setUser] = useState(null);

  useEffect(() => {
    firebase.auth().onAuthStateChanged(setUser);
  }, []);

  return (
    // Your app JSX here
  );
}

export default App;
