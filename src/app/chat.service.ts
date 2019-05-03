import {Injectable} from '@angular/core';
import {HttpClient} from '@angular/common/http';
import { Observable } from 'rxjs';

@Injectable()
export class ChatService {
    baseUrl: 'https://flydetecttest.azurewebsites.net/angularapi/api';
    constructor(private http: HttpClient) {}

    getResponse(requestData): Observable<any> {
        return this.http.post('url', requestData);
    }
}
