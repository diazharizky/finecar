import './src/services/i18n';

import React from 'react';
import {createStackNavigator} from '@react-navigation/stack';
import {SafeAreaProvider} from 'react-native-safe-area-context';
import {config} from '@gluestack-ui/config';
import {GluestackUIProvider} from '@gluestack-ui/themed';
import {NavigationContainer} from '@react-navigation/native';

import type {RootStackParamList} from './src/screens/types';
import {
  Composer as ProviderComposer,
  StatusBarProvider,
  AppBarProvider,
} from './src/contexts';
import {StatusBar, FalconAppBar} from './src/components';

import TabsScreen from './src/screens/Tabs';
import LoginScreen from './src/screens/Login';

const RootStack = createStackNavigator<RootStackParamList>();

const GeneralProviders = ({children}: {children: React.ReactNode}) => {
  return (
    <ProviderComposer
      providers={[<StatusBarProvider children />, <AppBarProvider children />]}>
      {children}
    </ProviderComposer>
  );
};

const App = () => {
  return (
    <SafeAreaProvider style={{flex: 1}}>
      <GeneralProviders>
        <StatusBar />
        <GluestackUIProvider config={config}>
          <FalconAppBar />
          <NavigationContainer>
            <RootStack.Navigator screenOptions={{headerShown: false}}>
              <RootStack.Screen name="tabs-screen" component={TabsScreen} />
              <RootStack.Screen name="login-screen" component={LoginScreen} />
            </RootStack.Navigator>
          </NavigationContainer>
        </GluestackUIProvider>
      </GeneralProviders>
    </SafeAreaProvider>
  );
};

export default App;
