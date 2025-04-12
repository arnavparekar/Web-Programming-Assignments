import React, { useRef } from 'react';

function RefFormExample() {
  const inputRef = useRef(null);

  const focusInput = () => {
    // Focus the input element
    inputRef.current.focus();
  };

  return (
    <div style={{
      padding: '20px',
      margin: '20px',
      border: '1px solid #ddd',
      borderRadius: '5px'
    }}>
      <h2>useRef Example</h2>
      
      <form>
        <div style={{ margin: '15px 0' }}>
          <label htmlFor="inputField">Enter Text: </label>
          <input
            type="text"
            id="inputField"
            ref={inputRef}
            style={{
              padding: '8px',
              margin: '0 10px',
              borderRadius: '4px',
              border: '1px solid #ddd'
            }}
          />
        </div>
        
        <button
          type="button"
          onClick={focusInput}
          style={{
            padding: '10px 20px',
            backgroundColor: '#4CAF50',
            color: 'white',
            border: 'none',
            borderRadius: '4px',
            cursor: 'pointer'
          }}
        >
          Focus Input
        </button>
      </form>
      
      <p style={{ marginTop: '15px' }}>
        Click the button to focus on the input field using useRef.
      </p>
    </div>
  );
}

export default RefFormExample;