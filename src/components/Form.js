import React, { Component } from 'react';
import { Link } from 'react-router-dom'


class Form extends Component {

  state = {
    name: '',
    address: '',
    phone: ''
  }


  handleSubmit = (e) => {
    e.preventDefault();
    const data = JSON.stringify({ ...this.state })
    fetch('http://localhost:4000', {
      method: 'POST',
      body: data,
      headers: {
        "Content-Type": "application/json"
      }
    })
  }


  render() {

    console.log(this.state);console.log(this);
    return (
      <div>
        <h1>Form</h1>
        <Link to="/"><button type="button" className="btn btn-primary">Home</button></Link>
        <br/>
        <br/>
        <Link to="/people"><button type="button" className="btn btn-primary">People</button></Link>

        <form onSubmit={this.handleSubmit}>
          <div className="form-group">
            <label htmlFor="InputName">Name</label>
            <input type="text" className="form-control" id="InputName" aria-describedby="NameHelp"
                   placeholder="Name" onChange={e => this.setState({name: e.target.value})}/>
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

export default Form;

