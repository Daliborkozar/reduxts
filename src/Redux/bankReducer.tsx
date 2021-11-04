import { Action } from "./actions/index";

const initialState = 0;
// Action look
// {
//     type: string,
//     payload?: number
// }
// type Action won't work since we have different action
// type Action = {
//     type: string,
//     payload?: number
// }

// Interface for every action

const reducer = (state: number = initialState, action: Action) => {
  switch (action.type) {
    case "DEPOSIT":
      return state + action.payload;
    case "WITHDRAW":
      return state - action.payload;
    case "BANKRUPT":
      return 0;
    default:
      return state;
  }
};

export default reducer;
