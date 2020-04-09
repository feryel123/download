export class Application{

    nom_projet :string;
    type_application :string ; 
    id_application : number ; 
    framework_front : string ; 
    version_front : string ; 
    back_language : string ; 
    version_back : string ; 
    back_group : string;
    back_artifact : string ; 
    back_description :string ;
    back_packaging : string; 
    version_java : string; 
    Dependencies : string;
    public set info(val:string) {
        this.nom_projet = val;
      }

  public set choix(type :string){
    this.type_application = type ; 
  }

}