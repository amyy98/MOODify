import React, { Component } from "react";
import Grid from './Grid';
import Nav from './Nav';
import About from './About';
import Login from './Login';
import { BrowserRouter as Router, Switch, Route} from "react-router-dom";

class App extends Component {
  render() {
    return (
      <Router>
      <div className="navbar">
        <Nav />
        <Switch>
        <Route path="/" exact component={Home}/>
        <Route path="/about" exact component={About}/>
        <Route path="/login" exact component={Login}/>
        </Switch>
      </div>
      </Router>
    );
  }
}

const Home = () => (
  <div>
    <h1>Welcome! </h1>
  <Grid />
  </div>
  
);

export default App;
