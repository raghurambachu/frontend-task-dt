import React, { useContext } from "react";
import { Formik } from "formik";
import * as Yup from "yup";
import { ImArrowLeft2 } from "react-icons/im";
import { AiFillDelete } from "react-icons/ai";

import InputItem from "./InputItem";
import AppContext from "../context/AppContext";

function AppointmentForm() {
  const { store, dispatch } = useContext(AppContext);
  const time = store.activeSlot;
  const slot = store.slots.find((slot) => slot.time === time);
  const { firstname, lastname, phone } = slot.appointmentInfo;

  //   Handling form submit
  function handleSubmit(values, _actions) {
    dispatch({ type: "SAVE_APPOINTMENT", payload: { time, ...values } });
  }

  return (
    <div className="col-span-3 md:col-span-2 create-appt-form">
      <div className="flex items-end justify-between px-8">
        <h2 className="mt-8 text-2xl font-bold text-gray-700 ">
          Enter Details
        </h2>
        <div className="flex space-x-2">
          <div
            onClick={() => dispatch({ type: "UNSET_APPOINTMENT" })}
            className="p-2 bg-gray-200 rounded-full cursor-pointer hover:bg-gray-400 "
          >
            <ImArrowLeft2 size={20} />
          </div>
          <div
            onClick={() =>
              dispatch({ type: "DELETE_APPOINTMENT", payload: { time } })
            }
            className="p-2 bg-gray-200 rounded-full cursor-pointer hover:bg-gray-400 "
          >
            <AiFillDelete size={20} />
          </div>
        </div>
      </div>

      <Formik
        initialValues={{
          firstname,
          lastname,
          phone,
        }}
        validationSchema={validateAppointmentForm}
        onSubmit={handleSubmit}
      >
        {(formik) => (
          <form onSubmit={formik.handleSubmit} className="w-full px-8 py-5 ">
            <InputItem
              label="First Name"
              width="w-full"
              name="firstname"
              placeholder="Enter first name"
              formik={formik}
            />

            <InputItem
              label="Last Name"
              name="lastname"
              width="w-full"
              placeholder="Enter last name"
              formik={formik}
            />
            <InputItem
              label="Phone"
              name="phone"
              width="w-full"
              placeholder="Enter 10 digit number"
              formik={formik}
            />

            <div className="flex justify-between buttons">
              <button
                type="button"
                onClick={() => dispatch({ type: "UNSET_APPOINTMENT" })}
                className="p-3 px-10 my-5 text-sm font-bold text-gray-100 bg-gray-500 rounded-full focus:outline-none hover:bg-gray-600 md:px-8 lg:px-10 xl:px-16 "
              >
                Cancel
              </button>
              <button
                className="p-3 px-10 my-5 text-sm font-bold text-blue-100 bg-blue-500 rounded-full focus:outline-none hover:bg-blue-600 md:px-8 lg:px-10 xl:px-16 "
                type="submit"
              >
                Save
              </button>
            </div>
          </form>
        )}
      </Formik>
    </div>
  );
}

function validateAppointmentForm() {
  return Yup.object({
    firstname: Yup.string()
      .min(2, "Must be 4 characters or more")
      .required("Required"),
    lastname: Yup.string()
      .min(2, "Must be 4 characters or more")
      .required("Required"),
    phone: Yup.string()
      .matches(/^[6-9]\d{9}/, "Shud start with 6,7,8,9 & 10 digit long")

      .required("Required"),
  });
}

export default AppointmentForm;
