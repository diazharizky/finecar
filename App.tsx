import './src/services/i18n';

import React from 'react';
import {SafeAreaProvider} from 'react-native-safe-area-context';
import {createStackNavigator} from '@react-navigation/stack';
import {config} from '@gluestack-ui/config';
import {GluestackUIProvider} from '@gluestack-ui/themed';
import {NavigationContainer} from '@react-navigation/native';

import {StatusBar} from './src/components';
import {Composed as ComposedProviders} from './src/contexts';

import type {RootStackParamList} from './src/screens/types';
import TabsScreen from './src/screens/Tabs';
import LoginScreen from './src/screens/Login';

const RootStack = createStackNavigator<RootStackParamList>();

const App = () => {
  return (
    <SafeAreaProvider style={{flex: 1}}>
      <ComposedProviders>
        <StatusBar />
        <GluestackUIProvider config={config}>
          <NavigationContainer>
            <RootStack.Navigator screenOptions={{headerShown: false}}>
              <RootStack.Screen name="tabs-screen" component={TabsScreen} />
              <RootStack.Screen name="login-screen" component={LoginScreen} />
            </RootStack.Navigator>
          </NavigationContainer>
        </GluestackUIProvider>
      </ComposedProviders>
    </SafeAreaProvider>
  );
};

export default App;
