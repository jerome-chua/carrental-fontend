// import moment from "moment";
import React, { useState, useContext } from "react";
import DatePicker from "react-datepicker";
import "react-datepicker/dist/react-datepicker.css";
import {
  CarListContext,
  selectCarIdxAction,
  confirmBooking,
} from "../store.js";

// import moment from "moment";

export default function CarModal({ children, carId }) {
  const { store, dispatch } = useContext(CarListContext);
  const { requestedStartDate, requestedEndDate, selectedCarIdx } = store;

  const [isVisible, setIsVisible] = useState(false);
  const [startDate, setStartDate] = useState(new Date("2021/05/08"));
  const [endDate, setEndDate] = useState(new Date("2021/05/10"));

  const setCarId = () => {
    dispatch(selectCarIdxAction(carId));
    setIsVisible(true);
  };

  const bookingData = {
    carId: selectedCarIdx,
    pickupDate: startDate,
    returnDate: endDate,
    pickup: "Redhill MRT",
    dropoff: "Changi Airport",
  };

  const handleBookingData = () => {
    confirmBooking(dispatch, bookingData);
    dispatch(selectCarIdxAction(null));
  };

  if (isVisible) {
    return (
      <div>
        <button className="btn btn-primary">Rent Car</button>
        <div className="modal-container">
          <div className="modal-body">
            <button
              className="modal-close btn btn-danger"
              onClick={() => setIsVisible(false)}
            >
              x
            </button>

            {children}
            <div className="row">
              <div className="col-12">
                <DatePicker
                  selected={requestedStartDate}
                  onChange={(date) => setStartDate(date)}
                  selectsStart
                  startDate={startDate}
                  endDate={endDate}
                  className="form-control py-4 px-4 shadow-sm input-group my-1"
                />
              </div>
              <div className="col-12">
                <DatePicker
                  selected={requestedEndDate}
                  onChange={(date) => setEndDate(date)}
                  selectsEnd
                  startDate={startDate}
                  endDate={endDate}
                  minDate={startDate}
                  className="form-control py-4 px-4 shadow-sm input-group my-1"
                />
              </div>
              <div className="col-12">
                <button
                  className="btn btn-success mt-5"
                  onClick={handleBookingData}
                >
                  Confirm Booking
                </button>
              </div>
            </div>
          </div>
        </div>
      </div>
    );
  } else {
    return (
      <div>
        <button className="btn btn-primary" onClick={setCarId}>
          Rent Car
        </button>
      </div>
    );
  }
}
