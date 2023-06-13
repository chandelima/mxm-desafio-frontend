export interface MxmRequestInterface<T> {
  AutheticationToken: {
    Username: string;
    Password: string;
    EnviromentName: string
  },
  Data: T;
}
