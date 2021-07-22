import React, { useState } from "react";
import "./App.css";
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";

import Home from "./pages/Home";
import Error from "./pages/Error";
import NavBar from "./components/NavBar";
import LogIn from "./pages/Login";
import Help from "./pages/Help";
import Contact from "./pages/Contact";
import SingleRoom from "./pages/SingleRoom";
import Dashboard from "./pages/Dashboard";
import Apply from "./components/Apply";
import ApplyOncampus from "./components/ApplyOncampus";
import HostelView from "./components/HostelView";
import ApplyOffcampus from "./components/ApplyOffcampus";

import ProtectedRoute from "./pages/ProtectedRoutes";

import { LoginContext } from "./Helper/Context";
import HouseOwnerCreateAcc from "./components/HouseOwnerCreateAcc";

function App() {
  const [loggedIn, setLoggedIn] = useState(true);
  return (
    <div className="App">
      <LoginContext.Provider value={{ loggedIn, setLoggedIn }}>
        <Router>
          <NavBar />
          <Switch>
            <Route exact path="/" component={Home} />

            <Route exact path="/login" component={LogIn} />

            <Route exact path="/help" component={Help} />

            <Route exact path="/contact" component={Contact} />

            <ProtectedRoute
              exact
              path="/apply/"
              component={Apply}
              isLoggedIn={loggedIn}
            />

            <ProtectedRoute
              exact
              path="/apply/offcampus"
              component={ApplyOffcampus}
              isLoggedIn={loggedIn}
            />

            <ProtectedRoute
              exact
              path="/apply/oncampus"
              component={ApplyOncampus}
              isLoggedIn={loggedIn}
            />

            <Route
              exact
              path="/apply/oncampus/:hostelNumber"
              component={HostelView}
            />

            <Route exact path="/dashboard" component={Dashboard} />

            <Route exact path="/offcampus/landlord" component={HouseOwnerCreateAcc} />
            <Route component={Error} />
          </Switch>
        </Router>
      </LoginContext.Provider>
    </div>
  );
}

export default App;
