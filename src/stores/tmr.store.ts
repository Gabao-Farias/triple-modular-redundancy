import { action, makeAutoObservable, observable } from 'mobx';
import { persist } from 'mobx-persist';
import InputGenerator from '../lib/tmr/InputGenerator/InputGenerator';
import TMR from '../lib/tmr/TMR';
import { getModulesPerIteration } from '../utils';
import { OperationModuleType } from '../utils/types';

export default class TMRStore {
  constructor() {
    makeAutoObservable(this);
  }

  @persist('object')
  @observable
  inputGeneratorConfig: InputGeneratorType = { maximum: 1000, minimum: 1 };

  @persist('object')
  @observable
  operationModuleConfig: OperationModuleType = {
    deviationChance: 10,
    deviationMaxThreshold: 15,
    deviationMinThreshold: 5,
    operationName: 'double',
  };

  @persist('object')
  @observable
  tmrConfig: TMRRunConfigType = { iterations: 10, votingMethod: 0 }

  @persist('object')
  @observable
  modulesPerIteration: number = 0;

  @persist('object')
  @observable
  results: ModuleIterationResultType[] = [];

  @action
  setModulesPerIteration = (modules: number) => {
    this.modulesPerIteration = modules;
  };

  @action
  setInputGeneratorConfig = (config: Partial<InputGeneratorType>) => {
    this.inputGeneratorConfig = {...this.inputGeneratorConfig, ...config};
  };

  @action
  setOperationModuleConfig = (config: Partial<OperationModuleType>) => {
    this.operationModuleConfig = {...this.operationModuleConfig, ...config};
  };

  @action
  setTMRRunConfig = (config: Partial<TMRRunConfigType>) => {
    this.tmrConfig = {...this.tmrConfig, ...config};
  };

  @action
  setResults = (results: ModuleIterationResultType[]) => {
    this.results = results;
  };

  @action
  run = async (): Promise<void> => {
    const tmr = new TMR(this.operationModuleConfig);
    const modules = getModulesPerIteration(this.modulesPerIteration);

    tmr.AddOperationModule(...modules);
    tmr.inputGenerator = new InputGenerator({ maximum: 50, minimum: 1});

    const results = await tmr.Run(this.tmrConfig);

    this.setResults(results.iterationResult);

    console.log(results);
    console.log(this.results);
  };
}
