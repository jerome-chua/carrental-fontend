import React from "react";
import Navbar from './components/Navbar.jsx';
import CarsList from './components/CarsList.jsx'

import './App.css';


// const BACKEND_URL = 'http://localhost:3004';

function App() {
  return (
    <div className="container-fluid text-center">
      <Navbar />
      <div className="row mt-3">
        <div className="col">
          <h1 className="lead">Car Rental Page</h1>
          <CarsList />
        </div>
      </div>
    </div>
  );
}

export default App;
