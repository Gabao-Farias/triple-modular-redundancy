import React, { FC } from 'react';
import { InputWrapper, Label, Option, Select, SubLabel, SubWrapper, TextInput, Title, Wrapper } from './styles';

type Props = {
  iterationInputProps?: React.InputHTMLAttributes<HTMLInputElement>;
  inputWrapperProps?: React.HTMLAttributes<HTMLDivElement>;
  iterationsValue?: number;
  votingValue?: string | number;
  handleVotingChange?: (votingMethod: number) => void;
  handleIterationChange?: (iterations: number) => void;
  votingMethods?: string[];
};

const RunConfig: FC<Props> = ({
  iterationInputProps,
  inputWrapperProps,
  votingValue = "0",
  votingMethods = [],
  handleVotingChange,
  handleIterationChange,
  iterationsValue = 0,
}) => {
  const defaultHandleChange = (value: string) => {
    if (handleVotingChange) {
      handleVotingChange(Number(value));
      return;
    }
    console.warn("No function passed on 'handleChange'");
  };

  const defaultHandleIterationChange = (target: EventTarget & HTMLInputElement) => {
    if (handleIterationChange) handleIterationChange(Number(target.value));
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
          <Select value={votingValue} onChange={({ target }) => defaultHandleChange(target.value)}>
            {votingMethods.map((key, index) => <Option key={key} value={index}>{key}</Option>)}
          </Select>
        </SubWrapper>
      </InputWrapper>
    </Wrapper>
  );
};

export default RunConfig;
