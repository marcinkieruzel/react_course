import { Action } from "@remix-run/router";
import React, { useReducer } from "react";



type A  = {
  name: string;
}

type B  = {
  name: string
}

const a : A = { name: "a" };

const b : B = { name: "b" };

function func(a: A) {
  return a;
}

func(a)
func(b)



enum ActionType {
  FACTORIAL = "FACTORIAL",
  SQRT = "SQRT",
  ADD = "ADD",
  RESET = "RESET",
}

const reducer = (state, action : {
  type: ActionType,
  payload?: number
}) => {
  if (action.type === ActionType.FACTORIAL) {
    console.log(action);
    return { result: factorialize(state.result) };
  }

  if (action.type === ActionType.SQRT) {
    console.log(action);
    return { result: Math.sqrt(state.result) };
  }

  if (action.type === ActionType.ADD) {
    console.log(action);
    return { result: state.result + 1 };
  }

  if (action.type === ActionType.RESET) {
    console.log(action);
    return init(action.payload);
  }

  return state;
};

function factorialize(num) {
  if (num < 0) return -1;
  else if (num == 0) return 1;
  else {
    return num * factorialize(num - 1);
  }
}

const initialValue = 1;

const init = (val) => ({ result: val });

const Usereducer: React.FC = (): JSX.Element => {
  const [state, dispatch] = useReducer(reducer, initialValue, init);

  return (
    <div>
      <h1>Result: {state.result}</h1>
      <button onClick={() => dispatch({ type: ActionType.FACTORIAL })}>factorial</button>
      <button onClick={() => dispatch({ type: ActionType.ADD })}>add</button>
      <button onClick={() => dispatch({ type: ActionType.SQRT })}>sqrt</button>
      <button
        onClick={() => dispatch({ type: ActionType.RESET, payload: initialValue })}
      >
        reset
      </button>
    </div>
  );
};

export default Usereducer;
