import React from "react";
import logo from "./logo.svg";
import "./App.css";
import { useDispatch, useSelector } from "react-redux";
import * as actionCreators from "./Redux/action-creators";
import { bindActionCreators } from "redux";
import { State } from './Redux/reducers'

function App() {
  const dispatch = useDispatch();
  const { depositMoney, withdrawMoney, bankruptMoney } = bindActionCreators(
    actionCreators,
    dispatch
  );
  const bankstate = useSelector((state: State) => state.bank);

  return (
    <div className="App">
      <h1>Bank state: {bankstate}</h1>
      <button onClick={()=> depositMoney(1000)}>Deposit</button>
      <button onClick={()=> withdrawMoney(100)}>Withdraw</button>
      <button onClick={bankruptMoney}>Bankrupt</button>
    </div>
  );
}

export default App;
