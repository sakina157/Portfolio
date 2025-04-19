import React from "react";
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import axios from 'axios'
import Home from './components/Home';



axios.defaults.baseURL = process.env.REACT_APP_API_URL
axios.defaults.withCredentials = true

function App() {
  return (
    <Router>
     
      <Routes>
        <Route path="/" element={<Home />} />
        
        {/* Add more routes as needed */}
      </Routes>
    
    </Router>
  );
}

export default App;
