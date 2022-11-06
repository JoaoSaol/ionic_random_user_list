/* eslint-disable @typescript-eslint/naming-convention */
import { Injectable } from '@angular/core';
import { environment } from 'src/environments/environment';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Observable, throwError } from 'rxjs';
import { catchError } from 'rxjs/operators';
import { map } from 'rxjs/operators';


@Injectable({
  providedIn: 'root'
})
export class ApiService {

  private API_URL: string = environment.urlSever;

  constructor(
    private http: HttpClient
  ) { }

  get(endpoint: string, params: any): Observable<any> {
    return this.http.get(this.API_URL + endpoint, { headers: this.headers, params }).pipe(
      map((result: any) => result),
      catchError((error: any) => throwError(() => error.message))
    );
  }

  // eslint-disable-next-line @typescript-eslint/member-ordering
  get headers(): HttpHeaders {
    const headers = new HttpHeaders({
      'Content-Type': 'application/json',
    });
    return headers;
  }

}
