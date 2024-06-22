
import * as React from 'react';
import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';
import SignUpPage from './Components/SignUpPage';
import LoginPage from './Components/LoginPage';
import ForgotPasswordPage from './Components/ForgotPasswordPage';

const Stack = createStackNavigator();

export default function App() {
  return (
    <NavigationContainer>
      <Stack.Navigator initialRouteName="SignUp">
        <Stack.Screen name="SignUp" component={SignUpPage} />
        <Stack.Screen name="Login" component={LoginPage} />
        <Stack.Screen name="ForgotPassword" component={ForgotPasswordPage} />
      </Stack.Navigator>
    </NavigationContainer>
  );
}
