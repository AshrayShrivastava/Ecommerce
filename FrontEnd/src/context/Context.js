import { createContext, useContext} from "react";
import { useState} from "react";

const CommonContext = createContext();

const Context = ({ children }) => {

  const [user, setUser]=useState({
    "role": '', "userId": -1, "userName": ''
  });
  const [login, setLogin]=useState(false);

  const UpdateLogin = () => {
    setLogin(true);
  };

  const updateUser = (loginUser) => {
    console.log(loginUser);
    setUser(loginUser);
  };
    return (
      <CommonContext.Provider value={{user, updateUser, login, UpdateLogin}}>
        {children}
      </CommonContext.Provider>
    );
  };
  
  export const ContextState = () => {
    return useContext(CommonContext);
  };
  
  export default Context;
