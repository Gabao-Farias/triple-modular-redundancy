import React, { FC } from 'react';
import { operationFunctions, OperationFunctionsKeys } from '../../utils';
import {
  InputWrapper,
  Label,
  Option,
  Select,
  SubLabel,
  SubWrapper,
  TextInput,
  Title,
  Wrapper
} from './styles';

type Props = {
  maxInputProps?: React.InputHTMLAttributes<HTMLInputElement>;
  minInputProps?: React.InputHTMLAttributes<HTMLInputElement>;
  inputWrapperProps?: React.HTMLAttributes<HTMLDivElement>;
  operationValue?: OperationFunctionsKeys;
  handleOperationNameChange?: (operation: OperationFunctionsKeys) => void;
  deviationChanceValue?: number;
  handleDeviationChanceChange?: (value: number) => void;
  deviationMaxThresholdValue?: number;
  handleDeviationMaxThresholdChange?: (value: number) => void;
  deviationMinThresholdValue?: number;
  handleDeviationMinThresholdChange?: (value: number) => void;
};

const functionsKeys = Object.keys(operationFunctions);

const Module: FC<Props> = ({
  maxInputProps,
  minInputProps,
  inputWrapperProps,
  operationValue = "double",
  deviationChanceValue,
  handleOperationNameChange,
  handleDeviationChanceChange,
  deviationMaxThresholdValue,
  deviationMinThresholdValue,
  handleDeviationMaxThresholdChange,
  handleDeviationMinThresholdChange,
}) => {
  const defaultHandleOperationNameChange = (value: string) => {
    if (handleOperationNameChange) {
      handleOperationNameChange(value as OperationFunctionsKeys);
      return;
    }
    console.warn("No function passed on 'handleOperationNameChange'");
  };

  const defaultHandleDeviationChanceChange = (value: string) => {
    if (handleDeviationChanceChange) {
      handleDeviationChanceChange(Number(value));
      return;
    }
    console.warn("No function passed on 'handleDeviationChanceChange'");
  };

  const defaultHandleDeviationMaxThresholdChange = (value: string) => {
    if (handleDeviationMaxThresholdChange) {
      handleDeviationMaxThresholdChange(Number(value));
      return;
    }
    console.warn("No function passed on 'handleDeviationChanceChange'");
  };

  const defaultHandleDeviationMinThresholdChange = (value: string) => {
    if (handleDeviationMinThresholdChange) {
      handleDeviationMinThresholdChange(Number(value));
      return;
    }
    console.warn("No function passed on 'handleDeviationChanceChange'");
  };

  return (
    <Wrapper>
      <Title>Module</Title>
      <InputWrapper {...inputWrapperProps} >
        <SubWrapper>
          <Label>DeviationChance</Label>
          <SubLabel>(0 - 100)</SubLabel>
          <TextInput
            maxLength={3}
            max="100"
            min="0"
            type="number"
            value={deviationChanceValue}
            onChange={({target}) => defaultHandleDeviationChanceChange(target.value)}
            {...maxInputProps}
          />
        </SubWrapper>
        <SubWrapper>
          <Label>DeviationMaxThreshold</Label>
          <TextInput
            maxLength={4}
            type="number"
            value={deviationMaxThresholdValue}
            onChange={({target}) => defaultHandleDeviationMaxThresholdChange(target.value)}
            {...minInputProps}
          />
        </SubWrapper>
        <SubWrapper>
          <Label>DeviationMinThreshold</Label>
          <TextInput
            maxLength={4}
            type="number"
            value={deviationMinThresholdValue}
            onChange={({target}) => defaultHandleDeviationMinThresholdChange(target.value)}
            {...minInputProps}
          />
        </SubWrapper>
        <SubWrapper>
          <Label>OperationName</Label>
          <Select
            value={operationValue}
            onChange={({ target }) => defaultHandleOperationNameChange(target.value)}
          >
            {functionsKeys.map((key) => <Option key={key} value={key}>{key}</Option>)}
          </Select>
        </SubWrapper>
      </InputWrapper>
    </Wrapper>
  );
};

export default Module;
