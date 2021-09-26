import IVoter from "./IVoter";
import VotingMethod from "./VotingMethod";

export default class Voter implements IVoter {
    DoVote(outputs: number[], votingMethod: VotingMethod): number {
        throw new Error("Method not implemented.");
    }
    
}