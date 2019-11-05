import React, { Component } from "react";
import "../styles/navbar.scss";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faBeer, faWineGlassAlt } from "@fortawesome/free-solid-svg-icons";

export class Navbar extends Component {
  constructor(props) {
    super(props);
    this.state = {
      active: "beer"
    };
  }

  setActive = e => {
    this.setState({ active: e.target.className });
  };
  render() {
    return (
      <div className="navbar">
        <div className="beer" onClick={this.setActive}>
          <FontAwesomeIcon
            icon={faBeer}
            color={this.state.active === "beer" ? "rgb(242,142,28)" : "white"}
            size={"3x"}
          />
        </div>
        <div className="wine" onClick={this.setActive}>
          <FontAwesomeIcon
            icon={faWineGlassAlt}
            color={this.state.active === "wine" ? "rgb(114, 47, 55)" : "white"}
            size={"3x"}
          />
        </div>
      </div>
    );
  }
}

export default Navbar;
