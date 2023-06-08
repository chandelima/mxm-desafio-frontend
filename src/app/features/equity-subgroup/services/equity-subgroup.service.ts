import { Injectable } from '@angular/core';
import { equitySubgroupMock } from './equity-subgroup.mock';
import { EquitySubgroupResponse } from '../interfaces/equity-subgroup-response';
import { BehaviorSubject, Observable, of } from 'rxjs';
import { EquitySubgroupRequest } from '../interfaces/equity-subgroup-request';

@Injectable({
  providedIn: 'root'
})
export class EquitySubgroupService {

  private data: EquitySubgroupResponse[] = [ ...equitySubgroupMock ];
  readonly notifyier = new BehaviorSubject<boolean>(true);

  constructor() { }

  getAll(): Observable<EquitySubgroupResponse[]> {
    return of(this.data);
  }

  getById(code: string): Observable<EquitySubgroupResponse> {
    const subgroup = this.data.find(s => s.Codigo === code)!;

    return of(subgroup);
  }

  add(subgroup: EquitySubgroupRequest): Observable<EquitySubgroupResponse> {
    const code = crypto.randomUUID();
    const subgroupToAdd: EquitySubgroupResponse = {
      Codigo: code,
      ...subgroup
    };
    this.data.push(subgroupToAdd);

    return of(subgroupToAdd);
  }

  remove(code: string): Observable<null> {
    const dataToStore = this.data.filter(s => s.Codigo !== code)
    this.data = dataToStore;

    return of(null);
  }
}
