import { BrowserRouter as Router, Route, Switch } from "react-router-dom";

import Header from "./components/Header/Header";
import Home from "./containers/Home/Home";
import Activities from "./containers/Activities/Activities";
import Contributing from "./containers/Contributing/Contributing";
import Error from "./containers/Error/Error";
import Footer from "./components/Footer/Footer";

function App() {
  return (
    <Router>
      <Header />
      <Switch>
        <Route exact path="/">
          <Home />
        </Route>
        <Route path="/activities" component={Activities} exact />
        <Route path="/contributing">
          <Contributing />
        </Route>
        <Route path="*">
          <Error />
        </Route>
      </Switch>
      <Footer />
    </Router>
  );
}

export default App;
