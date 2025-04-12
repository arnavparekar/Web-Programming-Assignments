import React from 'react';

function Header({ title }) {
  return (
    <header style={{ 
      backgroundColor: '#333', 
      color: 'white', 
      padding: '1rem', 
      textAlign: 'center' 
    }}>
      <h1>{title}</h1>
    </header>
  );
}

export default Header;