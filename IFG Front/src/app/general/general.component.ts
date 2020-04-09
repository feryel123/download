import { Component, OnInit, Input, Query } from '@angular/core';
import { Router ,ActivatedRoute } from '@angular/router';


@Component({
  selector: 'c-general',
  templateUrl: './general.component.html',
  styleUrls: ['./general.component.scss']
})
export class GeneralComponent implements OnInit {

  nom_projet: any;
  varChoix: any;
  
  invaldname = false;
  errorMessage = 'veuillez remplir les champs ';
  

  constructor(
    private router: Router , 
   
  ) {}

  ngOnInit() {


  }
  choix() {
    console.log(this.varChoix)
    console.log(this.nom_projet);


    if 
    (this.nom_projet != '' && this.varChoix == 'Back End') 
    
    this.router.navigate(['general/back-config'],{ 
      state: { nom_projet: this.nom_projet , varChoix: this.varChoix }
    });
    
    else if(this.varChoix == 'Front End'  && this.nom_projet != '')
    
    this.router.navigate(['general/front'],{ 
      state: { nom_projet: this.nom_projet , varChoix: this.varChoix}  
    });

    else if (this.varChoix == 'Full-stack'  && this.nom_projet != '')
    
    this.router.navigate(['general/app-config'] , {state: {nom_projet : this.nom_projet , varChoix : this.varChoix}

    });
    
   
    else {

      this.invaldname = true;
 
}
  } } 


