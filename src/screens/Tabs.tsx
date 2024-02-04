import React from 'react';
import type {NativeStackScreenProps} from '@react-navigation/native-stack';
import {createBottomTabNavigator} from '@react-navigation/bottom-tabs';
import {StyleSheet} from 'react-native';
import {useTranslation} from 'react-i18next';
import Icon from 'react-native-vector-icons/Ionicons';

import type {RootStackParamList} from './types';
import {mainColor, lightColor} from '../consts/style';

import ExploreScreen from './tabs/Explore';
import MessagesScreen from './tabs/Messages';
import ProfileScreen from './tabs/Profile';
import SettingsScreen from './tabs/Settings';

import {FalconAppBar, FalconText} from '../components';
import {useStatusBar} from '../contexts/StatusBar';

type TabsScreenProps = NativeStackScreenProps<
  RootStackParamList,
  'tabs-screen'
>;

const styles = StyleSheet.create({
  baseLabel: {
    fontSize: 12,
    color: '#fff',
  },
  label: {fontWeight: '600'},
  labelFocused: {fontWeight: 'bold'},
  icon: {
    fontSize: 24,
    color: '#fff',
  },
});
const Tab = createBottomTabNavigator();

const TabsScreen = ({}: TabsScreenProps) => {
  const {t} = useTranslation();
  const [appBarVisible, setAppBarVisibility] = React.useState(false);
  const {setBgColor, setStyle} = useStatusBar();

  const showAppBar = () => {
    if (!appBarVisible) {
      setAppBarVisibility(true);
      setBgColor(mainColor);
      setStyle('light-content');
    }
  };

  const hideAppBar = () => {
    if (appBarVisible) {
      setAppBarVisibility(false);
      setBgColor(lightColor);
      setStyle('dark-content');
    }
  };

  return (
    <>
      {appBarVisible && <FalconAppBar />}
      <Tab.Navigator
        screenOptions={{
          headerShown: false,
          tabBarStyle: {backgroundColor: mainColor},
        }}>
        <Tab.Screen
          name="explore-screen"
          component={ExploreScreen}
          listeners={{tabPress: hideAppBar}}
          options={{
            title: t('tab_label_explore'),
            tabBarLabel: ({focused}) => (
              <FalconText
                style={{
                  ...styles.baseLabel,
                  ...(focused ? styles.label : styles.labelFocused),
                }}>
                {t('tab_label_explore')}
              </FalconText>
            ),
            tabBarIcon: ({focused}) => (
              <Icon
                name={focused ? 'compass' : 'compass-outline'}
                style={styles.icon}
              />
            ),
          }}
        />
        <Tab.Screen
          name="messages-screen"
          component={MessagesScreen}
          listeners={{tabPress: showAppBar}}
          options={{
            title: t('tab_label_messages'),
            tabBarLabel: ({focused}) => (
              <FalconText
                style={{
                  ...styles.baseLabel,
                  ...(focused ? styles.label : styles.labelFocused),
                }}>
                {t('tab_label_messages')}
              </FalconText>
            ),
            tabBarIcon: ({focused}) => (
              <Icon
                name={focused ? 'chatbubbles' : 'chatbubbles-outline'}
                style={styles.icon}
              />
            ),
          }}
        />
        <Tab.Screen
          name="profile-screen"
          component={ProfileScreen}
          listeners={{tabPress: showAppBar}}
          options={{
            title: t('tab_label_profile'),
            tabBarLabel: ({focused}) => (
              <FalconText
                style={{
                  ...styles.baseLabel,
                  ...(focused ? styles.label : styles.labelFocused),
                }}>
                {t('tab_label_profile')}
              </FalconText>
            ),
            tabBarIcon: ({focused}) => (
              <Icon
                name={focused ? 'person' : 'person-outline'}
                style={styles.icon}
              />
            ),
          }}
        />
        <Tab.Screen
          name="settings-screen"
          component={SettingsScreen}
          listeners={{tabPress: hideAppBar}}
          options={{
            title: t('tab_label_settings'),
            tabBarLabel: ({focused}) => (
              <FalconText
                style={{
                  ...styles.baseLabel,
                  ...(focused ? styles.label : styles.labelFocused),
                }}>
                {t('tab_label_settings')}
              </FalconText>
            ),
            tabBarIcon: ({focused}) => (
              <Icon
                name={focused ? 'settings' : 'settings-outline'}
                style={styles.icon}
              />
            ),
          }}
        />
      </Tab.Navigator>
    </>
  );
};

export default TabsScreen;
