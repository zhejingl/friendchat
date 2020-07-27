import { Injectable } from '@angular/core';
import {HttpClient, HttpHeaders} from '@angular/common/http';
import {environment} from '../../environments/environment';

@Injectable({
  providedIn: 'root'
})
export class LoginService {
  httpOptionsPlain = {
    'responseType': 'text'
  };
  loginUrl = environment.server + environment.loginUrl;
  
  constructor(private http: HttpClient) { }

  login(credentials: any) {
    const body = JSON.stringify(credentials);
    const pheaders = new HttpHeaders().set('Content-type', 'application/json').set('Accept', 'application/json');
    const httpOptions : Object = {
      headers: pheaders
    };
    return this.http.post<string>(this.loginUrl , body, httpOptions);
  }
}