import React, { useState } from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import Hedar from './Hedar';
import Footer from './Footer';
import Home from './Home';
import About from './About';
import Contact from './Contact';
import Cities from './Cities';

function App() {
  const [selectedCountry, setSelectedCountry] = useState('');

  return (
    <Router>
      <div className="App">
        <Hedar />
        <Routes>
          <Route path="/ " element={<Home selectedCountry={selectedCountry} setSelectedCountry={setSelectedCountry} />} />
          <Route path="/Cities" element={<Cities selectedCountry={selectedCountry} />} />
          <Route path="/About" element={<About />} />
          <Route path="/Contact" element={<Contact />} />
        </Routes>
        <Footer />
      </div>
    </Router>
  );
}
export default App;
// import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';
// import React, { useState } from 'react';
// import './App.css';

// import Home from './Home';
// import Cities from './Cities';
// import Footer from './Footer';
// import Hedar from './Hedar';

// function App() {
//   const [selectedCountry, setSelectedCountry] = useState('');

//   return (
//     <Router>
//       <div className="App">
//         <Hedar />
//         <Switch>
//           <Route path="/" exact>
//             <Home selectedCountry={selectedCountry} setSelectedCountry={setSelectedCountry} />
//           </Route>
//           <Route path="/cities">
//             <Cities selectedCountry={selectedCountry} />
//           </Route>
//         </Switch>
//         
//         <Footer />
//       </div>
//     </Router>
//   );
// }

// export default App;