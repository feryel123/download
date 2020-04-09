
import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { ResponseContentType , Http, RequestOptions} from '@angular/http';


import { map } from 'rxjs/operators';






@Injectable({
    providedIn: 'root'
  })

  export class FrontService {

    
private baseUrl = 'http://localhost:8084/api/v1';


  
constructor(private http: HttpClient , private Http: Http) { }

/*downloadFile(id: number): Observable<any>{
  return this.Http.get(`${this.baseUrl +'/front'}/${id}`, {responseType: ResponseContentType.Blob});
}*/
  
/*downloadzip(id: number): Observable<Blob> {
  let options = new RequestOptions({responseType: ResponseContentType.Blob });
  return this.Http.get(this.baseUrl + '/front' + id, options)
      .pipe(map(res => res.blob()));
     
}*/
 
getFront(id: number ): Observable<any> {
  return this.http.get(`${this.baseUrl +'/front'}/${id}` 
  
  );
   
}
createFront(front: Object): Observable<Object> {
    return this.http.post(`${this.baseUrl +'/front/'} `, front)
    }
  

  getFrontList(): Observable<any> {
    return this.http.get(`${this.baseUrl +'/wlc-page/'}  `);
  }

  

  }