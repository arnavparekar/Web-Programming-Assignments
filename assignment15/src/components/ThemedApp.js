import React, { useContext } from 'react';
import ThemeContext from './ThemeContext';
import ThemeProvider from './ThemeProvider';

function ThemedComponent() {
  const { theme, toggleTheme } = useContext(ThemeContext);
  
  const styles = {
    container: {
      backgroundColor: theme === 'light' ? '#ffffff' : '#333333',
      color: theme === 'light' ? '#333333' : '#ffffff',
      padding: '20px',
      minHeight: '200px',
      transition: 'all 0.3s ease'
    },
    button: {
      padding: '10px 20px',
      backgroundColor: theme === 'light' ? '#4CAF50' : '#2d6930',
      color: 'white',
      border: 'none',
      borderRadius: '4px',
      cursor: 'pointer'
    }
  };
  
  return (
    <div style={styles.container}>
      <h2>Current Theme: {theme}</h2>
      <p>
        This component uses the useContext hook to access the current theme and toggle function.
      </p>
      <button style={styles.button} onClick={toggleTheme}>
        Toggle Theme
      </button>
    </div>
  );
}

function ThemedApp() {
  return (
    <div style={{
      padding: '20px',
      margin: '20px',
      border: '1px solid #ddd',
      borderRadius: '5px'
    }}>
      <h2>Theme Context Example</h2>
      <ThemeProvider>
        <ThemedComponent />
      </ThemeProvider>
    </div>
  );
}

export default ThemedApp;