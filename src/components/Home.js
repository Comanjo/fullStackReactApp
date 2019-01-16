import React, { Component } from 'react'
import { Link } from 'react-router-dom'



class Home extends Component {

  render() {
    return (
      <div >
        <h1>hello</h1>
        <Link to="/form"><button type="button" className="btn btn-primary">Form</button></Link>



      </div>
    )
  }
}

export default Home;
