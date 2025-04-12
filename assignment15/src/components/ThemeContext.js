import { createContext } from 'react';

// Create a context with default values
const ThemeContext = createContext({
  theme: 'light',
  toggleTheme: () => {}
});

export default ThemeContext;