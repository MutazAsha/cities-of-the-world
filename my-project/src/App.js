import React, { useState } from 'react';
import './App.css';
import Header from './Header';
import Home from './Home';
import Cities from './Cities';
import Footer from './Footer';

function App() {
  const [selectedCountry, setSelectedCountry] = useState('');

  return (
    <div className="App">
      <Header />
      <Home selectedCountry={selectedCountry} setSelectedCountry={setSelectedCountry} />
      <Cities selectedCountry={selectedCountry} />
      <Footer />
    </div>
  );
}

export default App;
