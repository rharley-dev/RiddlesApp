import React, { Component } from 'react';
import Home from './HomeComponent';
import { RIDDLES } from '../shared/riddles';
import { StyleSheet } from 'react-native';

class Main extends Component {
  constructor(props) {
    super(props);
    this.state = {
      riddles: RIDDLES,
    };
  }

  render() {
    return <Home riddles={this.state.riddles} style={styles.container} />;
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    color: 'red'
  },
});

export default Main;
