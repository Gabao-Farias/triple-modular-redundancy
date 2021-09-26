import VotingMethod from "./VotingMethod";

export default interface IVoter{
    DoVote(outputs: number[], votingMethod: VotingMethod): number
}