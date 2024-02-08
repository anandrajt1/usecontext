import React, { createContext, useContext } from 'react';
import './App.css';



function App() {

 
// Create a context
const ThemeContext = createContext('light');

// Component where we use the context
const ThemedComponent = () => {
  // Consume the context using useContext hook
  const theme = useContext(ThemeContext);
  
  return (
    <div style={{ backgroundColor: theme === 'dark' ? 'black' : 'white', color: theme === 'dark' ? 'white' : 'black' ,textAlign:'center',marginTop:'100px',fontSize:'33px'}}>
      The current theme is {theme}.
    </div>
  );
};


  return(

    <ThemeContext.Provider value="dark">
      <ThemedComponent />
    </ThemeContext.Provider>
  )
  



  
}

export default App;
