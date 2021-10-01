import ModuleIterationResult from "./ModuleIterationResult"
import IOperationModuleConfig from "./OperationModule/IOperationModuleConfig"
import VotingMethod from "./Voter/VotingMethod"
import TMRResultStatistics from './Statistics/TMRResultStatistics'
export default class TMRResult{
    public operationModuleConfig: IOperationModuleConfig = {
        deviationChance: 0,
        deviationMaxThreshold: 0,
        deviationMinThreshold: 0,
        operationName: 'double',
    };
    public votingMethod: VotingMethod = VotingMethod.Average;
    public iterationResult: Array<ModuleIterationResult> = [];

    public statistics?: TMRResultStatistics

    public GenerateStatistics(): TMRResultStatistics{
        var result = new TMRResultStatistics();

        result.general.successPercentage = this.iterationResult.filter(item => item.voterResult === item.expectedResult).length / this.iterationResult.length * 100
         
 
        //Estatísticas de cada iteração
        this.iterationResult.forEach((item, index) => {
            var failedModulesInIteration = item.processedOutputs.filter(moduleOutput => moduleOutput !== item.expectedResult).length
            result.general.totals.failedModuleOutputs += failedModulesInIteration
            item.expectedResult !== item.voterResult && result.general.totals.failedVotingResults++
            item.expectedResult === item.voterResult && result.general.totals.successVotingResults++

            
            result.statisticsPerIteration.push({failedModuleOutputs: failedModulesInIteration, iteration: `Iteration ${index + 1}`})
        })


        this.statistics = result;
        return this.statistics;
    }

    
}