import React from 'react';
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';
import NavBar from "../src/components/NavBar/NavBar";
import Profile from './pages/profile';
import Portfolio from "./pages/portfolio";
import Resume from "./pages/resume";
import Footer from "../src/components/footer/footer";



function App() {
  return (
    <Router>
      <div className="App">
        <NavBar />
        <Switch>
          <Route exact path="/" component={ Profile } />
          <Route exact path="/portfolio" component={ Portfolio } />
          <Route exact path="/resume" component={ Resume } />
        </Switch>
        <Footer />  
      </div>
    </Router>
  );
}

export default App;
