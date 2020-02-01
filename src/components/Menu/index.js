import React, { Component } from "react";

import "./index.scss";



class Menu extends Component {
state = {}

  render() {
    return (
      <div className="menu">
       <img className="menu__icon menu__collapse" alt="menu icon" src="../icons/collapse.png"/>
       <div className="menu__icon-wrapper"><img className="menu__icon" alt="menu icon" src="../icons/1.png"/></div>
       <div className="menu__icon-wrapper"><img className="menu__icon" alt="menu icon" src="../icons/2g.png"/></div>
       <div className="menu__icon-wrapper"><img className="menu__icon" alt="menu icon" src="../icons/3g.png"/></div>
       <div className="menu__icon-wrapper"><img className="menu__icon" alt="menu icon" src="../icons/4g.png"/></div>
       <div className="menu__icon-wrapper"><img className="menu__icon" alt="menu icon" src="../icons/5g.png"/></div>
       <div className="menu__icon-wrapper"><img className="menu__icon" alt="menu icon" src="../icons/6g.png"/></div>
      </div>
    );
  }
}

export default Menu;