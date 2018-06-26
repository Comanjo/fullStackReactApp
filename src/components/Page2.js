import React, { Component } from 'react';
import { Link } from 'react-router-dom'


class Page2 extends Component {

  state = {
    name: '',
    address: '',
    phone: ''
  }

  handleSubmit = (e) => {
    e.preventDefault();
    const data = { ...this.state }

    fetch('http://localHost:4000', {
      method: 'post',
      body: data
    })
  }


  render() {
    console.log(this);
    return (
      <div>
        <h1>hello Page2</h1>
        <button type="button" className="btn btn-primary">Home<Link to="/">Home</Link></button>
        <br/>
        <br/>
        <button type="button" className="btn btn-primary">Page3<Link to="/page3">Page3</Link></button>

        <form onSubmit={this.handleSubmit}>
        <div className="form-group">
          <label htmlFor="exampleInputEmail1">Name</label>
          <input type="text" className="form-control" id="InputEmail1" aria-describedby="emailHelp"
                 placeholder="Name" onChange={e => this.setState({ name: e.target.value })}/>
        </div>
        <div className="form-group">
          <label htmlFor="InputAddress">Address</label>
          <input type="address" className="form-control" id="InputAddress" placeholder="Address"
                 onChange={e => this.setState({ address: e.target.value })}/>
        </div>
        <div className="form-group">
          <label htmlFor="InputPhone">Password</label>
          <input type="text" className="form-control" id="InputPhone" placeholder="Phone"
                 onChange={e => this.setState({ phone: e.target.value })}/>
        </div>

        <button type="submit" className="btn btn-primary">Submit</button>
      </form>


  </div>
  )
    ;
  }
}

export default Page2;
