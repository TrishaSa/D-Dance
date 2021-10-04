import logo from './logo.svg';
import './App.css';
import AllService from "./components/AllService/AllService";
import Home from "./components/Home/Home";
import Contact from "./components/Contact/Contact";
import About from "./components/About/About";
import Error from "./components/Error/Error";

import {
  BrowserRouter as Router,
  Switch,
  Route
} from "react-router-dom";

function App() {
  return (
    <div className="App">
       <Router>
          <Switch>
            <Route exact path="/">
              <Home></Home>
            </Route>
            <Route path="/home">
              <Home></Home>
            </Route>
            <Route path="/about">
           <About></About>
            </Route>
            <Route path="/services">
             <AllService></AllService>
            </Route>
            <Route path="/contact">
            <Contact></Contact>
            </Route>
            <Route path="*">
              <Error></Error>
            </Route>
          </Switch>
        </Router>
    </div>
  );
}

export default App;
