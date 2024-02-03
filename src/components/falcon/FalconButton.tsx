import React from 'react';
import {TouchableOpacityProps} from 'react-native';
import {Button, ButtonText} from '@gluestack-ui/themed';

import {baseStyle} from './styles';

interface FalconButtonProps extends TouchableOpacityProps {
  children: React.ReactNode;
}

const FalconButton = (props: FalconButtonProps) => {
  return (
    <Button onPress={props.onPress}>
      <ButtonText style={baseStyle.text}>{props.children}</ButtonText>
    </Button>
  );
};

export {FalconButton};
