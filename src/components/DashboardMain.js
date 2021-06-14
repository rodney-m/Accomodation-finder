import React from "react";
import "./DashboardMain.css";


import { Switch, Route } from "react-router-dom";
import Overview from "./Overview";
import H1 from "./H1";
import H2 from "./H2";
import H3 from "./H3";
import H4 from "./H4";
import Requests from "./Requests";
import OffCampus from "./Offcampus";
import Error from "../pages/Error";

function DashboardMain() {
    
    return (
        <Switch>
            <Route exact path="/dashboard/">
                <Overview />
            </Route>
            <Route exact path="/dashboard/hostels/h1">
                <H1 />
            </Route>
            <Route exact path="/dashboard/hostels/h2">
                <H2 />
            </Route>
            <Route exact path="/dashboard/hostels/h3">
                <H3 />
            </Route>
            <Route exact path="/dashboard/hostels/h4">
                <H4 />
            </Route>
            <Route exact path="/dashboard/requests">
                <Requests />
            </Route>
            <Route exact path="/dashboard/off-campus">
                <OffCampus />
            </Route>
            <Route >
             <Error />
            </Route>
        </Switch>
    );
  
}

export default DashboardMain;
