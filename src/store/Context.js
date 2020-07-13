import React, {createContext, useReducer, useEffect} from "react";

import {authReducer} from "./data/auth";
import {initAuthState} from "./data/auth";

const Context = createContext();

function ContextProvider(props) {

  const [authState, authDispatch] = useReducer(authReducer, initAuthState);

  // useEffect(()=> {
  //   console.log(authState);
  // },[authState])


  return (
    <Context.Provider value={{authDispatch, authState}} >
      {props.children}
    </Context.Provider>
  )
}

export default Context;
export {ContextProvider};