import React from 'react'
import { Switch, Route } from 'react-router-dom'

/* Pages */
import LandingPage from '../pages/LandingPage'
import About from '../pages/About'
import Works from '../pages/Works'

export default (
    <Switch>
        <Route exact path='/' component={ LandingPage } />
        <Route path='/about' component={ About } />
        <Route path='/works' component={ Works } />
        {/* 404 ROUTE */}
        {/* <Route component={NotFound} /> */}
    </Switch>
)

