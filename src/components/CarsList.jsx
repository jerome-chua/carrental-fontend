import React, { useEffect, useContext } from "react";
import { CarListContext, loadCarList } from "../store.js";
// import CarModal from "./CarModal.jsx";
// import ModalContent from "./ModalContent.jsx";

export default function CarsList() {
  // const [carList, setCarList] = useState([]);
  const { store, dispatch } = useContext(CarListContext);
  const { cars } = store;

  // Filtered dates.

  // This has been refactor to store.js
  useEffect(() => {
    loadCarList(dispatch);
  }, []);

  console.log("Car LIST:", store.cars);

  // Create a filtered car list here (with the dates).

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
                <li className="list-group-item">Car availability</li>
                <li className="list-group-item">Rating: {car.rating}</li>
                <li className="list-group-item">
                  Number of Seats: {car.seats}
                </li>
              </ul>
              <div className="card-body">
                <div>Link</div>
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}
