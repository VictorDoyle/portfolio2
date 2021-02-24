import React from 'react'
import { Switch, Route } from 'react-router-dom'

/* Pages */
import LandingPage from '../pages/LandingPage'
import About from '../pages/About'

export default (
    <Switch>
        <Route exact path='/' component={ LandingPage } />
        <Route path='/about' component={ About } />
        {/* 404 ROUTE */}
        {/* <Route component={NotFound} /> */}
    </Switch>
)

