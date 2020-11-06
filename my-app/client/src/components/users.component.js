import React, { Component } from 'react';
import axios from 'axios';
var config = {
    headers: {
        'Content-Type': 'application/x-www-form-urlencoded'
    }
};



class Users extends Component {
    state = {
      persons: []
    }

    
  
    componentDidMount() {
      axios.get("/api/users", config)
        .then(res => {
          const persons = res.data;
          this.setState({ persons });
          console.log(persons)
        })
    }
  
    render() {
      return (
        <ul>
          { this.state.persons.map(person => <li>{person.name}</li>)}
        </ul>
      )
    }
  }

  export default Users;