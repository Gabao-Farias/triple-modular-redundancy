import IVoter from "./IVoter";
import VotingMethod from "./VotingMethod";
export default class Voter implements IVoter {

    private AverageVoting(numberArr: number[]) : { closestMinimum: number, closestMaximum: number, average: number }{
        var average = numberArr.length > 0 ? numberArr.reduce((curr, total) => curr + total) / numberArr.length : 0
        var closestMinimum: number = null
        var closestMaximum: number = null
        numberArr.forEach(output => {
            if (closestMinimum == null || (output > closestMinimum && output <= average))
                closestMinimum = output
           
            if (output >= average && closestMaximum == null)
                closestMaximum = output
        })
        return { closestMaximum: closestMinimum, closestMinimum: closestMinimum, average: average }
    }  

    private QuantityVoting(numberArr: number[]) : number {
        return numberArr.sort((a,b) => numberArr.filter(v => v===a).length - numberArr.filter(v => v===b).length).pop();
    } 

    DoVote(outputs: number[], votingMethod: VotingMethod): number {
        var result: number = 0
        switch(votingMethod){
            case VotingMethod.Average:
                var r = this.AverageVoting(outputs)
                result = Math.abs(r.closestMinimum - r.average) < Math.abs(r.closestMaximum - r.average) ? r.closestMinimum : r.closestMaximum
                break;

            case VotingMethod.Quantity:
                result = this.QuantityVoting(outputs)
                break;

            case VotingMethod.Mixed:
                var averageVotingResult = this.AverageVoting(outputs)
                var closestMaximumCount = 0
                var closestMinimumCount = 0
                outputs.forEach(item => {
                    if (averageVotingResult.closestMaximum == item)
                        closestMaximumCount++
                    else if(averageVotingResult.closestMinimum == item)
                        closestMinimumCount++
                })
                result = closestMinimumCount >= closestMaximumCount ? averageVotingResult.closestMinimum : averageVotingResult.closestMaximum
                break;

            default:
                break;
        }
        return result
    }
    
}