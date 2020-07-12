import React, {useContext} from 'react';
import Context from "./store/Context";

function App() {

  const {test} = useContext(Context);

  return (
    <div className="App">
      {test}
    </div>
  );
}

export default App;
