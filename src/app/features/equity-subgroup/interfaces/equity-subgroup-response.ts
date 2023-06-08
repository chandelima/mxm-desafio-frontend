import { SpecificRatingsResponse } from "./specific-ratings-response"

export interface EquitySubgroupResponse {
  Codigo: string;
  Descricao: string;
  CodigoGrupoPatrimonial: string;
  ClassificacoesEspecificas?: SpecificRatingsResponse[];
}
