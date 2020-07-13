import React, {useContext} from 'react';

import Context from "./store/Context";

import Login from "./components/auth/Login";
import ProjectsList from "./components/projects/ProjectsList";



function App() {

  const {authState: {isLoggedIn}} = useContext(Context);

  return (
    <div className="App">
      {isLoggedIn ?
        <ProjectsList />
        : <Login />
      }
      
    </div>
  );
}

export default App;
