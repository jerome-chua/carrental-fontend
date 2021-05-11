import moment from "moment";

import React, { useState, useContext } from "react";
import DatePicker from "react-datepicker";
import "react-datepicker/dist/react-datepicker.css";
import { CarListContext, setDatesAction } from "../store.js";

export default function DateComp() {
  const [startDate, setStartDate] = useState(new Date("2021/05/08"));
  const [endDate, setEndDate] = useState(new Date("2021/05/10"));
  const { store, dispatch } = useContext(CarListContext);

  const { requestedStartDate, requestedEndDate } = store;
  console.log("requestedStartDate: ---", requestedStartDate);
  console.log("requestedEndDate: ---", requestedEndDate);

  const setDates = () => {
    dispatch(setDatesAction(startDate, endDate));
    console.log("setDatesAction succesfful!");
  };

  return (
    <div className="container">
      <div className="row">
        <div className="col-12">
          <DatePicker
            selected={startDate}
            onChange={(date) => setStartDate(date)}
            selectsStart
            startDate={startDate}
            endDate={endDate}
            className="form-control py-4 px-4 shadow-sm input-group my-1"
          />
        </div>
        <div className="col-12">
          <DatePicker
            selected={endDate}
            onChange={(date) => setEndDate(date)}
            selectsEnd
            startDate={startDate}
            endDate={endDate}
            minDate={startDate}
            className="form-control py-4 px-4 shadow-sm input-group my-1"
          />
        </div>
      </div>
      <div className="row">
        <div className="col-md-6 mx-auto my-3">
          <div className="text-center">
            <p className="font-italic text-muted mb-0">Days Filtered:</p>
            <h4
              id="picked-date"
              className="font-weight-bold text-uppercase mb-3"
            >
              {moment(startDate).format("DD MMMM yyyy")} {" - "}
              {moment(endDate).format("DD MMMM yyyy")}
            </h4>
          </div>
        </div>
        <div className="col-12">
          <button type="button" className="btn btn-primary" onClick={setDates}>
            Confirm Date Range
          </button>
        </div>
      </div>
    </div>
  );
}
