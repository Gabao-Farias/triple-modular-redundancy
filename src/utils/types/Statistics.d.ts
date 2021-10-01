/** Informações do totais estatísticos */
declare type TotalsStatistics = {
    /** Quantidade de Módulos que tiveram erro ao processar um valor */
  failedModuleOutputs: number, 

  /** Quantidade Total de Votos incorretos nas iterações */
  failedVotingResults: number, 

  /** Quantidade Total de Votos Corretos nas iterações */
  successVotingResults: number 
};

declare type GeneralStatistics = {
  /** Porcentagem total de Votos com sucesso (acertou o valor experado) */
  successPercentage: number;
  totals: TotalsStatistics;
};

declare type StatisticsPerIteration = {
  failedModuleOutputs: number;
};

declare type TMRResultStatistics = {
  general: GeneralStatistics;
  statisticsPerIteration: StatisticsPerIteration[];
}
