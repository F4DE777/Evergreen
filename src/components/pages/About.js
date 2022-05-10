import React from 'react';
import { BrowserRouter as Router, Switch, Route,Redirect } from 'react-router-dom';
import Desk from    './sub_pages/About/PrincipalsDesk'
import Resources from    './sub_pages/About/HumanResources'

import NotFound from './NotFound';
import Contact from './sub_pages/About/Contact';
import History from './sub_pages/About/History';
import AboutUs from './sub_pages/About/AboutUs';

function About() {
  return (
    <>
     <Router>
          <Switch>
                    <Route path={'/about'} exact >
                      <Redirect to={'/about/welcome-address'}/>
                    </Route>
                    <Route path="/about/welcome-address" component={Desk}   exact/>
                    <Route path="/about/history" component={History}   exact/>
                    <Route path="/about/parents-code-of-conduct" component={Resources}   exact/>
                    <Route path="/about/contact-us" component={Contact}   exact/>
                    <Route path="/about/about-evergreen" component={AboutUs}   exact/>
                  <Route path="*" component={NotFound}  />
            </Switch>
      </Router>
    
    
    </>
  )
}

export default About