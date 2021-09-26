import functions from "../../../utils/functions";
import IOperationModule from "./IOperationModule";
import IOperationModuleConfig from "./IOperationModuleConfig";

export default class OperationModule implements IOperationModule
{
    private _operation: (input: number) => number;
    get operation(){
        return this._operation
    }
    set operation(fn: (input: number) => number){
        this._operation = fn;
    }

    private _configuration: IOperationModuleConfig;
    get configuration(){
        return this._configuration
    }
    set configuration(configuration: IOperationModuleConfig){
        this._configuration = configuration;
        this._operation = functions[this._configuration.operationName]
    }

    public DoOperation(input: number): number{
        var result = this._operation(input)
        //Altera o resultado
        if (Math.random() * 100 < this._configuration.deviationChance){
            var randomThresholdDeviation = Math.random() * ( this._configuration.deviationMaxThreshold - this._configuration.deviationMinThreshold + 1) + this._configuration.deviationMinThreshold 
            result *= randomThresholdDeviation
        }
        return result;
    }

}