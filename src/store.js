import React, { useReducer } from "react";
import axios from 'axios';

// Setup (state & dispatch).
export const initialState = {
    cars: [],
    requestedStartDate: null,
    requestedEndDate: null,
    selectedCarIdx: null,
  }
;

const LOAD_CARS = 'LOAD_CARS';
const SET_DATES = 'SET_DATES';
const FILTER_CARS = 'FILTER_CARS';
const SELECT_CAR = 'SELECT_CAR';
// const CONFIRM_CAR = 'CONFIRM_CAR'
// const CANCEL_BOOKING = 'CANCEL_BOOKING'
// const UPDATE_BOOKING = 'UPDATE_BOOKING'

export function carListReducer(state, action) {
  switch (action.type) {
    case LOAD_CARS:
      return {...state, cars: action.payload}

    case SET_DATES:
      return {...state, 
        requestedStartDate: action.payload.startDate,
        requestedEndDate: action.payload.endDate,
      }

    case FILTER_CARS:
      const filteredList = state.cars.filter((car, i) => action.payload.returnDate < action.payload.requestedStartDate && action.payload.pickupDate > action.payload.requestedEndDate);
      return filteredList;

    case SELECT_CAR:
      const currentCarId= action.payload.carId;
      return {...state, currentCarId};

      
    default:
      return state;
  }
}


// Action creators (passed down to dispatch).
export function loadCarsAction(cars) {
  return {
    type: LOAD_CARS,
    payload: cars // Array of All cars.
  }
}


export function setDatesAction(start, end) {
  return {
    type: SET_DATES,
    payload: {
      requestedStartDate: start,
      requestedEndDate: end
    }
  }
}


// Provider.
export const CarListContext = React.createContext(null);
const { Provider } = CarListContext;

export function CarListProvider({children}) {
  const [store, dispatch] = useReducer(carListReducer, initialState);

  return (
    <Provider value={{store, dispatch}}>
      {children}
    </Provider>
  )
}

// Requests.
const BACKEND_URL = 'http://localhost:3004';

export function loadCarList(dispatch) {
  axios.get(`${BACKEND_URL}/getcars`)
    .then((res) => {
      console.log("SEE RES data-----", res.data);
      dispatch(loadCarsAction(res.data));
    }
  )
}