import React from "react";

export default function CarModalConfirmation() {
  return (
    <div className="modal-container">
      <div className="modal-body">
        <button
          className="modal-close btn btn-danger"
          onClick={() => setIsVisible(false)}
        >
          x
        </button>
      </div>
    </div>
  );
}
