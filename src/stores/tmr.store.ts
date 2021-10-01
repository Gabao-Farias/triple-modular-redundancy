import { action, makeAutoObservable, observable } from 'mobx';
import { persist } from 'mobx-persist';
import InputGenerator from '../lib/tmr/InputGenerator/InputGenerator';
import TMR from '../lib/tmr/TMR';
import TMRResult from '../lib/tmr/TMRResult';
import { getModulesPerIteration, votingMethodsFunctions, VotingMethodsFunctionsKeys } from '../utils';
import { OperationModuleType } from '../utils/types';
import { TMRRunConfigType } from '../utils/types/Run';

const votingMethods = Object.keys(votingMethodsFunctions);

export default class TMRStore {
  constructor() {
    makeAutoObservable(this);
  }


  @persist('object')
  @observable
  inputGeneratorConfig: InputGeneratorType = { maximum: 100, minimum: 1 };

  @persist('object')
  @observable
  operationModuleConfig: OperationModuleType = {
    deviationChance: 20,
    deviationMaxThreshold: 15,
    deviationMinThreshold: 5,
    operationName: 'double',
  };

  @persist('object')
  @observable
  tmrConfig: TMRRunConfigType = { iterations: 5, votingMethod: "averageVoting" }

  @persist('object')
  @observable
  modulesPerIteration: number = 5;

  @persist('object')
  @observable
  results?: ModuleIterationResultType[];

  @persist('object')
  @observable
  statistics?: TMRResultStatistics;

  @persist('object')
  @observable
  benchmarkingResults?: TMRResult[];

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
  setStatistics = (statistics?: TMRResultStatistics) => {
    this.statistics = statistics;
  };

  @action
  setBenchmarkingData = (benchmarkingResults: TMRResult[]): void => {
    this.benchmarkingResults = benchmarkingResults;
  };

  @action
  generateVotingMethodCoparisonResult = async () => {
    const comparisonResults: TMRResult[] = [];
    votingMethods.map(async (key) => {
      if(key !== this.tmrConfig.votingMethod) {
        const tmr = new TMR(this.operationModuleConfig);
        const modules = getModulesPerIteration(this.modulesPerIteration);

        tmr.AddOperationModule(...modules);
        tmr.inputGenerator = new InputGenerator({ maximum: 50, minimum: 1});

        const results = await tmr.Run({ ...this.tmrConfig, votingMethod: key as VotingMethodsFunctionsKeys });

        comparisonResults.push(results);
        this.setBenchmarkingData(comparisonResults);
      }
    });
    console.log(comparisonResults);
  };

  @action
  run = async (): Promise<void> => {
    const tmr = new TMR(this.operationModuleConfig);
    const modules = getModulesPerIteration(this.modulesPerIteration);

    tmr.AddOperationModule(...modules);
    tmr.inputGenerator = new InputGenerator({ maximum: 50, minimum: 1});

    const results = await tmr.Run(this.tmrConfig);

    this.generateVotingMethodCoparisonResult();

    this.setResults(results.iterationResult);
    this.setStatistics(results.statistics);
  };
}
