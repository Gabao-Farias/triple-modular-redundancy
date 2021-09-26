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

    constructor(config?: IInputGeneratorConfig, ) {
        this._config = config ?? new InputGeneratorConfig()
    }

    public GenerateRandomInput(): number {
        return Math.random() * (this._config.maximum - this._config.minimum + 1) + this._config.minimum 
    }
}



