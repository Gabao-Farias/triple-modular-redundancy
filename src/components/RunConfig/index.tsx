import React, { FC } from 'react';
import { votingMethodsFunctions, VotingMethodsFunctionsKeys } from '../../utils';
import { InputWrapper, Label, Option, Select, SubLabel, SubWrapper, TextInput, Title, Wrapper } from './styles';

type Props = {
  iterationInputProps?: React.InputHTMLAttributes<HTMLInputElement>;
  inputWrapperProps?: React.HTMLAttributes<HTMLDivElement>;
  iterationsValue?: number;
  votingValue?: VotingMethodsFunctionsKeys;
  modulePerIterationValue?: number;
  handleVotingChange?: (votingMethod: VotingMethodsFunctionsKeys) => void;
  handleIterationChange?: (iterations: number) => void;
  handleModulePerIterationChange?: (modules: number) => void;
};

const votingMethods = Object.keys(votingMethodsFunctions);

const RunConfig: FC<Props> = ({
  iterationInputProps,
  inputWrapperProps,
  votingValue = "0",
  handleVotingChange,
  handleIterationChange,
  handleModulePerIterationChange,
  iterationsValue = 0,
  modulePerIterationValue = 0,
}) => {
  const defaultHandleChange = (value: VotingMethodsFunctionsKeys) => {
    if (handleVotingChange) {
      console.log(value);
      handleVotingChange(value);
      return;
    }
    console.warn("No function passed on 'handleChange'");
  };

  const defaultHandleIterationChange = (target: EventTarget & HTMLInputElement) => {
    if (handleIterationChange) handleIterationChange(Number(target.value));
  };

  const defaultHandleModulePerIterationChange = (target: EventTarget & HTMLInputElement) => {
    if (handleModulePerIterationChange) handleModulePerIterationChange(Number(target.value));
  };

  return (
    <Wrapper>
      <Title>RunConfig</Title>
      <InputWrapper {...inputWrapperProps} >
        <SubWrapper>
          <Label>Iterations</Label>
          <SubLabel>(0 - 1000)</SubLabel>
          <TextInput
            onChange={({target}) => defaultHandleIterationChange(target)}
            maxLength={4}
            max="1000"
            min="0"
            type="number"
            value={iterationsValue}
            {...iterationInputProps}
          />
        </SubWrapper>
        <SubWrapper>
          <Label>VotingMethod</Label>
          <Select value={votingValue} onChange={({ target }) => defaultHandleChange(target.value as VotingMethodsFunctionsKeys)}>
            {votingMethods.map((key) => <Option key={key} value={key}>{key}</Option>)}
          </Select>
        </SubWrapper>
        <SubWrapper>
          <Label>ModulesPerIteration</Label>
          <SubLabel>(3 - 100)</SubLabel>
          <TextInput
            onChange={({target}) => defaultHandleModulePerIterationChange(target)}
            maxLength={3}
            max="100"
            min="3"
            type="number"
            value={modulePerIterationValue}
          />
        </SubWrapper>
      </InputWrapper>
    </Wrapper>
  );
};

export default RunConfig;
