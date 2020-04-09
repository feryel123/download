import { Component, OnInit } from '@angular/core';
import { Observable } from 'rxjs';
import { Application } from '../config-app/app';
import { AppService } from '../config-app/app.service';
import { Router, ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-list-full',
  templateUrl: './list-full.component.html',
  styleUrls: ['./list-full.component.scss']
})
export class ListFullComponent implements OnInit {
  apps: Observable<Application[]>; 
    app : Application = new Application() ; 
    id_application : number ;
    app1 : Application ;

    constructor(private appservice: AppService, private router: Router , private route: ActivatedRoute, ) { }
  
  
   showFull(){
      this.apps = this.appservice.getAppList();}
  
     
      go () { 
        this.router.navigate(['/general']) ;
      }
  
      ngOnInit() {
      
       this.showFull();

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


          downloadfull(id_application : number){
            console.log('******')
            this.appservice.getapp(id_application)
            .subscribe(data => {
              console.log(data)
              ,this.app1 = data;

            }, error => console.log(error));
         
                   
              }


}
