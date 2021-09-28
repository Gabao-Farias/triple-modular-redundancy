import React from 'react';
import { inject, observer } from 'mobx-react';
import { InputGeneratorConfig, OperationModuleConfig, RunConfig } from './components';
import VotingMethod from './lib/tmr/Voter/VotingMethod';
import { StoreKeyNames } from './stores';
import TMRStore from './stores/tmr.store';
import { FunctionsKeys } from './utils';

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
    tmrStore?.setTMRRunConfig({ iterations })
  };

  const handleClick:React.MouseEventHandler<HTMLButtonElement> | undefined = async () => {
    try {
      await tmrStore?.run();
    } catch (error) {
      console.log("TÃO ME FUDENDO!");
    }
  };

  return (
    <>
      <div
        style={{
          display: 'flex',
          flexDirection: 'column',
          minHeight: 800,
          alignItems: 'center',
          justifyContent: 'center',
        }}
      >
        <InputGeneratorConfig />
        <OperationModuleConfig
          value={tmrStore?.operationModuleConfig.operationName}
          handleOperationNameChange={handleOperationNameChange}
        />
        <RunConfig
          handleVotingChange={handleVotingMethodChange}
          votingValue={tmrStore?.runConfig.votingMethod || 0}
          votingMethods={splitCorrectVotingMethodKeys()}
          iterationsValue={tmrStore?.runConfig.iterations}
          handleIterationChange={handleIterationsChange}
        />
        <button onClick={handleClick}>Oii</button>
        <h1>Hello world!</h1>
        <h4>{tmrStore?.inputGeneratorConfig.maximum}</h4>
      </div>
      <div
        style={{
          display: 'flex',
          flexDirection: 'column',
          minHeight: 800,
          alignItems: 'center',
          justifyContent: 'center',
        }}
      >
        <OperationModuleConfig />
        <h1>Hello world!</h1>
      </div>
    </>
  );
};

const tmr: StoreKeyNames = 'tmrStore';

export default inject(tmr)(observer(App));
