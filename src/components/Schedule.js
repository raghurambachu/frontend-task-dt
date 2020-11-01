import React from "react";
import { useContext } from "react";
import AppContext from "../context/AppContext";
import TimeSlot from "./Timeslot";

function Schedule() {
  const { store } = useContext(AppContext);
  return (
    <div className="col-span-3 p-8  md:col-span-2">
      <h3 className="text-xl font-semibold">
        Today, {new Date().toDateString().split(" ").slice(1, 3).join(" ")}
      </h3>
      <ul className="mt-4 space-y-2">
        {store?.slots?.map((slot) => (
          <TimeSlot key={slot.id} slot={slot} />
        ))}
      </ul>
    </div>
  );
}

export default Schedule;
