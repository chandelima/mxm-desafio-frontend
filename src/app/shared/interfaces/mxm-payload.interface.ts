export interface MxmRequestInterface<T> {
  AutheticationToken: {
    Username: string;
    Password: string;
    EnvironmentName: string
  },
  Data: T;
}
