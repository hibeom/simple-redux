import { INCREMENT } from "./constants";

const initialState = {
  count: 0,
};

export const reducer = (state = initialState, action) => {
  switch (action.type) {
    case INCREMENT:
      return { count: state.count + 1 };
    default:
      return state;
  }
};
