function updateLocalStorage(updatedState) {
  localStorage.setItem("store", JSON.stringify(updatedState));
}

export const initialState = {
  isSlotClickable: true,
  activeSlot: "",
  slots: [],
};

export default function reducer(state = initialState, action) {
  let updatedState = state;
  switch (action.type) {
    case "SET_STORE":
      return { ...state, slots: action.payload };

    case "SET_CONFIRMATION": {
      const { id, getConfirmation, isSlotClickable } = action.payload;
      const slots = state.slots.map((slot) => {
        if (slot.id === id) {
          return { ...slot, getConfirmation };
        }
        return slot;
      });
      updatedState = { ...state, slots, isSlotClickable };
      break;
    }
    case "CREATE_APPOINTMENT": {
      const { activeSlot, id } = action.payload;
      const slots = state.slots.map((slot) => {
        if (slot.id === id) {
          return { ...slot, getConfirmation: false };
        }
        return slot;
      });
      updatedState = { ...state, slots, activeSlot, isSlotClickable: true };
      break;
    }
    case "SAVE_APPOINTMENT": {
      const { time, firstname, lastname, phone } = action.payload;
      const slots = state.slots.map((slot) => {
        if (slot.time === time) {
          return {
            ...slot,
            isAppointmentSet: true,
            appointmentInfo: { firstname, lastname, phone },
          };
        }
        return slot;
      });
      updatedState = { ...state, isSlotClickable: true, activeSlot: "", slots };
      break;
    }
    case "DELETE_APPOINTMENT": {
      const { time } = action.payload;
      const slots = state.slots.map((slot) => {
        if (slot.time === time) {
          return {
            ...slot,
            isAppointmentSet: false,
            appointmentInfo: { firstname: "", lastname: "", phone: "" },
          };
        }
        return slot;
      });
      updatedState = { ...state, isSlotClickable: true, activeSlot: "", slots };
      break;
    }
    case "UNSET_APPOINTMENT": {
      updatedState = { ...state, activeSlot: "" };
      break;
    }
    default:
      return updatedState;
  }
  updateLocalStorage(updatedState);
  return updatedState;
}
