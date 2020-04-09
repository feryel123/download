
import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';


@Injectable({
    providedIn: 'root'
  })

  export class BackService {

    private baseUrl = 'http://localhost:8084/api/v1';
    constructor(private http: HttpClient) { }
    
    
    
    getBack(id_back: number): Observable<any> {
      return this.http.get(`${this.baseUrl +'/wlc-page'}/${id_back}`);
    }
    
    
    createBack(back: Object): Observable<Object> {
        return this.http.post(`${this.baseUrl +'/back/'} `, back);
        
      }
    
      getBackList(): Observable<any> {
        return this.http.get(`${this.baseUrl +'/list-back/'} `);
      }
      }