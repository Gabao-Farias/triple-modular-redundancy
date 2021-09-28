import { action, makeAutoObservable, observable } from 'mobx';
import { persist } from 'mobx-persist';
import InputGenerator from '../lib/tmr/InputGenerator/InputGenerator';
import InputGeneratorConfig from '../lib/tmr/InputGenerator/InputGeneratorConfig';
import OperationModule from '../lib/tmr/OperationModule/OperationModule';
import OperationModuleConfig from '../lib/tmr/OperationModule/OperationModuleConfig';
import TMR from '../lib/tmr/TMR';
import TMRResult from '../lib/tmr/TMRResult';
import TMRRunConfig from '../lib/tmr/TMRRunConfig';

export default class TMRStore {
  constructor() {
    makeAutoObservable(this);
  }

  @persist('object')
  @observable
  inputGeneratorConfig: InputGeneratorConfig = new InputGeneratorConfig();

  @persist('object')
  @observable
  inputGenerator: InputGenerator = new InputGenerator();

  @persist('object')
  @observable
  operationModuleConfig: OperationModuleConfig = new OperationModuleConfig();

  @persist('object')
  @observable
  operationModule: OperationModule = new OperationModule();

  @persist('object')
  @observable
  runConfig: TMRRunConfig = new TMRRunConfig();

  @persist('object')
  @observable
  tmr?: TMR = new TMR(this.operationModuleConfig);

  @persist('object')
  @observable
  tmrResults?: TMRResult;

  @action
  setInputGeneratorConfig = (config: Partial<InputGeneratorConfig>, updateInputGenerator = true): void => {
    this.inputGeneratorConfig = {...this.inputGeneratorConfig, ...config};
    if (updateInputGenerator)
      this.inputGenerator = new InputGenerator(this.inputGeneratorConfig);
  };

  @action
  setOperationModuleConfig = (config: Partial<OperationModuleConfig>, updateOperationModule = true): void => {
    this.operationModuleConfig = {...this.operationModuleConfig, ...config};
    if (updateOperationModule)
      this.operationModule = new OperationModule(this.operationModuleConfig);
  };

  @action
  setTMRRunConfig = (config: Partial<TMRRunConfig>): void => {
    this.runConfig = {...this.runConfig, ...config};
  };

  @action
  run = async (): Promise<void> => {
    const results = await this.tmr?.Run(this.runConfig);

    console.log(results);
  };
}
