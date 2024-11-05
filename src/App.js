// App.js
import React from 'react';
import { BrowserRouter as Router, Route, Routes, Link } from 'react-router-dom';
import "./index.css"

// Import your components
import Home from './Home';
import Mealdetails from './Mealdetails';


function App() {
  return (

    <Router>



      <Routes>
        <Route path="/" element={<Home />} />
        <Route path='/:mealid' element={<Mealdetails />} />


      </Routes>

    </Router>
  );
}

export default App;
