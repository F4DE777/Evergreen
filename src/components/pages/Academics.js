import React from 'react';
import { BrowserRouter as Router, Switch, Route,Redirect } from 'react-router-dom';
import Creche from    './sub_pages/Academics/Creche'
import NotFound from './NotFound';
import JuniorSchool from './sub_pages/Academics/JuniorSchool';
import Primary from './sub_pages/Academics/Primary';
import SecSchool from './sub_pages/Academics/SecSchool';





function Academics() {
  return (
    <>
        <Router>
              <Switch>
                        <Route path={'/academics'} exact >
                          <Redirect to={'/academics/creche'}/>
                        </Route>
                        <Route path="/academics/creche" component={Creche}   exact/>
                        <Route path="/academics/junior-primary" component={JuniorSchool}   exact/>
                        <Route path="/academics/higher-primary" component={Primary}   exact/>
                        <Route path="/academics/secondary" component={SecSchool}   exact/>
                      <Route path="*" component={NotFound}  />
                </Switch>
          </Router>
      
    </>
  )
}

export default Academics