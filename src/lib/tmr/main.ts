import InputGenerator from "./InputGenerator/InputGenerator";
import OperationModule from "./OperationModule/OperationModule";
import OperationModuleConfig from "./OperationModule/OperationModuleConfig";
import TMR from "./TMR";
import VotingMethod from "./Voter/VotingMethod";


var operationModuleConfig = new OperationModuleConfig({
    deviationChance: 10,
    deviationMaxThreshold: 10,
    deviationMinThreshold: 0.1
});

var tmr = new TMR(operationModuleConfig);

var op1 = new OperationModule()
var op2 = new OperationModule()
var op3 = new OperationModule()
tmr.AddOperationModule(op1,op2,op3)

var fn = (inp: number) => inp * 2; 


var inpGenerator = new InputGenerator(fn);
inpGenerator.GenerateRandomInput();
inpGenerator.inputFunction

tmr.inputGenerator = inpGenerator


tmr.Run({
    iterations: 5000,
    votingMethod: VotingMethod.Quantity
})
