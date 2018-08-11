import React, { Component } from 'react'
import { Link } from 'react-router-dom'



class Home extends Component {

  render() {
    return (
      <div >

         <h1>HOME</h1>
        <button type="button" className="btn btn-primary">Form<Link to="/page2">Form</Link></button>
        <br/>
        <br/>
        <button type="button" className="btn btn-primary">People<Link to="/people">People</Link></button>

      </div>
    )
  }
}

export default Home;
