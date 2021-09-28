import React, { FC } from 'react';
import functions from '../../utils/functions';
import { FunctionsKeys } from '../../utils';
import { InputWrapper, Label, Option, Select, SubLabel, SubWrapper, TextInput, Title, Wrapper } from './styles';

type Props = {
  maxInputProps?: React.InputHTMLAttributes<HTMLInputElement>;
  minInputProps?: React.InputHTMLAttributes<HTMLInputElement>;
  inputWrapperProps?: React.HTMLAttributes<HTMLDivElement>;
  value?: FunctionsKeys;
  handleOperationNameChange?:(operation: FunctionsKeys) => void;
};

const functionsKeys = Object.keys(functions);

const Module: FC<Props> = ({ maxInputProps, minInputProps, inputWrapperProps, value = "double", handleOperationNameChange }) => {
  const defaultHandleOperationNameChange = (value: string) => {
    if (handleOperationNameChange) {
      handleOperationNameChange(value as FunctionsKeys);
      return;
    }
    console.warn("No function passed on 'handleOperationNameChange'");
  };

  return (
    <Wrapper>
      <Title>Module</Title>
      <InputWrapper {...inputWrapperProps} >
        <SubWrapper>
          <Label>DeviationChance</Label>
          <SubLabel>(0 - 100)</SubLabel>
          <TextInput maxLength={3} max="100" min="0" type="number" {...maxInputProps} />
        </SubWrapper>
        <SubWrapper>
          <Label>DeviationMaxThreshold</Label>
          <TextInput maxLength={4} type="number" {...minInputProps} />
        </SubWrapper>
        <SubWrapper>
          <Label>DeviationMinThreshold</Label>
          <TextInput maxLength={4} type="number" {...minInputProps} />
        </SubWrapper>
        <SubWrapper>
          <Label>OperationName</Label>
          <Select value={value} onChange={({ target }) => defaultHandleOperationNameChange(target.value)}>
            {functionsKeys.map((key) => <Option key={key} value={key}>{key}</Option>)}
          </Select>
        </SubWrapper>
      </InputWrapper>
    </Wrapper>
  );
};

export default Module;
