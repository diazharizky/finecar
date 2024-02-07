import React from 'react';
import {Input, InputField} from '@gluestack-ui/themed';

import {baseStyle} from './styles';

interface FalconInputProps {
  readonly?: boolean;
  disabled?: boolean;
  type?: 'text' | 'password';
  placeholder?: string;
}

const FalconInput = (props: FalconInputProps) => {
  return (
    <Input
      variant="outline"
      isReadOnly={props.readonly}
      isDisabled={props.disabled}>
      <InputField
        style={{...baseStyle.text, backgroundColor: '#fff'}}
        type={props.type}
        placeholder={props.placeholder}
      />
    </Input>
  );
};

export {FalconInput};
