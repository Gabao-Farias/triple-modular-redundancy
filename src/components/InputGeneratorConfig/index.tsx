import React, { FC } from 'react';
import { InputWrapper, Label, SubWrapper, TextInput, Title, Wrapper } from './styles';

type Props = {
  maxInputProps?: React.InputHTMLAttributes<HTMLInputElement>;
  minInputProps?: React.InputHTMLAttributes<HTMLInputElement>;
  inputWrapperProps?: React.HTMLAttributes<HTMLDivElement>;
};

const InputGenerator: FC<Props> = ({ maxInputProps, minInputProps, inputWrapperProps }) => {
  return (
    <Wrapper>
      <Title>InputGenerator</Title>
      <InputWrapper {...inputWrapperProps} >
        <SubWrapper>
          <Label>Min</Label>
          <TextInput maxLength={4} type="number" {...maxInputProps} />
        </SubWrapper>
        <SubWrapper>
          <Label>Max</Label>
          <TextInput maxLength={4} type="number" {...minInputProps} />
        </SubWrapper>
      </InputWrapper>
    </Wrapper>
  );
};

export default InputGenerator;
