export interface IHeritageSubgroupResponse {
  id: string;
  Descricao: string;
  CodigoGrupoPatrimonial: string;
  ClassificacoesEspecificas?: {
    CodigoClassificacaoEspecifica: string;
    CodigoDoGrupo: string;
    CodigoDoSubGrupo: string;
  };
}
