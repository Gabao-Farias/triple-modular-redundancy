import IInputGeneratorConfig from "./IInputGeneratorConfig";
import InputGeneratorConfig from "./InputGeneratorConfig";

export default interface IInputGenerator{
    /**
     * Gera uma entrada aleatória para um módulo de operação
     */
    GenerateRandomInput(): number
}