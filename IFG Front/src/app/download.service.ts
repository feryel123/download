import {Injectable} from '@angular/core';
import {  HttpClient  } from '@angular/common/http';
import { map } from "rxjs/operators";

@Injectable({
  providedIn: 'root'
})
export class DownloadService {

  constructor( private http : HttpClient) { }

  private baseUrl = 'http://localhost:8084/api/v1/download';


  /*downloadfile(filePath: string){
    return this.http
        .get( `${this.baseUrl }  `+ 'downloadMaj?filePath='+ filePath)
        .pipe(map( res => res.zip))
}*/

/*downloadZip (){
  var zip = new JSZip();
zip.file("Hello.txt", "Hello World\n");

// when everything has been downloaded, we can trigger the dl
zip.generateAsync({type:"blob"}).then(function (blob) { 
  // 1) generate the zip file
FileSaver.saveAs(blob, "downloadables.zip");                          // 2) trigger the download
}, function (err) {
    console.log('err: '+ err);
});
}*/

downloadZip(filename: string , id : number) {
  return this.http.get(`${this.baseUrl } /${id} ` + 'download?filename=' + filename, {
    responseType: 'arraybuffer'
  });
}}