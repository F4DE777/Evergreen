import './App.css';
import React from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import '@coreui/coreui/dist/css/coreui.min.css'
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';
import NavBar from './components/NavBar';
import HeroSection from './components/HeroSection';
import Footer from './components/Footer';
import NotFound from './components/pages/NotFound';
import About from './components/pages/About';
import Academics from './components/pages/Academics';
// import Learn from './components/pages/Learning';
import School from './components/pages/School';
import { CSSTransition, TransitionGroup } from 'react-transition-group'
import Admission from './components/pages/Admission';


export default function App() {

  
  return (
    <>
    <Router>  
            <NavBar />                                                                 
          <Route render={({location}) => (  
                <TransitionGroup>
                  <CSSTransition 
                    key={location.key}
                    timeout={450}
                    classNames="fade"
                  >
                      <Switch>
                              <Route path="/" component={HeroSection}   exact/>
                              <Route path={'/about'} component={About} />
                              <Route path={'/admission'} component={Admission}  />
                              <Route path={'/academics'} component={Academics}  />
                              <Route path={'/school'} component={School} />
                              <Route path="*"  component={NotFound}  />
                        </Switch>
                  </CSSTransition>
                </TransitionGroup>


           )} />

          <Footer/>
      </Router>
    
    </>
  );
}
