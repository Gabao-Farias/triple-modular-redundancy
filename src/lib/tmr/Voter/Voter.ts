import { votingMethodsFunctions, VotingMethodsFunctionsKeys } from "../../../utils";
import IVoter from "./IVoter";
export default class Voter implements IVoter {

    DoVote(outputs: number[], votingMethod: VotingMethodsFunctionsKeys): number {
        return votingMethodsFunctions[votingMethod](outputs);
    }
}
