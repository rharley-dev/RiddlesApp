import React, { Component } from 'react';
import Home from './HomeComponent';
import { RIDDLES } from '../shared/riddles';

class Main extends Component {
  constructor(props) {
    super(props);
    this.state = {
      riddles: RIDDLES,
    };
  }

  render() {
    return <Home riddles={this.state.riddles} />;
  }
}

export default Main;
