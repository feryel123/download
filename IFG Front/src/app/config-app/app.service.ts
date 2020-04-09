
import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';


@Injectable({
    providedIn: 'root'
  })

  export class AppService {

private baseUrl = 'http://localhost:8084/api/v1';

constructor(private http: HttpClient) { }

getapp(id_application: number): Observable<any> {
  
  return this.http.get(`${this.baseUrl +'/app'}/${id_application}`);
}
createApp(app: Object): Observable<Object> {
    return this.http.post(`${this.baseUrl +'/app/'}`, app);
  }

  getAppList(): Observable<any> {
    return this.http.get(`${this.baseUrl +'/list-app/'} `);
  }

 
  }