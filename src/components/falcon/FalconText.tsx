import React from 'react';
import {Text} from '@gluestack-ui/themed';

import {baseStyle} from './styles';

const FalconText = (props: React.ComponentProps<typeof Text>) => {
  return (
    <Text
      {...props}
      style={{
        ...(props.style as object),
        fontFamily: baseStyle.text.fontFamily,
      }}>
      {props.children}
    </Text>
  );
};

export {FalconText};
