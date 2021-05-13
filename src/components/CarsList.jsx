import React, { useEffect, useContext } from "react";
import { CarListContext, loadCarList, selectCarIdxAction } from "../store.js";
import CarModal from "./CarModal.jsx";

export default function CarsList() {
  const { store, dispatch } = useContext(CarListContext);
  const { cars } = store;

  const CarModalContent = ({ car }) => (
    <div className="mb-3">
      <h5>Making booking for:</h5>
      Name - {car.model}
      <br />
      Car ID - {car.id}
    </div>
  );

  useEffect(() => {
    loadCarList(dispatch);
  }, [dispatch]);

  // Create a filtered car list here (with the dates) and then map it below.

  return (
    <div className="container-fluid">
      <h3 className="text-left ml-5">Cars Available:</h3>
      <div className="row mx-3">
        {cars.map((car) => (
          <div className="col-sm-12 col-md-6 col-xl-3">
            <div className="card m-1">
              <img
                key={car.id.toString()}
                className="card-img-top"
                src={car.photo}
                alt="car"
              />
              <div className="card-body">
                <h5 className="card-title">{car.model}</h5>
                <p className="card-text">...</p>
              </div>
              <ul className="list-group list-group-flush">
                <li className="list-group-item">Rating: {car.rating}</li>
                <li className="list-group-item">
                  Number of Seats: {car.seats}
                </li>
              </ul>
              <div className="card-body">
                <div>
                  <CarModal carId={car.id}>
                    <CarModalContent car={car} />
                  </CarModal>
                </div>
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}
