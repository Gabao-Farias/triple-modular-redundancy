import React from 'react';
import { inject, observer } from 'mobx-react';
import { Benchmarking, InputGeneratorConfig, OperationModuleConfig, Results, RunConfig, Statistics } from './components';
import { StoreKeyNames } from './stores';
import TMRStore from './stores/tmr.store';
import { ButtonWrapper, ConfigTitle, ConfigWrapper, RunButton, Wrapper } from './styles';
import { OperationFunctionsKeys, VotingMethodsFunctionsKeys } from './utils';

type Props = {
  tmrStore?: TMRStore;
};

const App: React.FC<Props> = ({ tmrStore }) => {

  const handleOperationNameChange = ( operationName: OperationFunctionsKeys ): void => {
    tmrStore?.setOperationModuleConfig({ operationName });
  };

  const handleVotingMethodChange = ( votingMethod: VotingMethodsFunctionsKeys ): void => {
    tmrStore?.setTMRRunConfig({ votingMethod })
  };

  const handleIterationsChange = ( iterations: number ): void => {
    tmrStore?.setTMRRunConfig({ iterations })
  };

  const handleMaxMinChange = (iterations: number, minOrMax: "minimum" | "maximum"): void => {
    tmrStore?.setInputGeneratorConfig({ [minOrMax]: iterations });
  };

  const handleDeviationChanceChange = (deviationChance: number): void => {
    tmrStore?.setOperationModuleConfig({ deviationChance });
  };

  const handleDeviationMaxThresholdChange = (deviationMaxThreshold: number): void => {
    tmrStore?.setOperationModuleConfig({ deviationMaxThreshold });
  };

  const handleDeviationMinThresholdChange = (deviationMinThreshold: number): void => {
    tmrStore?.setOperationModuleConfig({ deviationMinThreshold });
  };

  const handleModulesPerIterationChange = (modules: number): void => {
    tmrStore?.setModulesPerIteration(modules);
  };

  const handleClick = async () => {
    try {
      await tmrStore?.run();
    } catch (err) {
      console.log(err);
    }
  };

  return (
    <Wrapper>
        <ConfigTitle>Setup</ConfigTitle>
        <ConfigWrapper>
          <InputGeneratorConfig
            maxValue={tmrStore?.inputGeneratorConfig.maximum}
            minValue={tmrStore?.inputGeneratorConfig.minimum}
            onChangeMaxValue={(iterations) => handleMaxMinChange(iterations, "maximum")}
            onChangeMinValue={(iterations) => handleMaxMinChange(iterations, "minimum")}
          />
          <OperationModuleConfig
            operationValue={tmrStore?.operationModuleConfig.operationName}
            handleOperationNameChange={handleOperationNameChange}
            deviationChanceValue={tmrStore?.operationModuleConfig.deviationChance}
            handleDeviationChanceChange={handleDeviationChanceChange}
            handleDeviationMaxThresholdChange={handleDeviationMaxThresholdChange}
            handleDeviationMinThresholdChange={handleDeviationMinThresholdChange}
            deviationMaxThresholdValue={tmrStore?.operationModuleConfig.deviationMaxThreshold}
            deviationMinThresholdValue={tmrStore?.operationModuleConfig.deviationMinThreshold}
          />
          <RunConfig
            handleVotingChange={handleVotingMethodChange}
            votingValue={tmrStore?.tmrConfig.votingMethod}
            iterationsValue={tmrStore?.tmrConfig.iterations}
            handleIterationChange={handleIterationsChange}
            handleModulePerIterationChange={handleModulesPerIterationChange}
            modulePerIterationValue={tmrStore?.modulesPerIteration}
          />
        </ConfigWrapper>
        <ButtonWrapper>
        <RunButton onClick={() => handleClick()}>Run</RunButton>
        </ButtonWrapper>
      <Results results={tmrStore?.results} />
      <Statistics statistics={tmrStore?.statistics} />
      <Benchmarking benchmarkingResults={tmrStore?.benchmarkingResults} />
    </Wrapper>
  );
};

const tmr: StoreKeyNames = 'tmrStore';

export default inject(tmr)(observer(App));
