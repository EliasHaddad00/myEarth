import React from 'react';
import {NavigationContainer} from '@react-navigation/native';
import {createStackNavigator} from '@react-navigation/stack';
//import * as firebase from 'firebase';
//import apiKeys from './config/keys';

import WelcomeScreen from './screens/WelcomeScreen';
import SignUp from './screens/SignUp';
import SignIn from './screens/SignIn';
import LoadingScreen from './screens/LoadingScreen';
import Dashboard from './screens/Dashboard';

const firebase = require("firebase");
//require("firebase/firestore");
const Stack = createStackNavigator();

var firebaseConfig = {
  apiKey: "AIzaSyByecPvXTS1GKK9xlKHxKsA7FGVcOCWwT8",
  authDomain: "myearth-c4d22.firebaseapp.com",
  projectId: "myearth-c4d22",
  storageBucket: "myearth-c4d22.appspot.com",
  messagingSenderId: "191725596153",
  appId: "1:191725596153:web:657d08fb0f1fe7783c6128",
  measurementId: "G-7NJEVC70H8"
};

export default function App() {
  if (!firebase.apps.length) {
    console.log('Connected with Firebase')
    firebase.initializeApp(firebaseConfig);
  }

  return (
    <NavigationContainer>
      <Stack.Navigator>
      <Stack.Screen name={'Loading'} component={LoadingScreen} options={{ headerShown: false }}/>
      <Stack.Screen name='Home' component={WelcomeScreen} options={{ headerShown: false }}/>
      <Stack.Screen name='Sign Up' component={SignUp} options={{ headerShown: false }}/>
      <Stack.Screen name='Sign In' component={SignIn} options={{ headerShown: false }}/>
      <Stack.Screen name={'Dashboard'} component={Dashboard} options={{ headerShown: false }} />
      </Stack.Navigator>
    </NavigationContainer>
  );
}