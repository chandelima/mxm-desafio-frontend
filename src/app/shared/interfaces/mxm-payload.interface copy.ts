export interface MxmResponseInterface<T> {
  Success: boolean;
  Data: T[],
  Messages: {
    Message: string;
    Detail: any;
    Type: number;
    TypeMessage: string;
    ErrorLevel: number;
    Code: any;
  }[]
}
