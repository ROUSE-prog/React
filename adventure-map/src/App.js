import React, { useState, useEffect } from 'react';
import Select from 'react-select';
import axios from 'axios';
import { GoogleMap, LoadScript, Marker } from '@react-google-maps/api';

const containerStyle = {
  width: '70vw',
  height: '60vh'
};

const center = {
  lat: -3.745,  // Sample Latitude (replace this with your desired initial lat)
  lng: -38.523  // Sample Longitude (replace this with your desired initial lng)
};

const App = () => {
  const [theme, setTheme] = useState('dark');
  const [location, setLocation] = useState(null);
  const [selectedOption, setSelectedOption] = useState(null);
  const [destination, setDestination] = useState(null);
  
  const travelOptions = [
    { value: 'walking', label: 'Walking' },
    { value: 'driving', label: 'Driving' },
  ];

  const toggleTheme = () => {
    setTheme(theme === 'dark' ? 'light' : 'dark');
  };

  useEffect(() => {
    // Get user's current location
    navigator.geolocation.getCurrentPosition((position) => {
      setLocation({
        lat: position.coords.latitude,
        lng: position.coords.longitude,
      });
    });
  }, []);

  const handleSelection = async (option) => {
    setSelectedOption(option);

    if (location) {
      // Fetch interesting spots based on user's location and selection
      const response = await axios.get('https://maps.googleapis.com/maps/api/place/nearbysearch/json', {
        params: {
          key: 'YOUR_GOOGLE_MAPS_API_KEY',
          location: `${location.lat},${location.lng}`,
          radius: option.value === 'walking' ? 2000 : 10000, // Example radii, you might want to adjust
          type: 'tourist_attraction',
        },
      });

      const destinations = response.data.results;
      const randomDestination = destinations[Math.floor(Math.random() * destinations.length)];
      setDestination(randomDestination.geometry.location);
    }
  }

  return (
    <div className="App">
      <Select 
        options={travelOptions} 
        onChange={handleSelection}
        placeholder="Select travel option..."
      />

       <LoadScript googleMapsApiKey='AIzaSyBrn81skEncMK0I2EEvFhLzL_tJVZPB5uQ'>
          <GoogleMap
            center={location}
            zoom={13}
            style={{ width: '75%', height: '300px' }}
            mapContainerStyle={containerStyle}
            center={center}
            zoom={10}
          >
            {destination && <Marker position={destination} />}
          </GoogleMap>
        </LoadScript>
      
    </div>
  );
}

export default App;
