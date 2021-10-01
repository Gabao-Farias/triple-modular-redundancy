export default class TMRResultStatistics{
    
    public general: {
        /** Porcentagem total de Votos com sucesso (acertou o valor experado) */
        successPercentage: number

        /** Informações do totais estatísticos */
        totals: { 
            /** Quantidade de Módulos que tiveram erro ao processar um valor */
            failedModuleOutputs: number, 

            /** Quantidade Total de Votos incorretos nas iterações */
            failedVotingResults: number, 

            /** Quantidade Total de Votos Corretos nas iterações */
            successVotingResults: number 
        }
    } = { successPercentage: 0,totals: { failedModuleOutputs: 0, failedVotingResults: 0, successVotingResults: 0} }
  

    public statisticsPerIteration: {
        failedModuleOutputs: number;
        iteration: string;
    }[] = []
}