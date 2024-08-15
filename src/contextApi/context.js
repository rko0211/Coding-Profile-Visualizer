import React, { useContext } from 'react'

const AppContext = React.createContext();

// To create a provider function

const AppProvider = ({ children }) => {

  return (
    <AppContext.Provider value={"LEARN TIME"}>
      {/* NOw the entire application is under this provider */}
      {children}
    </AppContext.Provider>
  );
};



// Custom Hooks

const useGlobalContext = () => {
  return useContext(AppContext);
};

export { AppProvider, AppContext, useGlobalContext };