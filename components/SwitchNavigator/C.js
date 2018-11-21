import React, { PureComponent } from 'react';
import { Button, View, Text } from 'react-native';

class C extends PureComponent {
  componentDidMount() {
    console.log('C DID MOUNT');
  }

  componentWillUnmount() {
    console.log('C WILL UNMOUNT');
  }

  render() {
    return (
      <View style={{ flex: 1, alignItems: 'center', justifyContent: "center" }}>
        <Text>C</Text>
        <Button title="A" onPress={this.handleAPress} />
        <Button title="B" onPress={this.handleBPress} />
      </View>
    );
  }

  handleAPress = () => {
    const { navigation: { navigate }} = this.props;
    navigate('A');
  };

  handleBPress = () => {
    const { navigation: { navigate }} = this.props;
    navigate('B');
  };
}

export default C;