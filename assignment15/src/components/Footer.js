import React from 'react';

function Footer() {
  return (
    <footer style={{ 
      backgroundColor: '#333', 
      color: 'white', 
      padding: '1rem', 
      textAlign: 'center',
      position: 'fixed',
      bottom: '0',
      width: '100%'
    }}>
      <p>© 2025 React Demo App. All rights reserved.</p>
    </footer>
  );
}

export default Footer;