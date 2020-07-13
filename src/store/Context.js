import React, {createContext, useReducer} from "react";

import {authReducer} from "./data/auth";
import {initAuthState} from "./data/auth";

const Context = createContext();

function ContextProvider(props) {

  const [state, dispatchAuth] = useReducer(authReducer, initAuthState);

  return (
    <Context.Provider value={{}} >
      {props.children}
    </Context.Provider>
  )
}

export default Context;
export {ContextProvider};