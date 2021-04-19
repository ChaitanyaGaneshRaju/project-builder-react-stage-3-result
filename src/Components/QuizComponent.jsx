import React, { Component } from "react";
import "../Css/QuizComponent.css";
import questions from "../questions.json";
import history from "./history";
import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";

class QuizComponent extends Component {
  constructor() {
    super();
    this.state = {
      rightAnswers: 0,
      wrongAnswers: 0,
      currentQuestion: 0,
      questions: [...questions],
      attemptedAnswers: [],
    };
  }
  answer = (e) => {
    //two variable to hold weather answer is right or wrong
    let rightAnswer = 0;
    let wrongAnswer = 0;

    //temporary array for holding the answers
    if (
      this.state.questions[this.state.currentQuestion].answer !==
      e.target.innerText
    ) {
      wrongAnswer = 1;
      toast.error("Wrong answer!", {
        position: "top-right",
        autoClose: 2000,
        hideProgressBar: true,
        closeOnClick: true,
        pauseOnHover: true,
        draggable: true,
        progress: undefined,
      });
    } else {
      rightAnswer = 1;
      toast.success("Right answer!", {
        position: "top-right",
        autoClose: 2000,
        hideProgressBar: true,
        closeOnClick: true,
        pauseOnHover: true,
        draggable: true,
        progress: undefined,
      });
    }

    let array = this.state.attemptedAnswers;
    //updating the answers entered by the user into the temparory array with the index of the current question
    array[this.state.currentQuestion] = e.target.innerText;

    this.next();
    //changing the state questions with the temporary array
    this.setState({
      attemptedAnswers: array,
      rightAnswers: this.state.rightAnswers + rightAnswer,
      wrongAnswers: this.state.wrongAnswers + wrongAnswer,
    });
  };
  stopQuiz=()=>{
    //Filtering the attempted answers and removing empty one (not answered ones)
    const attemptedAnswersFiltered = this.state.attemptedAnswers.filter(
      (answer) => {
        return answer !== "";
      }
    );
    let params = new URLSearchParams();
    params.append("attemptedAnswers", attemptedAnswersFiltered.length);
    params.append("rightAnswers", this.state.rightAnswers);
    params.append("wrongAnswers", this.state.wrongAnswers);
    var url = "/result?" + params.toString();
    history.push(url);
  }
  next = () => {
    if (this.state.currentQuestion < this.state.questions.length - 1) {
      this.setState({ currentQuestion: this.state.currentQuestion + 1 });
    } else {
      this.stopQuiz();
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
            <button id="clear" onClick={()=>this.stopQuiz()}>Quit</button>
          </div>
          <ToastContainer
            position="top-right"
            autoClose={5000}
            hideProgressBar={false}
            newestOnTop={false}
            closeOnClick
            rtl={false}
            pauseOnFocusLoss
            draggable
            pauseOnHover
          />
          {/* Same as */}
          <ToastContainer />
        </div>
      </div>
    );
  }
}

export default QuizComponent;
