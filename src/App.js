import logo from "./logo.svg";
import "./App.css";
import React, { useEffect, useState } from "react";
import { BrowserRouter as Router, Route, Switch, Link } from "react-router-dom";
import Login from "./Pages/Login";
import Profile from "./Pages/Profile";
import FailedLogin from "./Pages/FailedLogin";

function App() {
  const [userName, setUserName] = useState("");

  const [password, setPassword] = useState("");

  useEffect(() => {
    setUserName("ok");
    setPassword("ok");
    console.log(userName);
    console.log(password);
  });

  return (
    <React.Fragment>
      <Router>
        <Switch>
          <Route exact path="/failedLogin" component={FailedLogin} />
          <Route
            exact
            path="/login"
            component={Login}
            userName={userName}
            password={password}
          />
          {/* <Route exact path="/login" component={Login} /> */}
          <Route
            exact
            path="/Profile"
            component={() => <Profile authorized={true} />}
          />
        </Switch>
      </Router>
    </React.Fragment>
  );
}

export default App;
