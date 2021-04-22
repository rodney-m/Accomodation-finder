import "./App.css";
import Home from "./pages/Home";
import Apply from "./pages/Apply";
import Error from "./pages/Error";
import SingleRoom from "./pages/SingleRoom";
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";

import Navbar from "./components/Navbar";
import OnCampus from "./pages/OnCampus";

function App() {
  return (
    <div className="App">
      <Router>
        <Navbar />
        <Switch>
          <Route exact path="/" component={Home} />
          <Route exact path="/apply" component={Apply} />
          <Route exact path="/rooms/single-room" component={SingleRoom} />
          <Route exact path="/oncampus" component={OnCampus} />
          <Route component={Error} />
        </Switch>
      </Router>
    </div>
  );
}

export default App;
