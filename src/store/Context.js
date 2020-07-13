// IMPORT /////////////////////////////////////////////////////////////////////////////////
import React, {createContext, useReducer, useEffect} from "react";

import {authReducer} from "./reducers/auth";
import {initAuthState} from "./reducers/auth";

import {projectsReducer} from "./reducers/projects";
import {initProjectsState} from "./reducers/projects";



// CONTEXT ///////////////////////////////////////////////////////////////////////////////////
const Context = createContext();




function ContextProvider(props) {

  // AUTH /////////////////////////////////////////////////////////////////////
  const [authState, authDispatch] = useReducer(authReducer, initAuthState);

  // PROJECTS ///////////////////////////////////////////////////////////////
  const [projectsState, projectsDispatch] = useReducer(projectsReducer, initProjectsState);

  // TRACKING ///////////////////////////////////////////////////////////////////////////////
  // useEffect(()=> {
  //   console.log(authState);
  // },[authState])


  return (
    <Context.Provider value={{authDispatch, authState, projectsState, projectsDispatch}} >
      {props.children}
    </Context.Provider>
  )
}

export default Context;
export {ContextProvider};