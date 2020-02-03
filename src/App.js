import React from 'react';
import './App.css';
import 'normalize.css';
import Steps from "./components/Steps";
import Bottom from "./components/Bottom";
import Menu from "./components/Menu";

function App() {
  return (
    <div className="App">
      <Steps/>
      <Bottom/>
      <Menu/>
    </div>
  );
}

export default App;
