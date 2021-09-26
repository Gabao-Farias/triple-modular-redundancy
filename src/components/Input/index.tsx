import React, { FC } from 'react';
import { InputWrapper, TextInput } from './styles';

type Props = {
  inputProps?: React.InputHTMLAttributes<HTMLInputElement>;
  inputWrapperProps?: React.HTMLAttributes<HTMLDivElement>;
};

const Input: FC<Props> = ({ inputProps, inputWrapperProps }) => {

  return (
    <InputWrapper {...inputWrapperProps} >
      <TextInput {...inputProps} />
    </InputWrapper>
  );
};

export default Input;
