import './App.css'
import React from 'react';
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';
import Header from './components/Header'
import Home from './Home';
import About from './About';
import Features from './Features';
import Pricing from './Pricing';
import FAQ from './FAQ';
import Blogs from './Blogs';

function App() {
  return (
    <Router>
      <div>
        <Header />
        <Switch>
          <Route exact path="/" component={Home} />
          <Route path="/about" component={About} />
          <Route path="/features" component={Features} />
          <Route path="/pricing" component={Pricing} />
          <Route path="/faq" component={FAQ} />
          <Route path="/blogs" component={Blogs} />
        </Switch>
      </div>
    </Router>
  );
}

export default App;
