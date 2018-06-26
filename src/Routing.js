import React from 'react'

import {
  BrowserRouter as Router,
  Route,
  Switch
} from 'react-router-dom'

import Home from './components/Home'
import Page2 from './components/Page2'
import Page3 from './components/Page3'



const Routing = () => (

  <Router>
    <Switch>
        <Route exact path="/" component={Home} />
        <Route path="/page2" component={Page2}/>
        <Route path="/page3" component={Page3}/>
      </Switch>
  </Router>
)


export default Routing