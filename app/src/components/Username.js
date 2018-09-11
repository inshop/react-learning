import React, { Component } from 'react';

class Username extends Component {
  constructor(props) {
    super(props);

    this.state = {
      title: 'React vs Vue',
      vue: 0,
      react: 0
    };
  }

  componentWillMount () {
    setInterval(() => {
      this.setState({vue: this.state.vue + 1})
    }, 1000)
  }

  render() {
    return (
      <div>
        <h1>{this.state.title}</h1>
        <h2>{this.state.react} : {this.state.vue}</h2>
        Username: {this.props.username}
      </div>
    );
  }
}

export default Username;
