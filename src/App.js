import React from "react";
import Navbar from './components/Navbar.jsx';
import CarsList from './components/CarsList.jsx'
import DateComp from "./components/DateComp.jsx";
import './App.css';

import {
  CarListProvider,
} from './store'

export default function App() {

  return (
    <CarListProvider>
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
    </CarListProvider>
  );
}


