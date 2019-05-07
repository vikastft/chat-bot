import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Observable, of } from 'rxjs';
import { map, catchError } from 'rxjs/operators';

@Injectable()
export class ChatService {
    baseUrl = 'http://192.168.108.50:8090/EmployeePulse';
    constructor(private http: HttpClient) { }

    getResponse(userId, options?: any): Observable<any> {
        const data = {
            userId: userId
        };
        const body = JSON.stringify(data);
        const url = this.baseUrl;
        return this.http.post(url, body, this.getRequestOptions(options)).pipe(
            catchError(this.handleError<any>('chatApi')));
    }

    getChatData(chat, options?: any): Observable<any> {
        const data = {
            userId: chat.userId,
            questionId: chat.questionId,
            userResponse: chat.userResponse,
            inputType: chat.inputType
        };
        const body = JSON.stringify(data);
        const url = this.baseUrl;
        return this.http.post(url, body, this.getRequestOptions(options)).pipe(
            catchError(this.handleError<any>('chatApi')));
    }

    private extractData(res: Response) {
        return res || {};
    }

    private handleError<T>(operation = 'operation', result?: T) {
        return (error: any): Observable<T> => {

            // TODO: send the error to remote logging infrastructure
            console.error(error); // log to console instead

            // TODO: better job of transforming error for user consumption
            console.log(`${operation} failed: ${error.message}`);

            // Let the app keep running by returning an empty result.
            return of(result as T);
        };
    }

    getRequestOptions(options: any) {
        options = options || {};
        if (options.headers) {
            options.headers = options.headers.append(
                'Content-Type',
                'application/json'
            );
        } else {
            options.headers = new HttpHeaders();
            options.headers = options.headers.append(
                'Content-Type',
                'application/json'
            );
        }
        return options;
    }
}
