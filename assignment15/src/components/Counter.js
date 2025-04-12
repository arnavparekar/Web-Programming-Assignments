import React, { useState, useReducer } from 'react';

// Counter with useState
function CounterWithState() {
  const [count, setCount] = useState(0);

  const increment = () => {
    setCount(count + 1);
  };

  const decrement = () => {
    setCount(count - 1);
  };

  return (
    <div style={{ margin: '20px' }}>
      <h2>Counter with useState</h2>
      <p>Count: {count}</p>
      <button onClick={increment}>Increase</button>
      <button onClick={decrement} style={{ marginLeft: '10px' }}>Decrease</button>
    </div>
  );
}

// Counter with useReducer
function CounterWithReducer() {
  // Reducer function
  const reducer = (state, action) => {
    switch (action.type) {
      case 'INCREMENT':
        return { count: state.count + 1 };
      case 'DECREMENT':
        return { count: state.count - 1 };
      default:
        return state;
    }
  };

  const [state, dispatch] = useReducer(reducer, { count: 0 });

  return (
    <div style={{ margin: '20px' }}>
      <h2>Counter with useReducer</h2>
      <p>Count: {state.count}</p>
      <button onClick={() => dispatch({ type: 'INCREMENT' })}>Increase</button>
      <button onClick={() => dispatch({ type: 'DECREMENT' })} style={{ marginLeft: '10px' }}>Decrease</button>
    </div>
  );
}

// Combined component
function Counter() {
  return (
    <div style={{
      padding: '20px',
      margin: '20px',
      border: '1px solid #ddd',
      borderRadius: '5px'
    }}>
      <h2>State Hooks Example</h2>
      <CounterWithState />
      <hr />
      <CounterWithReducer />
    </div>
  );
}

export default Counter;