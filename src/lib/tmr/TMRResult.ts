import ModuleIterationResult from "./ModuleIterationResult"
import IOperationModuleConfig from "./OperationModule/IOperationModuleConfig"
import VotingMethod from "./Voter/VotingMethod"

export default class TMRResult{
    public operationModuleConfig: IOperationModuleConfig
    public votingMethod: VotingMethod
    public iterationResult: Array<ModuleIterationResult> = []
}