import { HttpClient } from '@angular/common/http';
import { Injectable, Injector } from '@angular/core';

import { BehaviorSubject, Observable } from 'rxjs';
import { environment } from 'src/environments/environment';
import { IMxmBaseResponse } from 'src/app/shared/interfaces/imxm-base-response.interface';
import { IMxmBaseRequest } from 'src/app/shared/interfaces/imxm-base-request.interface';
import { IResourcePath } from '../interfaces/iresource-paths.interface';

@Injectable({
  providedIn: 'root'
})
export abstract class HttpBaseService {

  readonly notifyier = new BehaviorSubject<boolean>(true);

  private readonly baseUrl = environment.apiURL;
  private readonly http!: HttpClient;

  protected abstract resourcePaths?: IResourcePath;

  constructor(protected readonly injector: Injector) {
		if (!injector)
			throw new Error(
        `Injector must be injected at child class ${this.constructor.name}`);

		this.http = injector.get(HttpClient);
	}

  get(data: IMxmBaseRequest<any>)
    : Observable<IMxmBaseResponse<any>> {

    if (!this.resourcePaths!.get)
      throw new Error(
        `Get resource path not implementend for ${this.constructor.name}`);

    const url = `${this.baseUrl}${this.resourcePaths!.get}`;

    return this.http.post<IMxmBaseResponse<any>>(url, data);
  }

  save(data: IMxmBaseRequest<any>)
   : Observable<IMxmBaseResponse<any>> {

    if (!this.resourcePaths!.save)
      throw new Error(`
        Save resource path not implementend for ${this.constructor.name}`);

    const url = `${this.baseUrl}${this.resourcePaths!.save}`;

    return this.http.post<IMxmBaseResponse<any>>(url, data);
   }

   notify(): void {
    this.notifyier.next(true);
  }
}
