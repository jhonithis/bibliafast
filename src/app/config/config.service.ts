import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';

@Injectable()
export class ConfigService {

    configUrl = 'https://data.biblebox.com/v18/bibles/nvi/Matt/5.xml';

    constructor(private http: HttpClient) { }

    getBibleBox() {
        return this.http.get(this.configUrl, {responseType : 'text' }) ;
    }
}
