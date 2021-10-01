import { VotingMethodsFunctionsKeys } from "../../../utils";

export default interface IVoter{
    DoVote(outputs: number[], votingMethod: VotingMethodsFunctionsKeys): number
}