import { createSwitchNavigator, createAppContainer } from 'react-navigation';
import A from './A';
import B from './B';
import C from './C';

const AppNavigator = createSwitchNavigator({
  A,
  B,
  C,
},
{
  initialRouteName: 'A',
});

export default createAppContainer(AppNavigator);
