import { Input } from '@angular/core';

export class Front {
 
    id : number ;
    nom_projet : string ; 
    varChoix : any ;
    type_framework : any ;
    version : string; 
    active : boolean; 

 

    public set info(val:string) {
        this.nom_projet = val;
    }

  public set choix (val : any){
    this.varChoix = val ; 
  }

}