import React from 'react'

import { BrowserRouter, Route, Switch } from 'react-router-dom'

import Home from './components/Home'
import Page2 from './components/Page2'
import People from './components/People'



const Routing = () => (

  <BrowserRouter>
    <Switch>
        <Route exact path="/" component={Home} />
        <Route path="/page2" component={Page2}/>
        <Route path="/people" component={People}/>
      </Switch>
  </BrowserRouter>
)


export default Routing