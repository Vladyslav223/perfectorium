import React, { Component } from "react";

import "./index.scss";



class Menu extends Component {
state = {
  collapse: false,
}

clickHandle = () => {
  this.setState(prevState => ({
    collapse: !prevState.collapse,
  }));
}

  render() {
    const { collapse } = this.state;
    const disableCollapse = collapse ? "menu__points" : "menu__points-disabled";
    return (
      <div className="menu">
        <img onClick={this.clickHandle} className={collapse ? "menu__icon menu__collapse-button" : "menu__icon menu__collapse-button menu__scaled"} alt="menu icon" src="../icons/collapse.png"/>
        <div className={!collapse ? "menu__collapse menu__collapse-collapsed" : "menu__collapse"}>
          <div className="menu__icons-wrap">
            <div className={!collapse ? "menu__icon-wrapper" : "menu__icon-wrapper-collapsed"}><img className="menu__icon" alt="menu icon" src="../icons/1.png"/></div>
            <div className="menu__icon-wrapper"><img className="menu__icon" alt="menu icon" src="../icons/2g.png"/></div>
            <div className="menu__icon-wrapper"><img className="menu__icon" alt="menu icon" src="../icons/3g.png"/></div>
            <div className="menu__icon-wrapper"><img className="menu__icon" alt="menu icon" src="../icons/4g.png"/></div>
            <div className="menu__icon-wrapper"><img className="menu__icon" alt="menu icon" src="../icons/5g.png"/></div>
            <div className="menu__icon-wrapper"><img className="menu__icon" alt="menu icon" src="../icons/6g.png"/></div>
          </div>
          <div className="menu__points-wrap">
            <p className={disableCollapse}>Point 1</p>
            <p className={disableCollapse}>Point 2</p>
            <p className={disableCollapse}>Point 3</p>
            <p className={disableCollapse}>Point 4</p>
            <p className={disableCollapse}>Point 5</p>
            <p className={disableCollapse}>Point 6</p>
          </div>
          
       </div>
      </div>
    );
  }
}

export default Menu;