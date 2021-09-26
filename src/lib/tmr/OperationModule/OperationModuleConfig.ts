import { FunctionsKeys } from "../../../utils/functions";
import IOperationModuleConfig from "./IOperationModuleConfig";

export default class OperationModuleConfig implements IOperationModuleConfig{
    public deviationChance: number;
    public deviationMaxThreshold: number;
    public deviationMinThreshold: number;
    public operationName: FunctionsKeys;

    constructor(
        options?: {
            deviationChance?: number, 
            deviationMaxThreshold?: number, 
            deviationMinThreshold?: number,
            operationName?: FunctionsKeys
        }
    ){
        this.deviationChance = options?.deviationChance ?? 10
        this.deviationMinThreshold = options?.deviationMinThreshold ?? 0.1
        this.deviationMaxThreshold = options?.deviationMaxThreshold ?? 5
        this.operationName = options?.operationName ?? "double"
    }
}