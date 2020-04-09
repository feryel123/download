import { Component, OnInit, Input} from '@angular/core';
import { Back } from './back';
import { Router } from '@angular/router';
import { BackService } from './back.service';



@Component({
  selector: 'app-back',
  templateUrl: './back.component.html',
  styleUrls: ['./back.component.scss']
})


export class BackComponent implements OnInit {
   
  submitted = false ; 
 back : Back =  new Back() ; 

  constructor(private router : Router, private backservice : BackService) {}
  save() {

    this.back.nom_projet = window.history.state.nom_projet;
    this.backservice.createBack(this.back)
      .subscribe(data => console.log(data), error => console.log(error));
    this.back = new Back();
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
  }

}
