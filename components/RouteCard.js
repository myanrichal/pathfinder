import * as React from 'react';
import { Text, View, StyleSheet, Image } from 'react-native';
import { Constants } from 'expo';
import { Button, Card, Title, Paragraph, TextInput } from 'react-native-paper';

export default class RouteCard extends React.Component {
  constructor(props) {
    super(props)
    this.state = {
      cardView: true,
      attempts: 0,
    }
    this.flipCard = this.flipCard.bind(this);
    this.submitScore = this.submitScore.bind(this);
  }
  
  flipCard () {
    this.setState(state => ({ cardView: !state.cardView }));
  }
  submitScore() {
    // this.props.addScore(this.state.attempts)
    
    this.props.updateSnack(this.state.attempts)
    this.props.toggleSnack()
  }


  render() {
    if(this.state.cardView) {
      return (
        <View style={styles.container}>
          <Card style={styles.routeCard}>
            <Card.Content>
              <Title>{this.props.route.routeName}</Title>
            </Card.Content>
            <Card.Cover
              style = {styles.cardCover} 
              source={{ uri: this.props.route.routeImage }} 
            />
            <Card.Actions>
              <Button onPress={this.flipCard}>I Sent it!</Button>
            </Card.Actions>
          </Card>
        </View>
      );
    }

    else {
      return (
        <View style={styles.container}>
          <Card style={styles.routeCard}>
            <Card.Content>
              <Title>{this.props.route.routeName}</Title>
            </Card.Content>
            <View style={styles.attemptInputLine}>
              <Text>Number of Attempts: </Text>
              <TextInput
                style={styles.attemptsInput}
                mode='outlined'
                value={this.state.attempts}
                onChangeText={attempts => this.setState({ attempts })}/>
            </View>
            <Card.Actions style={{height: 375, flexDirection: 'row', justifyContent: 'space-between'}}>
              <Button onPress={this.flipCard}>Oh wait nevermind... </Button>
              <Button onPress={this.submitScore}>Submit</Button>
            </Card.Actions>
          </Card>
        </View>
      );
    }


  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    paddingTop: Constants.statusBarHeight,
    backgroundColor: '#ecf0f1',
    padding: 0,
    width: 375,
    height: 550,
  },
  attemptInputLine: {
    flexDirection: 'row',
    justifyContent: 'space-between',
  },
  attemptsInput: {
    width: 100,
  },
  routeCard: {
    margin: 20,
    padding: 20,
    height: 350,
  },
  cardCover: {
    margin: 10,
  }
});

