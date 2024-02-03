import React from 'react';
import {Box} from '@gluestack-ui/themed';

import {FalconScrollView, FalconText} from '../../components';

interface Notification {
  message: string;
}

const dummyNotifications: Notification[] = [
  {
    message: 'My heart is sinking',
  },
  {
    message: "As I'm lifting up above the clouds away from you",
  },
];

const NotificationsTabScreen = () => {
  const [notifications] = React.useState(dummyNotifications);

  return (
    <Box p="$5">
      <FalconText>Notifications screen</FalconText>
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
