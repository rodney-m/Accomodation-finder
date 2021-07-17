import "./App.css";
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";

import Home from "./pages/Home";
import Error from "./pages/Error";
import NavBar from "./components/NavBar";
import LogIn from "./pages/Login";
import Help from "./pages/Help";
import Contact from "./pages/Contact";
import Houses from "./pages/Houses";
import SingleRoom from "./pages/SingleRoom";
import Dashboard from "./pages/Dashboard";
import DashboadNav from "./components/DashboadNav";
import H1 from "./components/H1";
import Apply from "./components/Apply";
import ApplyOncampus from "./components/ApplyOncampus";
// import ViewHostel from "./components/ViewHostel";
import HostelView from "./components/HostelView";
import ApplyOffcampus from "./components/ApplyOffcampus";

function App() {
  return (
    <div className="App">
      <Router>
        <NavBar />
        <Switch>
          <Route path="/dashboard" component={Dashboard} />
          <Route exact path="/" component={Home} />
          <Route exact path="/apply" component={Apply} />
          <Route exact path="/login" component={LogIn} />
          <Route exact path="/help" component={Help} />
          <Route exact path="/contact" component={Contact} />
          <Route exact path="/houses" component={Houses} />
          <Route exact path="/singleRoom" component={SingleRoom} />
          <Route exact path="/apply" component={Apply} />
          <Route exact path="/apply/oncampus" component={ApplyOncampus} />
          <Route exact path="/apply/oncampus/:hostelNumber" component={HostelView} />
          <Route exact path="/apply/offcampus" component={ApplyOffcampus} />
          <Route path="/dashboard" component={Dashboard} />
          <Route component={Error} />
        </Switch>
      </Router>
    </div>
  );
}

export default App;
