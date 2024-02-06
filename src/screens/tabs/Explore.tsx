import React, {useEffect} from 'react';
import {Box} from '@gluestack-ui/themed';
import {useIsFocused} from '@react-navigation/native';

import {FalconText} from '../../components';
import {useStatusBar, useAppBar} from '../../contexts';
import {lightColor} from '../../consts/style';

const ExploreTabScreen = () => {
  const isFocused = useIsFocused();
  const {setBgColor, setStyle} = useStatusBar();
  const {setVisibility} = useAppBar();

  useEffect(() => {
    setBgColor!(lightColor);
    setStyle!('dark-content');
    setVisibility!(false);
  }, [isFocused]);

  return (
    <Box p="$5">
      <FalconText>Explore screen</FalconText>
    </Box>
  );
};

export default ExploreTabScreen;
