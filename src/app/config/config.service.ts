import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';

@Injectable()
export class ConfigService {

    constructor(private http: HttpClient) { }

    getBibleBox(url : string) {
        return this.http.get(url, {responseType : 'text' }) ;
    }
}
