import React, { Component } from 'react';
import { Link } from 'react-router-dom'

class Profile extends Component {
  render() {
    return (
      <div className="App">
        Profile
        <br />

        <Link to='/'>Homepage</Link>
      </div>
    );
  }
}

export default Profile;
