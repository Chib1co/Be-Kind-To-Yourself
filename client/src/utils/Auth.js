import {createContext} from 'react';

// set the defaults
export const Auth = createContext({
  isAuthenticated: false, // User is not logged in by default
  setIsAuthenticated: () => {} // Provide a function to modify context
});
