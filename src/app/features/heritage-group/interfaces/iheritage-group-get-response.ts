export interface IHeritageGroupGetResponse {
  Codigo: string
  Descricao: string
  GrupoContabil: string
  PercentualDepreciacaoContabilAnualSegundaMoeda: number
  PercentualDeprciacaoAnualSegundaMoeda: number
  PercentualDepreciacaoFiscalAnualSegundaMoeda: number
  Inativo: string
  CodigoUsuarioResponsavelInativacao: string
  CodigoTaxaDepreciacaoVariavel: string
  ConsiderarDepreciacaoProporcional: string
  PercentualASerConsideradoValorMaximoResidual: number
  ContasContabeisGrupoPatrimonials: ContasContabeisGrupoPatrimonial[]
}

  export interface ContasContabeisGrupoPatrimonial {
    Codigo: string
    CodigoEmpresa: string
    CodigoGrupoPagamento: string
    CodigoContaBem: any
    CodigoContaDepreciacao: any
    CodigoContaDespesaDepreciacao: any
    CodigoContaResultado: any
    CodigoContaPrejuizoNaBaixa: any
    CodigoContaCorrecaoBem: any
    CodigoContaCorrecaoDepreciacao: any
    CodigoPlanoConta: string
    CodigoContaContraPartidaBem: any
  }
