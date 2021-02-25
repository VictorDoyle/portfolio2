import React from 'react'
import { Switch, Route } from 'react-router-dom'

/* Pages */
import LandingPage from '../pages/LandingPage'
import About from '../pages/About'
import Works from '../pages/Works'
import Space22 from '../pages/Works/Space22'

export default (
    <Switch>
        <Route exact path='/portfolio2' component={ LandingPage } />
        <Route path='/portfolio2/about' component={ About } />
        <Route path='/portfolio2/works' component={ Works } />
        {/* Works Detailed Pages */}
        <Route path='/portfolio2/space22' component={ Space22 } />
        {/* 404 ROUTE */}
        {/* <Route component={NotFound} /> */}
    </Switch>
)

