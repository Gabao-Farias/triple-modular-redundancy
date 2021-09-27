import { action, makeAutoObservable, observable } from 'mobx';
import IOperationModuleConfig from '../lib/tmr/OperationModule/IOperationModuleConfig';
import TMR from '../lib/tmr/TMR';
import TMRResult from '../lib/tmr/TMRResult';
import TMRRunConfig from '../lib/tmr/TMRRunConfig';

export default class TMRStore {
  constructor() {
    makeAutoObservable(this);
  }

  @observable
  moduleConfig: IOperationModuleConfig = {
    deviationChance: 0,
    deviationMaxThreshold: 0,
    deviationMinThreshold: 0,
    operationName: 'double',
  };

  @observable
  runConfig: TMRRunConfig = new TMRRunConfig();

  @observable
  tmr?: TMR = new TMR(this.moduleConfig);

  @observable
  tmrResults?: TMRResult;

  @action
  updateConfiguration = (config: Partial<IOperationModuleConfig>): void => {
    this.moduleConfig = {...this.moduleConfig, ...config};
  };

  @action
  run = async (): Promise<void> => {
    this.tmrResults = await this.tmr?.Run(this.runConfig);
    console.log(this.tmrResults);
  };
}
