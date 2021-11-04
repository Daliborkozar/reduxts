import { ActionType } from "../action-types";
import { Action } from "../actions/index";
// import Dispatch type from redux
import { Dispatch } from "redux";

export const depositMoney = (amount: number) => {
  return (dispatch: Dispatch) => {
    dispatch({
      type: ActionType.DEPOSIT,
      payload: amount,
    });
  };
};

export const withdrawMoney = (amount: number) => {
  return (dispatch: Dispatch) => {
    dispatch({ type: ActionType.WITHDRAW, payload: amount });
  };
};

export const bankruptMoney = () => {
  return (dispatch: Dispatch) => {
    dispatch({
      type: ActionType.BANKRUPT,
    });
  };
};
