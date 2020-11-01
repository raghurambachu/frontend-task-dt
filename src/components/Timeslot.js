import React, { useContext } from "react";
import ReactTooltip from "react-tooltip";

import { FaTimes } from "react-icons/fa";

import Checked from "../img/Checked";
import AppContext from "../context/AppContext";

function TimeSlot(props) {
  const { store, dispatch } = useContext(AppContext);
  const { getConfirmation, time, id, isAppointmentSet } = props.slot;

  return (
    <li>
      {getConfirmation ? (
        <div className="flex items-center justify-between w-56 ">
          <button className="py-2 text-gray-100 bg-gray-600 rounded-sm w-22">
            {time}
          </button>
          <button
            className="py-2 text-blue-100 bg-blue-500 rounded-sm w-22"
            onClick={() =>
              dispatch({
                type: "CREATE_APPOINTMENT",
                payload: { activeSlot: time, id },
              })
            }
          >
            Confirm
          </button>
          <FaTimes
            className="cursor-pointer"
            onClick={() =>
              dispatch({
                type: "SET_CONFIRMATION",
                payload: {
                  getConfirmation: false,
                  id,
                  isSlotClickable: true,
                },
              })
            }
          />
        </div>
      ) : (
        <div className="flex">
          <button
            onClick={() =>
              store.isSlotClickable &&
              (isAppointmentSet
                ? dispatch({
                    type: "CREATE_APPOINTMENT",
                    payload: { activeSlot: time, id },
                  })
                : dispatch({
                    type: "SET_CONFIRMATION",
                    payload: {
                      getConfirmation: true,
                      id,
                      isSlotClickable: false,
                    },
                  }))
            }
            className={`w-48 px-5 mr-8 py-2 font-bold  border-2  rounded-md ${
              isAppointmentSet
                ? "bg-red-400 text-red-100 border-red-700 hover:bg-red-500"
                : "text-blue-400 border-blue-400 hover:bg-blue-100"
            } `}
          >
            {time}
          </button>

          {isAppointmentSet && (
            <div data-tip="Appointment Scheduled">
              <Checked />
              <ReactTooltip />
            </div>
          )}
        </div>
      )}
    </li>
  );
}

export default TimeSlot;
