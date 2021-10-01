import { FC } from 'react';
import { Label, IterationWrapper, ResultsWrapper, Wrapper, ModuleWrapper, ModulesWrapper, IterationIndex, ResultsTitle, ResultsSubTitle, ResultsTitleWrapper } from './styles'; 

type Props = {
  results?: ModuleIterationResultType[];
};

const Results: FC<Props> = ({ results }) => {
  if (results)
    return (
      <Wrapper>
        <ResultsTitleWrapper>
          <ResultsTitle>Results</ResultsTitle>
        </ResultsTitleWrapper>
        <ResultsWrapper>
          {results.map((iterationResult, index) => (
            
            <IterationWrapper>
              <IterationIndex>Iteration {index + 1}</IterationIndex>
              <Label>ExpectedValue: {iterationResult.expectedResult}</Label>
              <Label>Input: {iterationResult.input}</Label>
              <ModulesWrapper>
                {iterationResult.processedOutputs.map((value, index) => (
                  <ModuleWrapper error={value !== iterationResult.expectedResult}>
                    <Label>Module: {index + 1}</Label>
                    <Label>GeneratedValue: {value}</Label>
                  </ModuleWrapper>
                ))}
              </ModulesWrapper>
              <Label error={iterationResult.voterResult !== iterationResult.expectedResult}>Voted: {iterationResult.voterResult}</Label>
            </IterationWrapper>
          ))}
        </ResultsWrapper>
      </Wrapper>
    );

  return (
    <Wrapper>
      <ResultsTitleWrapper>
        <ResultsTitle>Results</ResultsTitle>
        <ResultsSubTitle>You must run to generate results!</ResultsSubTitle>
      </ResultsTitleWrapper>
    </Wrapper>
  );
};

export default Results;
