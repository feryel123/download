package com.example.demo.model;

import org.springframework.data.annotation.Id;
import org.springframework.data.annotation.Transient;
import org.springframework.data.mongodb.core.mapping.Document;

@Document(collection = "back")
public class BackInfoBean {

    @Transient
    public static final String SEQUENCE_NAME = "back_sequence";

    @Id
    private long id_back;
    
    private String nom_projet ;
    private String language ;
    private String version_back ;
    private String group ;
    private String artifact ;
    private String description ;
    private String packaging ;
    private String version_java ;
    private String dependencies ;




    public BackInfoBean() {

    }

    public BackInfoBean( String nom_projet,String group ,  String artifact , String description , String packaging ,  String version_java , String dependencies) {

        this.nom_projet =nom_projet;
        this.group = group ;
        this.artifact = artifact ;
        this.description = description ;
        this.packaging = packaging ;
        this.version_java = version_java ;
        this.dependencies = dependencies ;

    }


    public BackInfoBean( String nom_projet ,String language , String version_back ,String group ,  String artifact , String description , String packaging ,  String version_java , String dependencies) {

        this.nom_projet =nom_projet;
        this.language = language ;
        this.version_back = version_back ;
        this.group = group ;
        this.artifact = artifact ;
        this.description = description ;
        this.packaging = packaging ;
        this.version_java = version_java ;
        this.dependencies = dependencies ;

    }




    public String getDependencies() {
        return dependencies;
    }

    public void setDependencies(String dependencies) {
        this.dependencies = dependencies;
    }

    public long getId_back() {
        return id_back;
    }

    public void setId_back(long id_back) {
        this.id_back = id_back;
    }
    

    public String getLanguage() {
        return language;
    }

    

	public void setLanguage(String language) {
        this.language = language;
    }

    public String getVersion_back() {
        return version_back;
    }

    public void setVersion_back(String version_back) {
        this.version_back = version_back;
    }

    public String getGroup() {
        return group;
    }

    public void setGroup(String group) {
        this.group = group;
    }

    public String getArtifact() {
        return artifact;
    }

    public void setArtifact(String artifact) {
        this.artifact = artifact;
    }

    public String getDescription() {
        return description;
    }

    public void setDescription(String description) {
        this.description = description;
    }

    public String getPackaging() {
        return packaging;
    }

    public void setPackaging(String packaging) {
        this.packaging = packaging;
    }

    public String getVersion_java() {
        return version_java;
    }

    public void setVersion_java(String version_java) {
        this.version_java = version_java;
    }





    public String getNom_projet() {
        return nom_projet;
    }

    public void setNom_projet(String nom_projet) {
        this.nom_projet = nom_projet;
    }

    @Override
    public String toString() {
        return "Back [id=" + id_back + ", language=" + language + ",  version_back=" + version_back +", group="+group+ ",artifact="+artifact+","
                + ",description="+description+", packaging="+packaging+" , version_java="+version_java+"  ]";
    }



}

