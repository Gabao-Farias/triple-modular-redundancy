import IInputGenerator from "./InputGenerator/IInputGenerator";
import IOperationModule from "./OperationModule/IOperationModule";
import TMRResult from "./TMRResult";
import TMRRunConfig from "./TMRRunConfig";

export default interface ITMR{
    inputGenerator: IInputGenerator
    AddOperationModule(operationModule: IOperationModule): void
    Run(runConfig: TMRRunConfig): Promise<TMRResult>
}