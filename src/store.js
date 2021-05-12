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
const CONFIRM_BOOKING = 'CONFIRM_BOOKING'
// const CANCEL_BOOKING = 'CANCEL_BOOKING'
// const UPDATE_BOOKING = 'UPDATE_BOOKING'

export function carListReducer(state, action) {
  switch (action.type) {
    case LOAD_CARS:
      return {...state, cars: action.payload}

    case SET_DATES:
      return {
        ...state, 
        requestedStartDate: action.payload.start,
        requestedEndDate: action.payload.end,
      }

    case SELECT_CAR:
      return {
        ...state,
        selectedCarIdx: action.payload
      }

    case CONFIRM_BOOKING:
      return {
        ...state, 
        requestedStartDate: action.payload.start,
        requestedEndDate: action.payload.end,
        selectedCarIdx: action.payload.carId,
      }

    // Would need to go into bookings table to do this correctly.
    case FILTER_CARS:
      const filteredList = state.cars.filter((car, i) => action.payload.returnDate < action.payload.requestedStartDate && action.payload.pickupDate > action.payload.requestedEndDate);
      return filteredList;

    
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


export function setDatesAction(startDate, endDate) {
  return {
    type: SET_DATES,
    payload: {
      start: startDate,
      end: endDate
    }
  }
}

export function selectCarIdxAction(carId) {
  return {
    type: SELECT_CAR,
    payload: carId,
  }
}

export function confirmBookingAction(carId, startDate, endDate) {
  return {
    type: CONFIRM_BOOKING,
    payload: {
      start: startDate,
      end: endDate,
      carId: carId,
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
      dispatch(loadCarsAction(res.data));
    }
  )
}

export function confirmBooking(dispatch, bookingData) {
  axios.post(`${BACKEND_URL}/booking`, {bookingData})
    .then(res => {
      dispatch(confirmBookingAction(bookingData.carId, bookingData.startDate, bookingData.endDate));
      console.log(res.data);
    })
}