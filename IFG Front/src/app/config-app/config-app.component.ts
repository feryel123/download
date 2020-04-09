import { Component, OnInit } from '@angular/core';
import { Application } from './app';
import { AppService } from './app.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-config-app',
  templateUrl: './config-app.component.html',
  styleUrls: ['./config-app.component.scss']
})
export class ConfigAppComponent implements OnInit {

  app : Application = new Application() ; 
  submitted = false ; 
  
  constructor(private appservice : AppService , 
    private router: Router) { }
   
       save() {
        this.app.nom_projet = window.history.state.nom_projet;
        this.app.type_application = window.history.state.type_application ; 
         this.appservice.createApp(this.app)
           .subscribe(data => console.log(data), error => console.log(error));
         this.app = new Application();
         this.goList() ; 
         
         }
     goList() {
       this.router.navigate(['/db-config']);  }
   
   
         onSubmit() {
           this.submitted = true;
           this.save();    
         }
   

  ngOnInit() {
    console.log(window.history.state.nom_projet)
    console.log(window.history.state.type_application)
  }

}
