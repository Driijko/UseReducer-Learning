import React, {useState} from "react";

export default function Login(props) {

  // LOCAL STATE ///////////////////////////////////////////////////////////////////////
  const [userName, setUserName] = useState("");
  const [password, setPassword] = useState("");

  // EVENTS ////////////////////////////////////////////////////////////////////////////
  function handleSubmit(e) {
    e.preventDefault();
    console.log(userName, password);
    setUserName("");
    setPassword("");
  }

  function handleChange(e) {
    if(e.target.id === "usernameField") {
      setUserName(e.target.value);
    }
    else if (e.target.id === "passwordField") {
      setPassword(e.target.value);
    }
  }

  // RENDER /////////////////////////////////////////////////////////////////////////////////
  return (
    <div>
      <form onSubmit={handleSubmit}>
        <input id="usernameField" type="text" value={userName} placeholder="username" onChange={handleChange} />
        <input id="passwordField" type="password" value={password} placeholder="password" onChange={handleChange} />
        <button>Login</button>
      </form>
    </div>
  )

}