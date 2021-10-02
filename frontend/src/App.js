import { BrowserRouter as Router, Route, Switch } from "react-router-dom";

import Header from "./components/Header/Header";
import Home from "./containers/Home/Home";
import Activities from "./containers/Activities/Activities";
import Contributing from "./containers/Contributing/Contributing";
import Footer from "./components/Footer/Footer";

import "./App.css";

function App() {
  return (
    <Router>
      <Header />
      <Switch>
        <Route exact path="/">
          <Home />
        </Route>
        <Route path="/activities" exact>
          <Activities />
        </Route>
        <Route path="/contributing">
          <Contributing />
        </Route>
      </Switch>
      <Footer />
    </Router>
  );
}

export default App;
