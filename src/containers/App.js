import React from 'react';
import GlobalStyle from '../globalStyles.js';
import Navbar from '../components/Navbar.jsx';
import Home from '../pages/Home/Home';
import Proyect from '../pages/Proyects/Proyect'
import Testimonials from '../pages/Testimonials/Testimonials'
import ScrollToTop from '../components/ScrollToTop'
import { BrowserRouter as Router, Switch, Route, Redirect } from 'react-router-dom';
import Footer from '../components/Footer.jsx';


const App = () => {
  return (
    <Router>
      <GlobalStyle />
      <ScrollToTop />
      <Navbar />
      <Switch>
        <Route exact path="/PortafolioGeek/">
          <Redirect to="/inicio" component={Home} />
        </Route>
        <Route exact path="/">
          <Redirect to="/inicio" component={Home} />
        </Route>
        <Route path='/inicio' exact component={Home} />
        <Route path='/proyects' component={Proyect} />
        <Route path='/testimonios' component={Testimonials} />
      </Switch>
      <Footer />
    </Router >
  );
};

export default App;
