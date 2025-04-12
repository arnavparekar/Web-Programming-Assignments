import React from 'react';

function StyledButton({ children, onClick }) {
  // Inline CSS styling
  const buttonStyle = {
    backgroundColor: '#4CAF50',
    color: 'white',
    padding: '12px 24px',
    fontSize: '16px',
    border: 'none',
    borderRadius: '4px',
    cursor: 'pointer',
    margin: '10px',
    boxShadow: '0 2px 5px rgba(0,0,0,0.2)'
  };

  return (
    <button style={buttonStyle} onClick={onClick}>
      {children}
    </button>
  );
}

export default StyledButton;
