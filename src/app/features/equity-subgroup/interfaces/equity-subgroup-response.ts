export interface EquitySubgroupResponseInterface {
  id: string;
  Descricao: string;
  CodigoGrupoPatrimonial: string;
  ClassificacoesEspecificas: {
    CodigoClassificacaoEspecifica: string;
    CodigoDoGrupo: string;
    CodigoDoSubGrupo: string;
  }[];
}
