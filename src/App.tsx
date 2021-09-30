import React from 'react';
import { inject, observer } from 'mobx-react';
import { InputGeneratorConfig, OperationModuleConfig, RunConfig } from './components';
import VotingMethod from './lib/tmr/Voter/VotingMethod';
import { StoreKeyNames } from './stores';
import TMRStore from './stores/tmr.store';
import { FunctionsKeys } from './utils';
import InputGenerator from './lib/tmr/InputGenerator/InputGenerator';
import TMR from './lib/tmr/TMR';
import OperationModule from './lib/tmr/OperationModule/OperationModule';
import { ConfigTitle, ConfigWrapper, Wrapper } from './styles';

type Props = {
  tmrStore?: TMRStore;
};

const votingMethodKeys = Object.keys(VotingMethod);

const splitCorrectVotingMethodKeys = (): string[] => {
  const resultantArray = votingMethodKeys.slice((votingMethodKeys.length / 2), votingMethodKeys.length);
  return resultantArray;
};

const App: React.FC<Props> = ({ tmrStore }) => {

  const handleOperationNameChange = ( operationName: FunctionsKeys ): void => {
    tmrStore?.setOperationModuleConfig({ operationName });
  };

  const handleVotingMethodChange = ( votingMethod: number ): void => {
    tmrStore?.setTMRRunConfig({ votingMethod })
  };

  const handleIterationsChange = ( iterations: number ): void => {
    console.log(iterations);
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

  const handleClick = async () => {
    console.log("Perssed");
    try {
      await tmrStore?.run();
    } catch (err) {
      console.log(err);
    }
  };

  return (
    <Wrapper>
      <div
        style={{
          display: 'flex',
          flexDirection: 'column',
          minHeight: 800,
          alignItems: 'center',
          justifyContent: 'center',
        }}
      >
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
            votingValue={tmrStore?.tmrConfig.votingMethod || 0}
            votingMethods={splitCorrectVotingMethodKeys()}
            iterationsValue={tmrStore?.tmrConfig.iterations}
            handleIterationChange={handleIterationsChange}
          />
        </ConfigWrapper>
      </div>
      <button style={{background: "#f14"}} onClick={() => handleClick()}>Button</button>
      <div
        style={{
          display: 'flex',
          flexDirection: 'column',
          minHeight: 800,
          alignItems: 'center',
          justifyContent: 'center',
        }}
      >
        <h1>Hello world!</h1>
      </div>
    </Wrapper>
  );
};

const tmr: StoreKeyNames = 'tmrStore';

export default inject(tmr)(observer(App));


const teste = new TMR({deviationChance: 10, deviationMaxThreshold: 5, deviationMinThreshold: 0.1, operationName: "double"});

var op = [new OperationModule(), new OperationModule(), new OperationModule(), new OperationModule(), new OperationModule()]
const inp = new InputGenerator({ maximum: 50, minimum: 1})

teste.AddOperationModule(...op)
teste.inputGenerator = inp;

(async () => {
  var r = await teste.Run({ iterations: 2, votingMethod: VotingMethod.Average})
  console.log(r);
})()
