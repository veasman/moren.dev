import { Injectable } from '@angular/core';
import { Observable, of, switchMap } from 'rxjs';
import { HttpClient, HttpHeaders } from '@angular/common/http';

@Injectable({
    providedIn: 'root'
})
export class ApiRequestService {

    constructor(
        private _httpClient: HttpClient) {
    }

    static httpHeaders(): HttpHeaders {
        return new HttpHeaders({ 'Content-Type': 'application/json' });
    }

    get(url: string): Observable<any> {
        let headers = ApiRequestService.httpHeaders();
        return this._httpClient.get(`localhost:8080/${url}`, { headers: headers })
            .pipe(
                switchMap((response: any) => {
                    return of(response);
                })
            )
    }

    post(url: string, body: Object): Observable<any> {
        let headers = ApiRequestService.httpHeaders();
        return this._httpClient.post(`localhost:8080/${url}`, body, { headers: headers })
            .pipe(
                switchMap((response: any) => {
                    return of(response);
                })
            )
    }
}
