import { Component, OnInit, Input, EventEmitter, ViewChild } from '@angular/core';
import { Router } from '@angular/router';
import { Front } from './front';
import { FrontService } from './front.service';


@Component({
  selector: 'app-front',
  templateUrl: './front.component.html',
  styleUrls: ['./front.component.scss'],
})
export class FrontComponent implements OnInit {

  submitted = false;
  front: Front = new Front();
  frontobj : Front ; 



  constructor(private frontservice: FrontService,
    private router: Router) { }


 save() {

  this.front.nom_projet = window.history.state.nom_projet;
    this.front.varChoix = window.history.state.varChoix ;
   this.frontservice.createFront(this.front)
     .subscribe(data => console.log(data), error => console.log(error));
   this.front = new Front();
   this.goList();

 }
  goList() {
    this.router.navigate(['/db-config'] , {state: {frontobj : this.frontobj}}) ;
  }

go(){
  this.router.navigate(['/general']) 
  }

  onSubmit() {
    this.submitted = true;
    this.save();
  }

  ngOnInit() {

    console.log(window.history.state.nom_projet) ;
    console.log(window.history.state.varChoix) ; 
  }


}
