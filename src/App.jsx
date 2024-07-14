import './App.css'
import React from 'react';
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';
import Header from './components/Header'
import Home from './pages/home/Home';
import About from './pages/about/About';
import Features from './pages/features/Features';
import Pricing from './pages/pricing/Pricing';
import FAQ from './pages/faq/FAQ';
import Blogs from './pages/blogs/Blogs';

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
