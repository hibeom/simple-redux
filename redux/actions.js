import { INCREMENT } from "./constants";

export function increment() {
  return (dispatch) => {
    dispatch({ type: INCREMENT });
  };
}
