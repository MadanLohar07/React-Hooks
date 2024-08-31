import { useReducer } from "react";

function Counter() {
  const initialState = {
    count: 0,
    error: null,
  };

  const reducer = (initialState, action) => {
    switch (action) {
      case "increment": {
        const newCount = initialState.count + 1;
        const hasError = newCount > 5;
        return {
          ...initialState,
          count: hasError ? initialState.count : newCount,
          error: hasError ? "Maximum reached" : null,
        };
      }

      case "decrement": {
        const newCount = initialState.count - 1;
        const hasError = newCount < 0;
        return {
          ...initialState,
          count: hasError ? initialState.count : newCount,
          error: hasError ? "Minimum reached" : null,
        };
      }

      default: {
        return initialState;
      }
    }
  };

  const [state, dispatch] = useReducer(reducer, initialState);

  return (
    <>
      <h2>Counter using useReducer hook</h2>
      <h3> Count : {state.count} </h3>
      <p>{state.error}</p>
      <button
        onClick={() => {
          dispatch("increment");
        }}
      >
        Increment
      </button>
      <button
        onClick={() => {
          dispatch("decrement");
        }}
      >
        Decrement
      </button>
    </>
  );
}

export default Counter;
