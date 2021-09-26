import IOperationModuleConfig from "./IOperationModuleConfig";

export default interface IOperationModule{
    configuration: IOperationModuleConfig
    operation: (input: number) => number
    DoOperation(input: number): number
}