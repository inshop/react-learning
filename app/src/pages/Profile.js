import React, { Component } from 'react';
import { Link } from 'react-router-dom'
import { bindActionCreators } from 'redux'
import { connect } from 'react-redux'
// import { push } from 'connected-react-router'

class Profile extends Component {
  constructor(props) {
    super(props);

    this.state = {
      todos: []
    };
  }

  render() {
    return (
      <div className="App">
        Profile
        <br />

        <Link to='/'>Homepage</Link>
      </div>
    );
  }

  mapStateToProps = state => {
    return {
      todos: state.todos
    }
  }

  mapDispatchToProps = dispatch => bindActionCreators({
    // changePage: () => push('/about-us')
  }, dispatch)
}

export default connect(Profile.mapStateToProps, Profile.mapDispatchToProps)(Profile)
