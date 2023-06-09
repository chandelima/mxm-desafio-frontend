import { HttpClient } from '@angular/common/http';
import { Injectable, Injector } from '@angular/core';
import { BehaviorSubject, Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class CrudBaseService<Request, Response> {

  private readonly http!: HttpClient;
  readonly notifyier = new BehaviorSubject<boolean>(true);
  protected baseUrl?: string;

  constructor(
    protected readonly injector: Injector
  ) {
    if (injector == null || injector == undefined)
      throw new Error("Injector can't bee null");

    this.http = injector.get(HttpClient);
  }

  getById(id: string): Observable<Response> {
    return this.http.get<Response>(`${this.baseUrl!}/${id}`);
  }

  getAll(): Observable<Response[]> {
    return this.http.get<Response[]>(this.baseUrl!);
  }

  create(data: Request): Observable<Response> {
    return this.http.post<Response>(this.baseUrl!, data);
  }

  update(id: string, data: Request): Observable<Response> {
    return this.http.put<Response>(`${this.baseUrl!}/${id}`, data);
  }

  delete(id: string): Observable<null> {
    return this.http.delete<null>(`${this.baseUrl!}/${id}`);
  }

  notify() {
    this.notifyier.next(true);
  }
}
