import { SUBMIT_INVOICE } from "../Actions/Types";

const initialState = {
  invoice: {},
};

const totalData = (state = initialState, action) => {
  const { type, payload } = action;
  switch (type) {
    case SUBMIT_INVOICE:
      return { ...state, invoice: payload };

    default:
      return state;
  }
};

export default totalData;
