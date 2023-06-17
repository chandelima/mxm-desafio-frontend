export interface IProcessingStatusResponse {
  SequenciadoProcesso: number;
  NomedoArquivo: string;
  DatadaImportacao: string;
  UsuariodaImportacao: string;
  InterfacedoGrupoPatrimonial: InterfacedoGrupoPatrimonial[];
  InterfaceErrodoGrupoPatrimonial: any[];
}

export interface InterfacedoGrupoPatrimonial {
  Mensagem: string;
  SequenciadoProcesso: number;
  SequenciadoRegistro: number;
  StatusOperacao: number;
  CodigoGrupoPatrimonial: string;
  DescricaoGrupoPatrimonial: string;
  Contabil: string;
  PercentualDepreciacao01: string;
  PercentualDepreciacao02: string;
  PercentualDepreciacaoFiscal: string;
  Inativo: string;
  CodigoResponsavel: string;
  Proporcional: string;
  PercentualMaximoDepreciacaoResidual: string;
  Taxa: string;
  TaxaDepreciacaoVariavel: string;
}
