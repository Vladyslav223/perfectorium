import React from 'react';
import './App.css';
import Steps from "./components/Steps";
import Bottom from "./components/Bottom";
import Menu from "./components/Menu";
import Main from "./components/Main";
function App() {
  return (
    <div className="App">
      <Steps/>
      <Main/>
      <Bottom/>
      <Menu/>
    </div>
  );
}

export default App;
