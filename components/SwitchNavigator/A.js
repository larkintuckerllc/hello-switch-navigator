import React, { PureComponent } from 'react';
import { Button, View, Text } from 'react-native';

class A extends PureComponent {
  componentDidMount() {
    console.log('A DID MOUNT');
  }

  componentWillUnmount() {
    console.log('A WILL UNMOUNT');
  }

  render() {
    return (
      <View style={{ flex: 1, alignItems: 'center', justifyContent: "center" }}>
        <Text>A</Text>
        <Button title="B" onPress={this.handleBPress} />
        <Button title="C" onPress={this.handleCPress} />
      </View>
    );
  }

  handleBPress = () => {
    const { navigation: { navigate }} = this.props;
    navigate('B');
  };

  handleCPress = () => {
    const { navigation: { navigate }} = this.props;
    navigate('C');
  };
}

export default A;