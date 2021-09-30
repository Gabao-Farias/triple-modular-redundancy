import { action, makeAutoObservable, observable } from 'mobx';
import { persist } from 'mobx-persist';
import InputGenerator from '../lib/tmr/InputGenerator/InputGenerator';
import InputGeneratorConfig from '../lib/tmr/InputGenerator/InputGeneratorConfig';
import OperationModule from '../lib/tmr/OperationModule/OperationModule';
import OperationModuleConfig from '../lib/tmr/OperationModule/OperationModuleConfig';
import TMR from '../lib/tmr/TMR';
import TMRResult from '../lib/tmr/TMRResult';
import TMRRunConfig from '../lib/tmr/TMRRunConfig';
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
  results: ModuleIterationResultType[] = [];

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
    const modules = [new OperationModule(), new OperationModule(), new OperationModule()];

    tmr.AddOperationModule(...modules);
    tmr.inputGenerator = new InputGenerator({ maximum: 50, minimum: 1});

    const results = await tmr.Run(this.tmrConfig);

    this.setResults(results.iterationResult);

    console.log(results);
    console.log(this.results);
  };
}
