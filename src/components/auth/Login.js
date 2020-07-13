// IMPORTS /////////////////////////////////////////////////////////////////////////////
import React, {useState, useContext} from "react";

import Context from "../../store/Context";

export default function Login(props) {

  // PERSISTENT STATE //////////////////////////////////////////////////////////////////////
  const {authDispatch, authState} = useContext(Context);
  // console.log(authState);

  // LOCAL STATE ///////////////////////////////////////////////////////////////////////
  const [userNameLocal, setUserNameLocal] = useState("");
  const [password, setPassword] = useState("");

  // EVENTS ////////////////////////////////////////////////////////////////////////////
  function handleSubmit(e) {
    e.preventDefault();
    authDispatch({type: "LOGIN", user: {name: userNameLocal, password: password}});
    setUserNameLocal("");
    setPassword("");
  }

  function handleChange(e) {
    if(e.target.id === "usernameField") {
      setUserNameLocal(e.target.value);
    }
    else if (e.target.id === "passwordField") {
      setPassword(e.target.value);
    }
  }

  // RENDER /////////////////////////////////////////////////////////////////////////////////
  return (
    <div>
      <form onSubmit={handleSubmit}>
        <input id="usernameField" type="text" value={userNameLocal} placeholder="username" onChange={handleChange} />
        <input id="passwordField" type="password" value={password} placeholder="password" onChange={handleChange} />
        <button>Login</button>
      </form>
      {authState.isLogInError ?
        <div>Incorrect username or password</div>
        : null
      }
    </div>
  )
}
///////////////////////////////////////////////////////////////////////////////////////////////////////