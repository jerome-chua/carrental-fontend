import React from "react";

export default function Navbar() {
  return (
    <div>
      <nav id="nav-color" className="navbar justify-content-between">
        <a className="navbar-brand" href="#">
          🚗
        </a>
        <ul className="navbar-nav mr-auto">
          <button className="btn btn-warning px-3 mx-3" type="button">
            Find cars
          </button>
        </ul>
        <ul className="align-middle m-2">
          <a href="#">Manage bookings</a>
        </ul>
      </nav>
    </div>
  );
}
