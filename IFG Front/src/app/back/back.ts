
export class Back {
  
    nom_projet : string ; 
    
    id_back :number;
    language : string ; 
    version_back : string ; 
    group : string;
    artifact : string ; 
    description :string ;
    packaging : string; 
    version_java : string; 
    
    public set info(val:string) {
        this.nom_projet = val;
      }
}