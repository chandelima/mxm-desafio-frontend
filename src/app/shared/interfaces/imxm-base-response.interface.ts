import { IMessageResponse } from "./imessage-response.interface";

export interface IMxmBaseResponse<T> {
  Success: string;
  Data: T
  Messages: IMessageResponse[];
}
