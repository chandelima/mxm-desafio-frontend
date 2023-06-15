export interface IMxmBaseResponse<T> {
  Success: string;
  Data: T
  Messages: {
    Message: string;
    Detail: any;
    Type: number;
    TypeMessage: string;
    ErrorLevel: number;
    Code: any;
  }[];
}
