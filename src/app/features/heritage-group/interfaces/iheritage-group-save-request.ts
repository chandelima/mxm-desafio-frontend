export interface IHeritageGroupSaveRequest {
  InterfaceArquivoGrupoPatrimonial: InterfaceArquivoGrupoPatrimonial[]
}

export interface InterfaceArquivoGrupoPatrimonial {
  CodigoGrupoPatrimonial: string
  DescricaoGrupoPatrimonial: string
  Taxa: string
  PercentualDepreciacao01: string
  PercentualDepreciacao02: string
  PercentualDepreciacaoFiscal: string
  PercentualMaximoDepreciacaoResidual: string
  Proporcional: string
  TaxaDepreciacaoVariavel: string
  Inativo: string
  CodigoResponsavel: string
}
