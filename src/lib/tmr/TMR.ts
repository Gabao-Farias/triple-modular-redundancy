/* eslint-disable no-loop-func */
import IoperationModule from "./OperationModule/IOperationModule";
import ITMR from "./ITMR";
import IInputGenerator from "./InputGenerator/IInputGenerator";
import IOperationModuleConfig from "./OperationModule/IOperationModuleConfig";
import TMRRunConfig from "./TMRRunConfig";
import TMRResult from "./TMRResult";
import functions from "../../utils/functions";
import InputGenerator from "./InputGenerator/InputGenerator";
import Voter from "./Voter/Voter";
import IVoter from "./Voter/IVoter";
import ModuleIterationResult from "./ModuleIterationResult";
import IOperationModule from "./OperationModule/IOperationModule";


export default class TMR implements ITMR {
    private _inputGenerator: IInputGenerator = {
        GenerateRandomInput: () => 0
    }
    private _modules: IoperationModule[] = []
    private _currentOperationModuleConfig: IOperationModuleConfig
    private _voter: IVoter = new Voter()
    public constructor(defaultOperationModuleConfig: IOperationModuleConfig){
        this._currentOperationModuleConfig = defaultOperationModuleConfig
    }

    get inputGenerator(){
        return this._inputGenerator
    }
    set inputGenerator(inputGenerator: IInputGenerator){
        this._inputGenerator = inputGenerator
    }
 

    public AddOperationModule(...operationModule: IOperationModule[]): void {
        operationModule.forEach(module => module.configuration = this._currentOperationModuleConfig)
        this._modules.push(...operationModule)
    }

    public RemoveOperationModule(operationModule: IOperationModule): void {
        this._modules = this._modules.filter(obj => obj !== operationModule);
    }

    public SetModulesConfiguration(operationModuleConfig: IOperationModuleConfig){
        this._modules.forEach(module => module.configuration = operationModuleConfig)
        this._currentOperationModuleConfig = operationModuleConfig
    }

    public async Run(runConfig: TMRRunConfig): Promise<TMRResult>{
        if (this.inputGenerator == null)
            this.inputGenerator = new InputGenerator()
            
        var runResult = new TMRResult();
        runResult.votingMethod = runConfig.votingMethod;
        runResult.operationModuleConfig = { ...this._currentOperationModuleConfig }

        for (var i = 0; i < runConfig.iterations; i++){
            var randomInput = this._inputGenerator.GenerateRandomInput()
            var iterationOutputs: number[] = []
            //Executa todos os módulos
            this._modules.forEach(module => iterationOutputs.push(module.DoOperation(randomInput)))
            var votingResult = this._voter.DoVote(iterationOutputs, runConfig.votingMethod)

            var iterationResult: ModuleIterationResult = {
                input: randomInput,
                expectedResult: functions[this._currentOperationModuleConfig.operationName](randomInput),
                processedOutputs: iterationOutputs,
                voterResult: votingResult
            }

            runResult.iterationResult.push(iterationResult)
        }

        runResult.GenerateStatistics()
        return runResult
    }
}