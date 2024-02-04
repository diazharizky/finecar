import './src/services/i18n';

import React from 'react';
import {SafeAreaProvider} from 'react-native-safe-area-context';
import {createStackNavigator} from '@react-navigation/stack';
import {config} from '@gluestack-ui/config';
import {GluestackUIProvider} from '@gluestack-ui/themed';
import {NavigationContainer} from '@react-navigation/native';

import {StatusBarProvider} from './src/contexts/StatusBar';
import {StatusBar} from './src/components';

import type {RootStackParamList} from './src/screens/types';
import TabsScreen from './src/screens/Tabs';
import LoginScreen from './src/screens/Login';

import {lightColor} from './src/consts/style';

const RootStack = createStackNavigator<RootStackParamList>();

const App = () => {
  return (
    <SafeAreaProvider style={{flex: 1}}>
      <StatusBarProvider
        defaultBgColor={lightColor}
        defaultStyle="dark-content">
        <StatusBar />
        <GluestackUIProvider config={config}>
          <NavigationContainer>
            <RootStack.Navigator screenOptions={{headerShown: false}}>
              <RootStack.Screen name="tabs-screen" component={TabsScreen} />
              <RootStack.Screen name="login-screen" component={LoginScreen} />
            </RootStack.Navigator>
          </NavigationContainer>
        </GluestackUIProvider>
      </StatusBarProvider>
    </SafeAreaProvider>
  );
};

export default App;
