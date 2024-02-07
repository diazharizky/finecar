import React, {useEffect, useState} from 'react';
import {Box, HStack, Pressable} from '@gluestack-ui/themed';
import {
  useIsFocused,
  useNavigation,
  NavigationProp,
} from '@react-navigation/native';
import Icon from 'react-native-vector-icons/Ionicons';
import {StyleSheet} from 'react-native';

import {FalconScrollView, FalconText} from '../components';
import {useStatusBar, useAppBar} from '../contexts';
import {mainColor} from '../consts/style';

interface Notification {
  message: string;
}

const styles = StyleSheet.create({
  icon: {
    fontSize: 24,
    color: '#fff',
  },
});

const dummyNotifications: Notification[] = [
  {
    message: 'My heart is sinking',
  },
  {
    message: "As I'm lifting up above the clouds away from you",
  },
];

const AppBarContent = () => {
  const navigation = useNavigation();
  return (
    <>
      <HStack>
        <Pressable onPress={() => navigation.goBack()}>
          <Icon name="chevron-back" style={styles.icon} />
        </Pressable>
      </HStack>
      <HStack></HStack>
    </>
  );
};

const NotificationsTabScreen = () => {
  const isFocused = useIsFocused();
  const {setBgColor, setStyle} = useStatusBar();
  const {setVisibility, setContent} = useAppBar();
  const [notifications] = useState(dummyNotifications);

  useEffect(() => {
    if (isFocused) {
      setBgColor!(mainColor);
      setStyle!('light-content');
      setVisibility!(true);
      setContent!(<AppBarContent />);
    } else {
      setContent!(null);
    }
  }, [isFocused]);

  return (
    <Box p="$5">
      <FalconScrollView>
        {notifications.map((notification, index) => (
          <Box key={index}>
            <FalconText>{notification.message}</FalconText>
          </Box>
        ))}
      </FalconScrollView>
    </Box>
  );
};

export default NotificationsTabScreen;
