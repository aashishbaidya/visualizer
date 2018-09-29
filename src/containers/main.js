import React from 'react'
import { BrowserRouter, Switch, Route } from 'react-router-dom'

import Dashboard from './dashboard'
import EditDashboardContents from './edit'
import Stuff from '../stuff'

// The Main component renders one of the three provided
// Routes (provided that one matches). Both the /roster
// and /schedule routes will match any pathname that starts
// with /roster or /schedule. The / route will only match
// when the pathname is exactly the string "/"
const Main = () => (
  <div>
  <BrowserRouter>
    <Switch>
      <Route exact path='/:id/' component={Dashboard}/>
      <Route exact path='/edit/:id/' component={EditDashboardContents}/>
      <Route component={Stuff}/>
    </Switch>
   </BrowserRouter>
  </div>
)

export default Main
