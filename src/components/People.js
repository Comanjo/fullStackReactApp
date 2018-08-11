import React, {Component, Fragment} from 'react'
import { Link } from 'react-router-dom'


class ListOfContacts extends Component {
  constructor() {
    super();
    this.state = {
      people: []
    };
  }

  handleSubmit = async (_id) => {

    await fetch('http://localhost:4000/' + _id, {
      method: 'delete'
    }).then(response => {
      response.json().then(json => {
        return json;
      })
    });
    await this.getPeople()
  };


  getPeople = async () => {

    return fetch('http://localhost:4000')
      .then(results => {
        return results.json();
      })
      .then(data => {
        this.setState({people: data})
      })
  }



  async componentWillMount() {

    await this.getPeople()
  }

  render() {
    console.log(this);
    console.log(this.state);
    console.log(this.state.people);
    return (
      <Fragment>
        <div>
        <button type="button" className="btn btn-primary">Home<Link to="/">Home</Link></button>
        <br/>
        <br/>
        <div>
            {this.state.people.map(people =>
              <div className="border" key={people._id}>
                <h3> Name: {people.name}</h3>
                <p> Phone: {people.phone}</p>
                <p> Address: {people.address}</p>
                <button onClick={() => this.handleSubmit(people._id)}>Delete</button>

              </div>
            )}
          </div>
        </div>
      </Fragment>
    )
  }
}

export default ListOfContacts