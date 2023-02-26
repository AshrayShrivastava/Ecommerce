import { createContext, useContext, useReducer } from "react";
import { useState, useEffect } from "react";

const CommonContext = createContext();

const Context = ({ children }) => {
    
    const [showLogin, setShowLogin] = useState(false);
    const [showSignup, setShowSignup] = useState(false);
    const handleCloseLogin = () => setShowLogin(false);
    
    const products = [
        {
          id: 1,
          name: "IPhone",
          price: 999.0,
          quantity: 100
        },
        {
          id: 2,
          name: "Macbook Pro 2022 (M1)",
          price: 1999.0,
          quantity: 100
        },
        {
          id: 3,
          name: "Cannon M50 Camera",
          price: 699.0,
          quantity: 100
        },
        {
          id: 4,
          name: "WLS Van Gogh Denim Jacket",
          price: 228.0,
          quantity: 100
        },
        {
          id: 5,
          name: "LED Light Strips",
          price: 19.99,
          quantity: 100
        },
        {
          id: 6,
          productName: "SPECTRUM LS TEE",
          price: 68.0,
          quantity: 100
        },
        {
          id: 7,
          name: "AUTO SERVICE SHIRT by GOLF WANG",
          price: 120.0,
          quantity: 100
        },
        {
          id: 8,
          name: "DON'T TRIP UNSTRUCTURED HAT",
          price: 40.0,
          quantity: 100
        },
      ];
        const [myState, setMyState] = useState(false);

        // Define a callback function that updates the state of the context provider
        const updateState = (newState) => {
            setMyState(newState);
        };
        const handleShowLogin = (newState) => {
            setShowLogin(newState);
        }
    return (
      <CommonContext.Provider value={{ showLogin, setShowLogin, handleShowLogin, handleCloseLogin, showSignup, setShowSignup, products, myState, updateState}}>
        {children}
      </CommonContext.Provider>
    );
  };
  
  export const ContextState = () => {
    return useContext(CommonContext);
  };
  
  export default Context;
