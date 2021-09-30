import OperationModule from "../../lib/tmr/OperationModule/OperationModule";

export const getModulesPerIteration = (modules: number): OperationModule[] => {
  const modulesArray = [];
  var i = 0;

  while (i < modules) {
    modulesArray.push(new OperationModule());
    i++;
  }

  return modulesArray;
}