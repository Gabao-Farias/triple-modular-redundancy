import IOperationModuleConfig from "./IOperationModuleConfig";

export default class OperationModuleConfig implements IOperationModuleConfig{
    public deviationChance: number;
    public deviationMaxThreshold: number;
    public deviationMinThreshold: number;

    constructor(
        options?: {
            deviationChance?: number, 
            deviationMaxThreshold?: number, 
            deviationMinThreshold?: number
        }
    ){
        this.deviationChance = options?.deviationChance ?? 10
        this.deviationMinThreshold = options?.deviationMinThreshold ?? 0.1
        this.deviationMaxThreshold = options?.deviationMaxThreshold ?? 5
    }
}