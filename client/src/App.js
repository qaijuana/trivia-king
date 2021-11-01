import "./App.css";
import { Switch, Route, Redirect } from "react-router-dom";

//* Import Components
// import Test from "./components/Test";
import Navbar from "./components/navbar/Navbar";

function App() {
  return (
    <div className="App">
      <Navbar />
      {/* <Test /> */}
      <Switch>
        <Route exact path="/"></Route>
        <Route path="/login"></Route>
        <Route path="/signup"></Route>
        <Route path="/quiz/new"></Route>
        <Route path="/quiz/:quizId/play"></Route>
        <Route path="/quiz/:quizId/results"></Route>
        <Route path="/quiz/:quizId/edit"></Route>
        {/* View Quiz Page */}
        <Route path="/quiz/:quizId"></Route>
        <Route path="/user/:username/myQuizzes"></Route>
        {/* User Profile */}
        <Route path="/user/:username"></Route>
        <Route>
          <Redirect to="/" />
        </Route>
      </Switch>
    </div>
  );
}

export default App;
