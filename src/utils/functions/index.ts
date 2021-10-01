import { cube, double, half, square } from './operations';

import { average, averageQuantity, quantity } from './votationMethod';

export const operationFunctions = {
  half,
  double,
  square,
  cube
};

export type OperationFunctionsType = typeof operationFunctions;
export type OperationFunctionsKeys = keyof OperationFunctionsType;

export const votingMethodsFunctions = {
  average,
  averageQuantity,
  quantity
};

export type VotingMethodsFunctionsType = typeof votingMethodsFunctions;
export type VotingMethodsFunctionsKeys = keyof VotingMethodsFunctionsType;
