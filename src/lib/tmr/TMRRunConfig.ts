import VotingMethod from "./Voter/VotingMethod";

export default class TMRRunConfig{
    votingMethod: VotingMethod = VotingMethod.Average
    iterations: number = 1000
}