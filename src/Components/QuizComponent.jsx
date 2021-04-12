import React, { Component } from "react";
import "../Css/QuizComponent.css";
import questions from "../questions.json";



class QuizComponent extends Component {
  constructor() {
    super();
    this.state = {
      currentQuestion: 0,
      questions: [...questions],
      answers: [],
    };
  }
  answer = (e) => {
    //temporary array for holding the answers
    let array = this.state.answers;
    //updating the answers entered by the user into the temparory array with the index of the current question
    array[this.state.currentQuestion] = e.target.innerText;

    this.next();
    //changing the state questions with the temporary array
    this.setState({ answers: array });
  };
  next = () => {
    if (this.state.currentQuestion < this.state.questions.length - 1) {
      this.setState({ currentQuestion: this.state.currentQuestion + 1 });
    }
    else{

    }
  };
  previous = () => {
    if (this.state.currentQuestion > 0)
      this.setState({ currentQuestion: this.state.currentQuestion - 1 });
  };
  render() {
    return (
      <div className="quiz-component">
        <div className="white-panel">
          <div className="question-panel">
            <h1>Question</h1>
            <div>
              <p>
                {this.state.currentQuestion + 1} of{" "}
                {this.state.questions.length}
              </p>
              <p>{this.state.questions[this.state.currentQuestion].question}</p>
            </div>
          </div>
          <div className="option-panel">
            <button onClick={(e) => this.answer(e)}>
              {this.state.questions[this.state.currentQuestion].options[0]}
            </button>
            <button onClick={(e) => this.answer(e)}>
              {this.state.questions[this.state.currentQuestion].options[1]}
            </button>
            <button onClick={(e) => this.answer(e)}>
              {this.state.questions[this.state.currentQuestion].options[2]}
            </button>
            <button onClick={(e) => this.answer(e)}>
              {this.state.questions[this.state.currentQuestion].options[3]}
            </button>
          </div>
          <div className="button-panel">
            <button id="previous" onClick={() => this.previous()}>
              Previous
            </button>
            <button id="next" onClick={() => this.next()}>
              Next
            </button>
            <button id="clear">Clear</button>
          </div>
        </div>
      </div>
    );
  }
}

export default QuizComponent;
