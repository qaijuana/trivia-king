import "./App.css";
import { Switch, Route, Redirect } from "react-router-dom";
import Homepage from "./pages/Homepage";
import LoginPage from "./pages/LoginPage";
import SignupPage from "./pages/SignupPage";
import NewquizPage from "./pages/NewquizPage";
import ViewTrivia from "./pages/ViewTrivia";
import PlayTrivia from "./pages/PlayTrivia";
import { useState } from "react"

//* Import Components
// import Test from "./components/Test";
import Navbar from "./components/navbar/Navbar";
import NewTrivia from "./components/FormTest/NewTrivia";
// import NewTrivia from "./components/FormTest/NewTrivia"

function App() {
  const [currentUser, setCurrentUser] = useState({})
  const getCurrentUser = (user) => {
    setCurrentUser(user) 
    console.log("propscurrent user" , user)
  }

  return (
    <div className="App">
      <Navbar currentUser={currentUser} />
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
            <PlayTrivia />
          </Route>
          <Route path="/trivia/:triviaId/results"></Route>
          <Route path="/trivia/:triviaId/edit"></Route>
          {/* View Quiz Page */}
          <Route path="/trivia/:triviaId">
            <ViewTrivia />
          </Route>
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
