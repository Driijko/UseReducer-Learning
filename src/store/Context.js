import React, {createContext, useContext, useReducer, useState} from "react";

const Context = createContext();

function ContextProvider(props) {
  const [test, setTest] = useState("hello world");

  return (
    <Context.Provider value={{test}} >
      {props.children}
    </Context.Provider>
  )
}

export default Context;
export {ContextProvider};