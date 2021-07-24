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
import LogInHouseOwner from "./pages/LoginHouseOwner";
import DeanLogIn from "./pages/DeanLogIn";

import ProtectedRoute from "./pages/ProtectedRoutes";
import DeanProtectedRoute from "./pages/DeanProtectedRoutes";
import LandlordProtectedRoute from "./pages/LandlordProtectedRoutes";

import { LoginContext } from "./Helper/Context";
import { AdminLoginContext } from "./Helper/Context";
import { LandlordLoginContext } from "./Helper/Context";

import HouseOwnerCreateAcc from "./components/HouseOwnerCreateAcc";
import HouseOwnerDashboard from "./components/HouseOwnerDashboard";
import LandlordNav from "./components/LandlordNav";
import CheckStatus from "./components/CheckStatus";

function App() {
  const [loggedIn, setLoggedIn] = useState(false);
  const [isAdmin, setIsAdmin] = useState(false);
  const [isLandlordLoggedIn, setIsLandlordLoggedIn] = useState(false);
  return (
    <div className="App">
      <LandlordLoginContext.Provider value={{ isLandlordLoggedIn, setIsLandlordLoggedIn }} >
        <AdminLoginContext.Provider value={{ isAdmin, setIsAdmin }}>
          <LoginContext.Provider value={{ loggedIn, setLoggedIn }}>
            <Router>
              <NavBar />
              <LandlordNav />
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
                <Route exact path="/apply/status" component={CheckStatus} />

                <DeanProtectedRoute
                  isAdmin={isAdmin}
                  path="/dashboard"
                  component={Dashboard}
                />

                <Route
                  exact
                  path="/landlords"
                  component={HouseOwnerCreateAcc}
                />
                <Route
                  exact
                  path="/landlords/logIn"
                  component={LogInHouseOwner}
                />

                <LandlordProtectedRoute
                  isLandlordLoggedIn={isLandlordLoggedIn}
                  path="/landlords/dashboard"
                  component={HouseOwnerDashboard}
                />

                <Route exact path="/admin" component={DeanLogIn} />
                <Route component={Error} />
              </Switch>
            </Router>
          </LoginContext.Provider>
        </AdminLoginContext.Provider>
      </LandlordLoginContext.Provider>
    </div>
  );
}

export default App;
