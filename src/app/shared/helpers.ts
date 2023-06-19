import { IAuthenticationToken } from './interfaces/iauthentication-token.interface';
import { IMxmBaseRequest } from './interfaces/imxm-base-request.interface';
export const invalidAuthDataObjMsg = {
  severity: 'warn',
  summary: 'Dados inválidos',
  detail: `Informe todos os dados necessários para autenticação na barra
           lateral esquerda e tente novamente.`
};

export function getMxmRequest(authData: IAuthenticationToken, data: any)
  : IMxmBaseRequest<any> {

  return {
    AutheticationToken: authData,
    Data: data
  }
}
