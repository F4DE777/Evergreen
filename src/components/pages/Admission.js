import React from 'react';
import { BrowserRouter as Router, Switch, Route,Redirect } from 'react-router-dom';
import Apply from    './sub_pages/Admission/Apply'
import AgeCons from    './sub_pages/Admission/AgeCons'
import Result from    './sub_pages/Admission/Result'
import NotFound from './NotFound';
import AboutUs from './sub_pages/About/AboutUs';




function Admission() {
  return (
    <>
        <Router>
              <Switch>
                        <Route path={'/admission'} exact >
                          <Redirect to={'/admission/how_to_apply'}/>
                        </Route>
                        <Route path="/admission/how_to_apply" component={AboutUs}   exact/>
                        <Route path="/admission/school-fees" component={AgeCons}   exact/>
                        <Route path="/admission/result_&_scholarships" component={Result}   exact/>

                      {/* <Route path="*" component={NotFound}  /> */}
                </Switch>
          </Router>
    </>
  )
}

export default Admission