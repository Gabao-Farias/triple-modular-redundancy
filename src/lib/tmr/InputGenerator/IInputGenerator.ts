import IInputGeneratorConfig from "./IInputGeneratorConfig";
import InputGeneratorConfig from "./InputGeneratorConfig";

export default interface IInputGenerator{

    /**
     * Função a ser aplicada nos inputs gerados
     */
    inputFunction: (input: number) => number

    /**
     * Gera uma entrada aleatória para um módulo de operação
     */
    GenerateRandomInput(): number
}