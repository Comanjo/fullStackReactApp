import React, { Component } from 'react';
import { Link } from 'react-router-dom'



class Home extends Component {

  render() {
    return (
      <div >
        <h1>hello Home</h1>
        <button type="button" className="btn btn-primary">Page2<Link to="/page2">Page2</Link></button>
        <br/>
        <br/>
        <button type="button" className="btn btn-primary">Page3<Link to="/page3">Page3</Link></button>

        <h3>This is a project made to teach a Full Stack React App while learning to make a Full Stack React App</h3>
      </div>
    );
  }
}

export default Home;
