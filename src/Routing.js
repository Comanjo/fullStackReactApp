import React from 'react'

import { BrowserRouter, Route, Switch } from 'react-router-dom'

import Home from './components/Home'
import Form from './components/Form'
import People from './components/People'



const Routing = () => (

  <BrowserRouter>
    <Switch>
        <Route exact path="/" component={Home} />
        <Route path="/form" component={Form}/>
        <Route path="/people" component={People}/>
      </Switch>
  </BrowserRouter>
)


export default Routing
