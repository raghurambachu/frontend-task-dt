import React, { useReducer, useEffect, useState } from "react";

import Loading from "./Loading";
import Sidebar from "./Sidebar";
import Schedule from "./Schedule";
import getTimeSlots from "../data/timeslots.js";
import AppContext from "../context/AppContext";
import AppointmentForm from "./AppointmentForm";
import reducer, { initialState } from "../reducer";

function Layout() {
  let [store, dispatch] = useReducer(reducer, initialState);
  const [isLoading, setIsLoading] = useState(true);
  useEffect(() => {
    if (localStorage.store) {
      dispatch({
        type: "SET_STORE",
        payload: JSON.parse(localStorage.store).slots,
      });
    } else {
      dispatch({ type: "SET_STORE", payload: getTimeSlots() });
    }
    setIsLoading(false);
  }, []);

  return (
    <>
      {isLoading ? (
        <Loading />
      ) : (
        <AppContext.Provider value={{ store, dispatch }}>
          <div className="relative z-10 w-11/12 bg-white rounded-lg shadow-lg sm:w-9/12 md:w-8/12 min-h-85 ">
            <div className="grid grid-cols-3 text-gray-700 md:p-8 justify-items-center md:justify-items-stretch">
              <Sidebar currentSlot={store.activeSlot} />
              {store.activeSlot ? <AppointmentForm /> : <Schedule />}
            </div>
          </div>
        </AppContext.Provider>
      )}
    </>
  );
}

export default Layout;
