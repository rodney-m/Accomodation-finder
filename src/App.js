import './App.css';
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";

import Home from "./pages/Home"
import Error from "./pages/Error"
import NavBar from "./components/NavBar"
import LogIn from "./pages/Login"
import LogIn2 from "./pages/Login2"

function App() {

  return (
    <div className="App">
       <Router>
        <NavBar />
        <Switch>
          <Route exact path="/" component={Home} />
          <Route exact path="/login" component={LogIn} />
          <Route exact path="/login2" component={LogIn2} />
          <Route component={Error} />
        </Switch>
      </Router>
    </div>
  );
}

export default App;
