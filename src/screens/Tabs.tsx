import React from 'react';
import {StyleSheet, Text} from 'react-native';
import type {NativeStackScreenProps} from '@react-navigation/native-stack';
import {createBottomTabNavigator} from '@react-navigation/bottom-tabs';
import Icon from 'react-native-vector-icons/Ionicons';
import {useTranslation} from 'react-i18next';

import type {RootStackParamList} from './types';

import HomeScreen from './tabs/Home';
import ProfileScreen from './tabs/Profile';
import MessagesScreen from './tabs/Messages';
import NotificationsScreen from './tabs/Notifications';

export type TabsScreenProps = NativeStackScreenProps<
  RootStackParamList,
  'tabs-screen'
>;

const styles = StyleSheet.create({
  label: {
    fontFamily: 'Montserrat-Regular',
    fontSize: 12,
    fontWeight: '600',
    color: '#fff',
  },
  labelFocused: {
    fontFamily: 'Montserrat-Regular',
    fontSize: 12,
    fontWeight: 'bold',
    color: '#fff',
  },
  icon: {
    color: '#fff',
    fontSize: 24,
  },
});

const Tab = createBottomTabNavigator();

const TabsScreen = ({}: TabsScreenProps) => {
  const {t} = useTranslation();

  return (
    <Tab.Navigator
      screenOptions={{
        headerShown: false,
        tabBarStyle: {
          backgroundColor: '#E91E63',
        },
      }}>
      <Tab.Screen
        name="home-screen"
        component={HomeScreen}
        options={{
          title: t('tab_label_home'),
          tabBarLabel: ({focused}) => (
            <Text style={focused ? styles.labelFocused : styles.label}>
              {t('tab_label_home')}
            </Text>
          ),
          tabBarIcon: ({focused}) => (
            <Icon
              name={focused ? 'home' : 'home-outline'}
              style={styles.icon}
            />
          ),
        }}
      />
      <Tab.Screen
        name="notifications-screen"
        component={NotificationsScreen}
        options={{
          title: t('tab_label_notifications'),
          tabBarLabel: ({focused}) => (
            <Text style={focused ? styles.labelFocused : styles.label}>
              {t('tab_label_notifications')}
            </Text>
          ),
          tabBarIcon: ({focused}) => (
            <Icon
              name={focused ? 'notifications' : 'notifications-outline'}
              style={styles.icon}
            />
          ),
        }}
      />
      <Tab.Screen
        name="messages-screen"
        component={MessagesScreen}
        options={{
          title: t('tab_label_messages'),
          tabBarLabel: ({focused}) => (
            <Text style={focused ? styles.labelFocused : styles.label}>
              {t('tab_label_messages')}
            </Text>
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
        options={{
          title: t('tab_label_profile'),
          tabBarLabel: ({focused}) => (
            <Text style={focused ? styles.labelFocused : styles.label}>
              {t('tab_label_profile')}
            </Text>
          ),
          tabBarIcon: ({focused}) => (
            <Icon
              name={focused ? 'person' : 'person-outline'}
              style={styles.icon}
            />
          ),
        }}
      />
    </Tab.Navigator>
  );
};

export default TabsScreen;
