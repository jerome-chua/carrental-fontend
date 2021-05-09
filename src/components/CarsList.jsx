import React, { useState, useEffect } from "react";
import axios from "axios";

const BACKEND_URL = "http://localhost:3004";

export default function CarsLists() {
  const [carList, setCarList] = useState([]);

  useEffect(() => {
    axios
      .get(`${BACKEND_URL}/getcars`)
      .then((res) => {
        console.log(res.data);
        setCarList(res.data);
      })
      .catch((err) => console.log(err));
  }, []);

  console.log("Car LIST:", carList);

  return (
    <div className="container-fluid">
      <div className="row mx-3">
        {carList.map((car) => (
          <div className="col-4">
            <div className="card m-1">
              <img
                key={(car.model + car.id).toString()}
                className="card-img-top"
                src={car.photo}
              />
              <div className="card-body">
                <h5 className="card-title">{car.model}</h5>
                <p className="card-text">...</p>
              </div>
              <ul className="list-group list-group-flush">
                <li className="list-group-item">Car availability</li>
                <li className="list-group-item">Rating: {car.rating}</li>
                <li className="list-group-item">
                  Number of Seats: {car.seats}
                </li>
              </ul>
              <div className="card-body">
                <a href="#" className="card-link">
                  Rent Car
                </a>
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}
