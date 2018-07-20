import React, { Component } from 'react';
import { Link } from 'react-router-dom'




class Page3 extends Component {
  render() {
    return (
      <div>
        <button type="button" className="btn btn-primary">Home<Link to="/">Home</Link></button>
        <br/>
        <br/>
        <button type="button" className="btn btn-primary">Page2<Link to="/page2">Page2</Link></button>


      </div>
    );
  }
}

export default Page3;
