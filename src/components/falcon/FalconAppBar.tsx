import React from 'react';
import {HStack} from '@gluestack-ui/themed';

import {FalconText} from './FalconText';
import {mainColor} from '../../consts/style';

const FalconAppBar = () => {
  return (
    <HStack
      backgroundColor={mainColor}
      p="$4"
      justifyContent="space-between"
      alignItems="center">
      <FalconText color="white">Home</FalconText>
    </HStack>
  );
};

export {FalconAppBar};
