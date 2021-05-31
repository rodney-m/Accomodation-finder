import './App.css';
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";

import Home from "./pages/Home"
import Error from "./pages/Error"
import NavBar from "./components/NavBar"
import LogIn from "./pages/Login"
import LogIn2 from "./pages/Login2"
import Apply from "./pages/Apply"
import Help from "./pages/Help"
import Contact from "./pages/Contact"
import Hostels from "./pages/Hostels"
import Houses from "./pages/Houses"
import SingleRoom from "./pages/SingleRoom"
import H1 from "./pages/H1"
import H2 from "./pages/H2"
import H3 from "./pages/H3"
import H4 from "./pages/H4"

function App() {

  return (
    <div className="App">
       <Router>
        <NavBar />
        <Switch>
          <Route exact path="/" component={Home} />
          <Route exact path="/login" component={LogIn} />
          <Route exact path="/login2" component={LogIn2} />
          <Route exact path="/Apply" component={Apply} />
          <Route exact path="/Help" component={Help} />
          <Route exact path="/Contact" component={Contact} />
          <Route exact path="/Hostels" component={Hostels} />
          <Route exact path="/Houses" component={Houses} />
          <Route exact path="/SingleRoom" component={SingleRoom} />
          <Route exact path="/H1" component={H1} />
          <Route exact path="/H2" component={H2} />
          <Route exact path="/H3" component={H3} />
          <Route exact path="/H4" component={H4} />
          <Route component={Error} />
        </Switch>
      </Router>
    </div>
  );
}

export default App;
