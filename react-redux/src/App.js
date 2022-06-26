import "./App.css";
import { useState } from "react";
import { legacy_createStore as createStore } from "redux";

import { Provider, useSelector, useDispatch, connect } from "react-redux";

function reducer(currentState, action) {
  if (currentState === undefined) {
    return {
      number: 1,
    };
  }
  const newState = { ...currentState };
  if (action.type === "PLUS") {
    newState.number++;
  }

  return newState;
}
const store = createStore(reducer);

function App() {
  return (
    <div className="App">
      <div id="container">
        <h1>Root : </h1>
        <div id="grid">
          <Provider store={store}>
            <Left1 />
            <Right1 />
          </Provider>
        </div>
      </div>
    </div>
  );
}
function Left1({ number }) {
  return (
    <div>
      <h1>Left1:{number}</h1>
      <Left2 />
    </div>
  );
}

function Left2() {
  console.log("2");
  return (
    <div>
      <h1>Left2</h1>
      <Left3 />
    </div>
  );
}
function Left3() {
  console.log("3");
  const number = useSelector((state) => state.number);
  return (
    <div>
      <h1>Left3 : {number}</h1>
    </div>
  );
}
function Right1() {
  return (
    <div>
      <h1>Right1</h1>
      <Right2 />
    </div>
  );
}
function Right2() {
  return (
    <div>
      <h1>Right1</h1>
      <Right3 />
    </div>
  );
}
function Right3() {
  const dispatch = useDispatch();
  return (
    <div>
      <h1>Right3</h1>
      <input
        type="button"
        value="+"
        onClick={() => {
          dispatch({ type: "PLUS" });
        }}
      />
    </div>
  );
}
export default App;
