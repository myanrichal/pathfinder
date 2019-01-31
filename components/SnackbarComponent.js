import * as React from 'react';
import { Text, View, StyleSheet, Image } from 'react-native';

import {Snackbar} from 'react-native-paper';

export default class SnackbarComponent extends React.Component {
  constructor(props) {
    super(props)
    this.state = {
      message: this.props.message
    }
  }

  
  render() {
    return (
      <Snackbar
        visible={this.props.visible}
        onDismiss={this.props.visibleToggle}
        action={{
          label: 'Thanks, Bye',
          onPress: () => {
            // Do something
          },
        }}
      >
        {this.props.message}
      </Snackbar>
    )}
}