import "./App.css";
import Home from "./pages/Home";
import Apply from "./pages/Apply";
import Error from "./pages/Error";
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";

function App() {
  return (
    <div className="App">
      <Router>
        <Switch>
          <Route exact path="/" component={Home} />
          <Route exact path="/apply" component={Apply} />
          <Route component={Error} />
        </Switch>
      </Router>
    </div>
  );
}

export default App;
