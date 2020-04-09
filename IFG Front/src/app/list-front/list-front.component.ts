import { Component, OnInit } from '@angular/core';
import { FrontService } from '../front/front.service';
import { Observable } from 'rxjs';
import { Front } from '../front/front';
import { Router, ActivatedRoute } from '@angular/router';
import * as JSZip from 'jszip';  
import * as FileSaver from 'file-saver';
import { strictEqual } from 'assert';

@Component({
  selector: 'app-list-front',
  templateUrl: './list-front.component.html',
  styleUrls: ['./list-front.component.scss']
})
export class ListFrontComponent implements OnInit {
  fronts: Observable<Front[]>; 
  front: Front = new Front();
  id: number;
  front1: Front;
  filesArray: []; 

  constructor(private frontservice: FrontService,private router: Router , private route: ActivatedRoute,) { }

  ngOnInit() {
    this.showFront() ;
    
   //var data = this.Detailsfront(this.id);
    //const blob = new Blob([this.Detailsfront], { type: 'application/zip' });

    //this.fileUrl = this.sanitizer.bypassSecurityTrustResourceUrl(window.URL.createObjectURL(blob));
  }


  /*Detailsfront(id : number ){
    this.frontservice.getFront(id ).subscribe(data => {
      const blob = new Blob([data], {
        type: 'application/zip'
      });
      const url = window.URL.createObjectURL(blob);
      window.open(url);
    });
  }*/

  /*downloadFile(){
    const link = document.createElement('a');
    link.setAttribute('target', '_blank');
    link.setAttribute('href', '_File_Saved_Path');
    link.setAttribute('download', 'file_name.pdf');
    document.body.appendChild(link);
    link.click();
    link.remove();
  }
 */

/*downloadFile() {  
  this.createZip(this.filesArray.map(c => c.FileRef), 'Sample');  
}  
async createZip(files: any[], zipName: string) {  
  const zip = new JSZip(); 
  zipName = this.front.nom_projet ; 
  const name = zipName + '.zip';  
  // tslint:disable-next-line:prefer-for-of  
  for (let counter = 0; counter < files.length; counter++) {  
    const element = files[counter];  
    const fileData: any = await this.Detailsfront(this.id) ;  
    const b: any = new Blob([fileData], { type: '' + fileData.type + '' });  
    zip.file(element.substring(element.lastIndexOf('/') + 1), b);  
  }  
  zip.generateAsync({ type: 'blob' }).then((content) => {  
    if (content) {  
      FileSaver.saveAs(content, name);  
    }  
  });  
} */ 
 
 /*Detailsfront(id : number ){
  const zip = new JSZip();
    
 var  zipName : String = this.front.nom_projet ; 
  const name = zipName + '.zip'; 
  const fileData: any = this.Detailsfront(this.id) ;  

  const b: any = new Blob([fileData], { type: '' + fileData.type + '' }); 
  zip.generateAsync({ type: 'blob' }).then((content) => {  
    if (content) {  
      FileSaver.saveAs(content, name);  
    }  
  }  ) 
  //var blob = new Blob([data], { type: 'application/zip' });
 this.frontservice.getFront(id)
  
    .subscribe(data => {
     
    console.log(data)
      ,this.front1 = data;
     // const blob = new Blob([data], {
        //type: 'application/zip'
      //});
      //const url = window.URL.createObjectURL(blob);
 // window.open(url);
}, error => console.log(error));

  } 

   


/*getZipFile(data: any , id : number){

  this.frontservice.getFront(id).subscribe(data => {
     
    console.log(data)
      ,this.front1 = data }, error => console.log(error));

  var a: any = document.createElement("a");
  document.body.appendChild(a);

  a.style = "display: none";
  var blob = new Blob([data], { type: 'application/zip' });

  var url= window.URL.createObjectURL(blob);

  a.href = url;
  a.download = this.front;
  a.click();
  window.URL.revokeObjectURL(url);
  }*/




 Detailsfront(id : number){
  this.frontservice.getFront(id)
  .subscribe(data => {
   // const blob = new Blob([data], {
      //type: 'application/zip'});
      //const url = window.URL.createObjectURL(blob);
      //window.open(url);
     console.log(data)
    ,this.front1 = data;

  }, error => console.log(error));
  }

  
  showFront(){
    this.fronts = this.frontservice.getFrontList();
    console.log('work fine',this.fronts); 
  }

  

  gofront(){
    this.router.navigate(['list-front'])
  }

  goback(){
    this.router.navigate(['wlc-page'])
  }

  gofull(){
    this.router.navigate(['list-full'])
  }
  go () { 
    this.router.navigate(['/general']) ;
  }

}
