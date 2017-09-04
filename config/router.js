import React from 'react';
import { StackNavigator } from 'react-navigation';
import Home from '../components/home';
import Control from '../components/control';
import Splash from '../components/splash.js'

export const Root = StackNavigator({
  Home: {
    screen: Splash,

  },
  Splash: {
    screen: Home,

  },
  Control: {
    screen: Control,

  },
   headerMode: {screen: Splash,
   header:{ visible:false }}


})
