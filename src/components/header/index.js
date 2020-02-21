import React from "react";
import "./index.css";
import logo from "./images/logo.svg";

export class Header extends React.PureComponent {
  render() {
    return (
      <header className="main-header">
        <img src={logo} alt="logo" className="main-logo"></img>
      </header>
    );
  }
}

export default Header;
