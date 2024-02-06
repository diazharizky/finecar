import React, {useEffect} from 'react';
import {Box} from '@gluestack-ui/themed';
import {useIsFocused} from '@react-navigation/native';

import {FalconText} from '../../components';
import {useStatusBar, useAppBar} from '../../contexts';
import {mainColor} from '../../consts/style';

const MessagesTabScreen = () => {
  const isFocused = useIsFocused();
  const {setBgColor, setStyle} = useStatusBar();
  const {setVisibility} = useAppBar();

  useEffect(() => {
    if (isFocused) {
      setBgColor!(mainColor);
      setStyle!('light-content');
      setVisibility!(true);
    }
  }, [isFocused]);

  return (
    <Box p="$5">
      <FalconText style={{fontFamily: ''}}>Messages screen</FalconText>
    </Box>
  );
};

export default MessagesTabScreen;
