import IoperationModule from "./OperationModule/IOperationModule";
import ITMR from "./ITMR";
import IInputGenerator from "./InputGenerator/IInputGenerator";
import IOperationModuleConfig from "./OperationModule/IOperationModuleConfig";
import VotingMethod from "./Voter/VotingMethod";
import TMRRunConfig from "./TMRRunConfig";
import TMRResult from "./TMRResult";


export default class TMR implements ITMR {
    private _inputGenerator: IInputGenerator;
    private _modules: IoperationModule[];
    private _currentOperationModuleConfig: IOperationModuleConfig;

    public constructor(defaultOperationModuleConfig?: IOperationModuleConfig){
        this._currentOperationModuleConfig = defaultOperationModuleConfig
    }

    get inputGenerator(){
        return this._inputGenerator
    }
    set inputGenerator(inputGenerator: IInputGenerator){
        this._inputGenerator = inputGenerator
    }
 

    public AddOperationModule(...operationModule: IoperationModule[]): void {
        operationModule.forEach(module => module.configuration = this._currentOperationModuleConfig)
        this._modules.push(...operationModule)
    }

    SetModulesConfiguration(operationModuleConfig: IOperationModuleConfig){
        this._modules.forEach(module => module.configuration = operationModuleConfig)
        this._currentOperationModuleConfig = operationModuleConfig
    }

    public async Run(runConfig: TMRRunConfig): TMRResult{
        
    }
}