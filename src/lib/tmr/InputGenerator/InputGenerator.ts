import IInputGenerator from "./IInputGenerator";
import IInputGeneratorConfig from "./IInputGeneratorConfig";
import InputGeneratorConfig from "./InputGeneratorConfig";
/**
 * Classe responsável por gerar os valores e funções aleatórias que serão aplicadas nos módulos
 * Redundantes do TMR
 */
export default class InputGenerator implements IInputGenerator
{
    private _config: IInputGeneratorConfig;

    private _inputFunction: (input: number) => number;
    get inputFunction(){
        return this._inputFunction
    }
    set inputFunction(inputFunction:(input: number) => number){
        this._inputFunction = inputFunction
    }

    constructor(fn:(input: number) => number, config?: IInputGeneratorConfig, ) {
        this._config = config ?? new InputGeneratorConfig()
        this._inputFunction = fn;
    }

    public GenerateRandomInput(): number {
        return Math.random() * (this._config.maximum - this._config.minimum + 1) + this._config.minimum 
    }
}



