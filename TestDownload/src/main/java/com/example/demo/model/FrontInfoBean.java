package com.example.demo.model;

import org.springframework.data.annotation.Id;
import org.springframework.data.annotation.Transient;
import org.springframework.data.mongodb.core.mapping.Document;

@Document(collection = "front")

public class FrontInfoBean {
    @Transient
    public static final String SEQUENCE_NAME = "front_sequence";

    @Id
    private long id;
    
    
    private String nom_projet ;
    private String type_framework ;
    private String version ;
    private String varChoix ; 



    public FrontInfoBean() {

    }

    public FrontInfoBean(String type_framework , String version , String nom_projet , String varChoix) {

        this.type_framework= type_framework;
        this.version = version ;
        this.nom_projet= nom_projet ;
        this.varChoix= varChoix ; 

    }

    public String getNom_projet() {
        return nom_projet;
    }

    public void setNom_projet(String nom_projet) {
        this.nom_projet = nom_projet;
    }

    public long getId() {
        return id;
    }

    public void setId(long id) {
        this.id = id;
    }

    public String getType_framework() {
        return type_framework;
    }

    public void setType_framework(String type_framework) {
        this.type_framework = type_framework;
    }

    public String getVersion() {
        return version;
    }

    public void setVersion(String version) {
        this.version = version;
    }

    
    
   

	public String getVarChoix() {
		return varChoix;
	}

	public void setVarChoix(String varChoix) {
		this.varChoix = varChoix;
	}

	@Override
    public String toString() {
        return "Front [id=" + id + ", type=" + type_framework + ",  version=" + version
                + " , nom du projet ="+ nom_projet + " ,type_app = "+ varChoix +" ]";
    }


}
