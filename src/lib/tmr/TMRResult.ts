import ModuleIterationResult from "./ModuleIterationResult"
import IOperationModuleConfig from "./OperationModule/IOperationModuleConfig"
import VotingMethod from "./Voter/VotingMethod"

export default class TMRResult{
    public operationModuleConfig: IOperationModuleConfig = {
        deviationChance: 0,
        deviationMaxThreshold: 0,
        deviationMinThreshold: 0,
        operationName: 'double',
    };
    public votingMethod: VotingMethod = VotingMethod.Average;
    public iterationResult: Array<ModuleIterationResult> = [];
}