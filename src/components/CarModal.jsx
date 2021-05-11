import React, { useState } from "react";

export default function CarModal(ChildComponent) {
  const [isVisible, setIsVisible] = useState(true);

  if (isVisible) {
    return (
      <div className="modal-container">
        <div className="modal">
          <button className="modal-close" onClick={() => setIsVisible(false)}>
            x
          </button>
          <ChildComponent />
        </div>
      </div>
    );
  } else {
    return (
      <div>
        <button onClick={() => setIsVisible(true)}>Open Modal</button>
      </div>
    );
  }
}
