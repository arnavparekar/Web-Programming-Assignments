import React from 'react';
import Child from './Child';

function Parent() {
  return (
    <div style={{
      padding: '20px',
      margin: '20px',
      border: '1px solid #ddd',
      borderRadius: '5px'
    }}>
      <h2>Parent Component</h2>
      <Child message="Hello from Parent!" />
    </div>
  );
}

export default Parent;