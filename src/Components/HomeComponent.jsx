import React, { Component } from "react";
import "../Css/HomeComponent.css";
import {Link} from 'react-router-dom';

class HomeComponent extends Component {
  render() {
    return (
      <div>
        <div className="home-component">
          <h1>Quiz App</h1>
          <Link id="play-button" to="/quiz">PLAY</Link>
        </div>
      </div>
    );
  }
}

export default HomeComponent;
