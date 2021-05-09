import React, { useContext, useReducer } from "react";
import Navbar from './components/Navbar.jsx';
import CarsList from './components/CarsList.jsx'
import DateComp from "./components/DateComp.jsx";

import './App.css';

// const BACKEND_URL = 'http://localhost:3004';

const RentCarContext = React.createContext(null);

function App() {
  const [carList, dispatch] = useReducer();

  return (
    <div className="container-fluid text-center">
      <Navbar />
      <div className="row mt-4">
        <div className="col">
          <h3 className="text-muted mb-4">Filter by Dates:</h3>
          <DateComp />
          <CarsList />
        </div>
      </div>
    </div>
  );
}

export default App;
