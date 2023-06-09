import { SpecificRatingsResponse } from "./specific-ratings-response"

export interface EquitySubgroupResponse {
  id: string;
  Descricao: string;
  CodigoGrupoPatrimonial: string;
  ClassificacoesEspecificas?: SpecificRatingsResponse[];
}
