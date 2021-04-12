import "./App.css";
import HomeComponent from "./Components/HomeComponent";
import QuizComponent from "./Components/QuizComponent";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";

function App() {
  return (
    <div className="App">
      <Router>
        <Switch>
          <Route exact path="/">
            <HomeComponent />
          </Route>
          <Route exact path="/quiz">
            <QuizComponent/>
          </Route>
        </Switch>
      </Router>
    </div>
  );
}

export default App;
