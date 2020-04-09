import { OnInit, Component } from '@angular/core';
import { Observable } from 'rxjs';
import { Back } from '../back/back';
import { BackService } from '../back/back.service';
import { FrontService } from '../front/front.service';
import { Front } from '../front/front';
import { Router, ActivatedRoute } from '@angular/router';
import { Application } from '../config-app/app';
import { AppService } from '../config-app/app.service';
import { DownloadService } from '../download.service';
import * as fileSaver from 'file-saver';

@Component({
    selector: 'app-wlc-page',
    templateUrl: './wlc-page.component.html',
    styleUrls: ['./wlc-page.component.scss']
  })
  export class WlcPageComponent implements OnInit {

    backs: Observable<Back[]>; 
    back : Back = new Back() ; 
    id_back : number ;
    back1 : Back ;

    constructor(private backservice: BackService, private frontservice: FrontService, private appservice : AppService, private downloadservice : DownloadService ,

  
      private router: Router , private route: ActivatedRoute, ) { }
  
  
   showBack(){
      this.backs = this.backservice.getBackList();}
  
     
      go () { 
        this.router.navigate(['/general']) ;
      }
  
      ngOnInit() {
      
       this.showBack();

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


          download(id_back : number){
            console.log('******')
            this.backservice.getBack(id_back)
            .subscribe(data => {
              console.log(data)
              ,this.back1 = data;

            }, error => console.log(error));
         
                   
              }

            
            
             
         
  
   
          }
        
      
       
        
    
  