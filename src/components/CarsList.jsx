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
    <div className="container">
      <div className="row">
        <div className="col">{}</div>
      </div>
    </div>
  );
}
