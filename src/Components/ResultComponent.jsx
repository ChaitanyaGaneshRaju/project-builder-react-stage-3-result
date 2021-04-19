import React, { Component } from "react";
import "../Css/ResultComponent.css";
import { Link } from "react-router-dom";

class ResultComponent extends Component {
  render() {
    var params = new URLSearchParams(window.location.search),
      attemptedAnswers = params.get("attemptedAnswers"),
      rightAnswers = params.get("rightAnswers"),
      wrongAnswers = params.get("wrongAnswers");
    return (
      <div className="result-component">
        <i className="far fa-check-circle check-mark"></i>
        <h2 id="result">Result</h2>
        <div className="result-white-panel">
          <h1>Your score: {Math.ceil((rightAnswers * 100) / 15)}%</h1>
          <div id="details">
            <div className="info">
              <p>Total number of questions:</p>
              <p>Number of attempted questions:</p>
              <p>Number of correct answers:</p>
              <p>Number of wrong answes:</p>
            </div>
            <div className="score">
              <p>15</p>
              <p>{attemptedAnswers}</p>
              <p>{rightAnswers}</p>
              <p>{wrongAnswers}</p>
            </div>
          </div>
        </div>

        <div className="buttons">
          <button id="play">
            <Link to="/quiz">Play again</Link>
          </button>
          <button id="back">
            <Link to="/">Back to home</Link>
          </button>
        </div>
      </div>
    );
  }
}

export default ResultComponent;
