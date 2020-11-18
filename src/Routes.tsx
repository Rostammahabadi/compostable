import React from 'react';
import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';
import Home from '../screens/Home';
import Register from '../screens/Register';

interface RoutesProps {

};

const Stack = createStackNavigator();

export const Routes: React.FC<RoutesProps> = ({}) => {

  return (
    <NavigationContainer>
      <Stack.Navigator>
        <Stack.Screen options={{header: () => null }} name="Home" component={Home}/>
        <Stack.Screen  name="Register" component={Register}/>
      </Stack.Navigator>
    </NavigationContainer>
  );
}