import { FunctionsKeys } from "../functions";

export type OperationsNames = FunctionsKeys;

export type InputGenerator = {
  inputValue?: number;
};

export type Voter = {
  expectedOutputValue?: number;
  numberVoted?: number;
  valuesReceived?: number[];
};

export type Module = {
  /**
   * Module received value to be processed.
   */
  receivedValue?: number;
  /**
   * Output value determined by execution results of *operationName*.
   */
  outputValue?: number;
  /**
   * *undefined* or 0 is like having no errors or 0% of erros, 1 should be 100% of
   * the finalvalue operation.
   * 
   * So if the output value of operation is 2, and **applyMaxFailureThresholdPercentage** is 0.5,
   * it will be 50% of the output value, wich will result in 1, and could achieve a max of 3 or 1
   * in the final result.
   */
  maxFailureThresholdPercentage?: number;
};

export type PreOperationModule = {
  /**
   * Module received value to be processed.
   */
  receivedValue?: number;
  /**
   * Output value determined by execution results of *operationName*.
   */
  outputValue?: number;
};
