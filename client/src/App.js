import "./App.css";
import { Switch, Route, Redirect } from "react-router-dom";
import Homepage from "./pages/Homepage";

//* Import Components
// import Test from "./components/Test";
import Navbar from "./components/navbar/Navbar";

function App() {
  return (
    <div className="App">
      <Navbar />
      {/* <Test /> */}
      <div className="pt-14">
        <Switch>
          <Route exact path="/">
            <Homepage />
          </Route>
          <Route path="/login"></Route>
          <Route path="/signup"></Route>
          <Route path="/trivia/new"></Route>
          <Route path="/trivia/:triviaId/play"></Route>
          <Route path="/trivia/:triviaId/results"></Route>
          <Route path="/trivia/:triviaId/edit"></Route>
          {/* View Quiz Page */}
          <Route path="/trivia/:triviaId"></Route>
          <Route path="/user/:username/myQuizzes"></Route>
          {/* User Profile */}
          <Route path="/user/:username"></Route>
          <Route>
            <Redirect to="/" />
          </Route>
        </Switch>
      </div>
    </div>
  );
}

export default App;
