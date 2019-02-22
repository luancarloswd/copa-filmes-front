import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Observable } from 'rxjs';
import { Filme } from '../model/filme';
import { environment } from 'src/environments/environment';
import { Copa } from '../model/copa';

@Injectable()
export class FilmeService {
    route: string;
    optionsHeaders: any;
    constructor(private http: HttpClient) {
        this.route = 'filme';
        this.optionsHeaders = {
            headers: new HttpHeaders({
                'Content-Type': 'application/json'
            }),
            observe: 'body'
        };
    }

    obterFilmes(): Observable<Filme[]> {
        return this.http.get<Filme[]>(`${environment.serviceUrl}${this.route}`);
    }

    gerarCopa(idsFilmes: string[]): Observable<Copa> {
        return this.http.post<Copa>(`${environment.serviceUrl}${this.route}`, idsFilmes);
    }
}
