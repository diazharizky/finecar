import './src/services/i18n';

import React from 'react';

import {SafeAreaView} from 'react-native';
import {NavigationContainer} from '@react-navigation/native';
import {createStackNavigator} from '@react-navigation/stack';
import {GluestackUIProvider} from '@gluestack-ui/themed';
import {config} from '@gluestack-ui/config';

import type {RootStackParamList} from './src/screens/types';

import TabsScreen from './src/screens/Tabs';
import LoginScreen from './src/screens/Login';

const RootStack = createStackNavigator<RootStackParamList>();

const App = () => {
  return (
    <SafeAreaView style={{flex: 1}}>
      <GluestackUIProvider config={config}>
        <NavigationContainer>
          <RootStack.Navigator screenOptions={{headerShown: false}}>
            <RootStack.Screen name="tabs-screen" component={TabsScreen} />
            <RootStack.Group screenOptions={{presentation: 'modal'}}>
              <RootStack.Screen name="login-screen" component={LoginScreen} />
            </RootStack.Group>
          </RootStack.Navigator>
        </NavigationContainer>
      </GluestackUIProvider>
    </SafeAreaView>
  );
};

export default App;
