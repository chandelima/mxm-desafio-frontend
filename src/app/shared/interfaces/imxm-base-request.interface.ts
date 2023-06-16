import { IAuthenticationToken } from "./iauthentication-token.interface";


export interface IMxmBaseRequest<T> {
  AutheticationToken: IAuthenticationToken,
  Data: T | {}
}
