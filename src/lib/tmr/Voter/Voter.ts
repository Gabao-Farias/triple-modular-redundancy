import IVoter from "./IVoter";
import VotingMethod from "./VotingMethod";
export default class Voter implements IVoter {

    // private Average() : { closestMinimum }


    DoVote(outputs: number[], votingMethod: VotingMethod): number {
        var result: number = 0
        switch(votingMethod){
            case VotingMethod.Average:
                var average = outputs.length > 0 ? outputs.reduce((curr, total) => curr + total) / outputs.length : 0
                var closestMinimum: number = null
                var closestMaximum: number = null
                outputs.forEach(output => {
                    if (closestMinimum == null || (output > closestMinimum && output <= average))
                        closestMinimum = output
                   
                    if (output >= average && closestMaximum == null)
                        closestMaximum = output
                })
                result = Math.abs(closestMinimum - average) < Math.abs(closestMaximum - average) ? closestMinimum : closestMaximum
                break;

            case VotingMethod.Quantity:
                result = outputs.sort((a,b) =>
                    outputs.filter(v => v===a).length
                    - outputs.filter(v => v===b).length
                ).pop();
                break;

            case VotingMethod.Mixed:
                break;
            default:
                break;

        }
        return result
    }
    
}