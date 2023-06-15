export interface IMxmBaseRequest<T> {
  AutheticationToken: {
    Username: string;
    Password: string;
    EnvironmentName: string;
  },
  Data: T | {}
}
