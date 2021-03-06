import "./App.css";
import { Switch, Route, Redirect } from "react-router-dom";
import { useState } from "react";
import Homepage from "./pages/Homepage";
import LoginPage from "./pages/LoginPage";
import SignupPage from "./pages/SignupPage";
import NewquizPage from "./pages/NewquizPage";
import ViewTrivia from "./pages/ViewTrivia";
import PlayTrivia from "./pages/PlayTrivia";
import TriviaResultsPage from "./pages/TriviaResultsPage";
import UserProfile from "./pages/UserProfile";
import EditTriviaPage from "./pages/EditTriviaPage";

//* Import Components
// import Test from "./components/Test";
import Navbar from "./components/navbar/Navbar";
// import NewTrivia from "./components/FormTest/NewTrivia";
// import NewTrivia from "./components/FormTest/NewTrivia"

function App() {
  const [currentUser, setCurrentUser] = useState({});
  const getCurrentUser = (user) => {
    setCurrentUser(user);
    console.log("propscurrent user", user);
  };

  const [triviaAnswers, setTriviaAnswers] = useState([]);

  const submitAnswers = (answers) => {
    setTriviaAnswers(answers);
    console.log(answers);
  };

  return (
    <div className="App">
      <Navbar currentUser={currentUser} setCurrentUser={setCurrentUser}/>
      {/* <Test /> */}

      <div className="pt-14">
        <Switch>
          <Route exact path="/">
            <Homepage />
          </Route>
          <Route path="/login">
            <LoginPage getCurrentUser={getCurrentUser} />
          </Route>

          {/* <Route path="/trivia/newTest">
            <NewTrivia/>
          </Route> */}

          <Route path="/signup">
            <SignupPage />
          </Route>

          <Route path="/trivia/new">
            <NewquizPage />
          </Route>

          <Route path="/trivia/:triviaId/play">
            <PlayTrivia submitAnswers={submitAnswers} />
          </Route>
          <Route path="/trivia/:triviaId/results">
            <TriviaResultsPage answers={triviaAnswers} />
          </Route>
          <Route path="/trivia/:triviaId/edit">
            <EditTriviaPage />
          </Route>
          {/* View Quiz Page */}
          <Route path="/trivia/:triviaId">
            <ViewTrivia />
          </Route>
          <Route path="/user/:username/myQuizzes"></Route>
          {/* User Profile */}
          <Route path="/user/:username">
            <UserProfile user={currentUser} />
          </Route>
          <Route>
            <Redirect to="/" />
          </Route>
        </Switch>
      </div>
    </div>
  );
}

export default App;
