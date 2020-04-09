import { Component, OnInit } from '@angular/core';
import { Base } from './db';
import { Front } from '../front/front';
import { Router } from '@angular/router';
import { FrontService } from '../front/front.service';

@Component({
  selector: 'app-db-config',
  templateUrl: './db-config.component.html',
  styleUrls: ['./db-config.component.scss']
})
export class DbConfigComponent implements OnInit {
  base: Base = new Base();

  constructor( private router : Router , private frontservice : FrontService ) { }
  
  ngOnInit() {}

 /* save() {

    this.base.frontobj = window.history.state.frontobj ; 
    
  }*/
   


}
