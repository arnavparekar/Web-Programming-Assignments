import React, { useRef } from 'react';

function FocusInput() {
  const inputRef = useRef();

  const focus = () => inputRef.current.focus();

  return (
    <div>
      <input ref={inputRef} type="text" placeholder="Type here..." />
      <button onClick={focus}>Focus Input</button>
    </div>
  );
}

export default FocusInput;
