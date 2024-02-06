import React from 'react';
import {HStack} from '@gluestack-ui/themed';

import {FalconText} from './FalconText';
import {mainColor} from '../../consts/style';
import {useAppBar} from '../../contexts';

const FalconAppBar = () => {
  const {visible} = useAppBar();
  return (
    <>
      {visible && (
        <HStack
          backgroundColor={mainColor}
          p="$4"
          justifyContent="space-between"
          alignItems="center">
          <FalconText color="white">Home</FalconText>
        </HStack>
      )}
    </>
  );
};

export {FalconAppBar};
