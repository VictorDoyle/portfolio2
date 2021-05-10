import React from 'react'
import { Switch, Route } from 'react-router-dom'

/* Pages */
import LandingPage from '../pages/LandingPage'
import About from '../pages/About'
import Works from '../pages/Works'
import Space22 from '../pages/Works/Space22'
import SpaceGotchi from '../pages/Works/SpaceGotchi/SpaceGotchi'
import Coeus from '../pages/Works/Coeus/Coeus'
import FlixAlways from '../pages/Works/FlixAlways/FlixAlways'
import Contact from '../pages/Contact'

export default (
    <Switch>
        <Route exact path='/' component={ LandingPage } />
        <Route path='/about' component={ About } />
        <Route path='/works' component={ Works } />
        <Route path='/contact' component= { Contact } />
        {/* Works Detailed Pages */}
        <Route path='/space22' component={ Space22 } />
        <Route path='/spacegotchi' component={ SpaceGotchi } />
        <Route path='/coeus' component= { Coeus } />
        <Route path='/flixalways' component = { FlixAlways} />
        <Route component = {LandingPage} />

        
        {/* 404 ROUTE */}
        {/* <Route component={NotFound} /> */}
    </Switch>
)

