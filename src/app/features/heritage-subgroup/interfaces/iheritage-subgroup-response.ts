export interface IHeritageSubgroupResponse {
  Codigo: string;
  Descricao: string;
  CodigoGrupoPatrimonial: string;
  ClassificacoesEspecificas?: {
    CodigoClassificacaoEspecifica: string;
    CodigoDoGrupo: string;
    CodigoDoSubGrupo: string;
  }[];
}
