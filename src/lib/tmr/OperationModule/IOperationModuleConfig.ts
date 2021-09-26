import { FunctionsKeys } from "../../../utils/functions";

export default interface IOperationModuleConfig{
    deviationChance: number
    deviationMaxThreshold: number
    deviationMinThreshold: number
    operationName: FunctionsKeys
}