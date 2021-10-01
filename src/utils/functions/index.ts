import { cube, double, half, square } from './operations';

import { averageVoting, averageQuantityVoting, quantityVoting } from './votationMethod';

export const operationFunctions = {
  half,
  double,
  square,
  cube
};

export type OperationFunctionsType = typeof operationFunctions;
export type OperationFunctionsKeys = keyof OperationFunctionsType;

export const votingMethodsFunctions = {
  averageVoting,
  averageQuantityVoting,
  quantityVoting
};

export type VotingMethodsFunctionsType = typeof votingMethodsFunctions;
export type VotingMethodsFunctionsKeys = keyof VotingMethodsFunctionsType;
