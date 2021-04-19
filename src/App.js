import "./App.css";
import HomeComponent from "./Components/HomeComponent";
import QuizComponent from "./Components/QuizComponent";
import ResultComponent from "./Components/ResultComponent"
import { Router, Route, Switch } from "react-router-dom";
import history from "./Components/history";

function App() {
  return (
    <div className="App">
      <Router history={history}>
        <Switch>
          <Route exact path="/">
            <HomeComponent />
          </Route>
          <Route exact path="/quiz">
            <QuizComponent/>
          </Route>
          <Route exact path="/result">
            <ResultComponent/>
          </Route>
        </Switch>
      </Router>
    </div>
  );
}

export default App;
