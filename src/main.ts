import { resourceUsage } from "process";
import InputGenerator from "./lib/tmr/InputGenerator/InputGenerator";
import OperationModule from "./lib/tmr/OperationModule/OperationModule";
import OperationModuleConfig from "./lib/tmr/OperationModule/OperationModuleConfig";
import TMR from "./lib/tmr/TMR";


var operationModuleConfig = new OperationModuleConfig({
    deviationChance: 10,
    deviationMaxThreshold: 10,
    deviationMinThreshold: 0.1,
    operationName: "cube"
});

var tmr = new TMR(operationModuleConfig);

var op1 = new OperationModule()
var op2 = new OperationModule()
var op3 = new OperationModule()
tmr.AddOperationModule(op1,op2,op3)



var inpGenerator = new InputGenerator({
    minimum: 1,
    maximum: 10
});

tmr.inputGenerator = inpGenerator;

(async () => {

    var result = await tmr.Run({
        iterations: 10,
        votingMethod: "averageVoting"
    })
    
    // console.log(result)
    
    result.iterationResult.forEach(iterationResult => {
        // console.log(iterationResult);
    })
})()
