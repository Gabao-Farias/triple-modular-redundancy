import React, { FC } from 'react';
import { InputWrapper, Label, SubWrapper, TextInput, Title, Wrapper } from './styles';

type Props = {
  maxInputProps?: React.InputHTMLAttributes<HTMLInputElement>;
  minInputProps?: React.InputHTMLAttributes<HTMLInputElement>;
  inputWrapperProps?: React.HTMLAttributes<HTMLDivElement>;
  onChangeMinValue?: (min: number) => void;
  minValue?: number;
  onChangeMaxValue?: (max: number) => void;
  maxValue?: number;
};

const InputGenerator: FC<Props> = ({ maxInputProps,
  minInputProps,
  inputWrapperProps,
  minValue,
  maxValue,
  onChangeMinValue,
  onChangeMaxValue,
}) => {
  const defaultHandleMaxChange = (target: EventTarget & HTMLInputElement) => {
    if (onChangeMaxValue) onChangeMaxValue(Number(target.value));
  };

  const defaultHandleMinChange = (target: EventTarget & HTMLInputElement) => {
    if (onChangeMinValue) onChangeMinValue(Number(target.value));
  };

  return (
    <Wrapper>
      <Title>InputGenerator</Title>
      <InputWrapper {...inputWrapperProps}>
        <SubWrapper>
          <Label>Min</Label>
          <TextInput
            value={minValue}
            onChange={({target}) => defaultHandleMinChange(target)}
            maxLength={4}
            type="number"
            {...maxInputProps}
          />
        </SubWrapper>
        <SubWrapper>
          <Label>Max</Label>
          <TextInput
            value={maxValue}
            onChange={({target}) => defaultHandleMaxChange(target)}
            maxLength={4}
            type="number"
            {...minInputProps}
          />
        </SubWrapper>
      </InputWrapper>
    </Wrapper>
  );
};

export default InputGenerator;
