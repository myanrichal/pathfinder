import * as React from 'react';
import { Text, View, StyleSheet, ScrollView } from 'react-native';
import { Constants } from 'expo';

// You can import from local files
import AssetExample from './components/AssetExample';
import RouteCard from './components/RouteCard';
import SnackbarComponent from './components/SnackbarComponent';

// or any pure javascript modules available in npm
import { Button, Card, Title, Paragraph } from 'react-native-paper';

 
export default class App extends React.Component {
  constructor(props) {
    super(props)

    this.state = {
      visible: false,
      message: "hi im snackbar",
      
      store: [
        {
          routeName: 'Route One',
          routeImage: 'https://picsum.photos/700/'
        },
        {
          routeName: 'Route Two',
          routeImage: 'https://picsum.photos/701/'
        },
        {
          routeName: 'Route Three',
          routeImage: 'https://picsum.photos/702/'
        },
        {
          routeName: 'Route Four',
          routeImage: 'https://picsum.photos/703/'
        },
        {
          routeName: 'Route Five',
          routeImage: 'https://picsum.photos/704/'
        },
        {
          routeName: 'Route Six',
          routeImage: 'https://picsum.photos/705/'
        },
        {
          routeName: 'Route Seven',
          routeImage: 'https://picsum.photos/706/'
        },
        {
          routeName: 'Route Eight',
          routeImage: 'https://picsum.photos/707/'
        },
        {
          routeName: 'Route Nine',
          routeImage: 'https://picsum.photos/708/'
        },
        {
          routeName: 'Route Ten',
          routeImage: 'https://picsum.photos/709/'
        },
      ]

    }

    this.visibleToggle = this.visibleToggle.bind(this);
    this.updateSnackBar = this.updateSnackBar.bind(this);
  }

  visibleToggle () {
    this.setState(state => ({ visible: !state.visible }))
  }
  updateSnackBar (message) {
    this.setState(state => ({ message: message}))
  }

  render() {
    const { visible } = this.state;
    return (

      <View style={styles.container}>
        <Text style={styles.header}>Pathfinder</Text>



        <ScrollView horizontal = {true} >

          {this.state.store.map((prop, key) => {
            return (
              <RouteCard
                route = {prop}
                toggleSnack={this.visibleToggle}
                updateSnack={this.updateSnackBar}
              />
            )
          })}

        </ScrollView>

        <Button onPress={this.visibleToggle} >
          {this.state.visible ? 'Hide' : 'Show'}
        </Button>
       
       <SnackbarComponent
        visible = {this.state.visible}
        visibleToggle = {this.visibleToggle}
        message = {this.state.message}
       />


      </View>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    paddingTop: Constants.statusBarHeight,
    backgroundColor: '#ecf0f1',
    padding: 8,
  },
  header: {
    fontSize: 36,
    textAlign: 'center',
    paddingTop: 20,
    backgroundColor: '#505BF9',
    color: '#ffffff',
  },
});
