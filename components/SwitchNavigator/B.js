import React, { PureComponent } from 'react';
import { Button, View, Text } from 'react-native';

class B extends PureComponent {
  componentDidMount() {
    console.log('B DID MOUNT');
  }

  componentWillUnmount() {
    console.log('B WILL UNMOUNT');
  }

  render() {
    return (
      <View style={{ flex: 1, alignItems: 'center', justifyContent: "center" }}>
        <Text style={{ fontSize: 60 }}>B</Text>
        <Button title="A" onPress={this.handleAPress} />
        <Button title="C" onPress={this.handleCPress} />
      </View>
    );
  }

  handleAPress = () => {
    const { navigation: { navigate }} = this.props;
    navigate('A');
  };

  handleCPress = () => {
    const { navigation: { navigate }} = this.props;
    navigate('C');
  };
}

export default B;