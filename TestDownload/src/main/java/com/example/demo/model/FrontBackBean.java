package com.example.demo.model;

import org.springframework.data.annotation.Id;
import org.springframework.data.annotation.Transient;
import org.springframework.data.mongodb.core.mapping.Document;

@Document(collection = "full")
public class FrontBackBean {
    @Transient
    public static final String SEQUENCE_NAME = "application_sequence";

    @Id
    private long id_application;
    
    private String nom_projet ;
    private String type_application ; 
    private String framework_front ;
    private String version_front ;
    private String back_language ;
    private String version_back ;
    private String back_group ;
    private String back_artifact ;
    private String back_description ;
    private String back_packaging ;
    private String version_java ;
    private String dependencies ;
    public FrontBackBean() {
    }

    public FrontBackBean(long id_application, String nom_projet,  String type_application,String framework_front, String version_front, String back_language, String version_back, String back_group, String back_artifact, String back_description, String back_packaging, String version_java, String dependencies) {
        this.id_application = id_application;
        this.nom_projet = nom_projet;
        this.type_application = type_application ; 
        this.framework_front = framework_front;
        this.version_front = version_front;
        this.back_language = back_language;
        this.version_back = version_back;
        this.back_group = back_group;
        this.back_artifact = back_artifact;
        this.back_description = back_description;
        this.back_packaging = back_packaging;
        this.version_java = version_java;
        this.dependencies = dependencies;
    }


    public String getDependencies() {
        return dependencies;
    }

    public void setDependencies(String dependencies) {
        this.dependencies = dependencies;
    }

    public static String getSequenceName() {
        return SEQUENCE_NAME;
    }

    public long getId_application() {
        return id_application;
    }

    public void setId_application(long id_application) {
        this.id_application = id_application;
    }

    public String getNom_projet() {
        return nom_projet;
    }

    public void setNom_projet(String nom_projet) {
        this.nom_projet = nom_projet;
    }

    public String getFramework_front() {
        return framework_front;
    }

    public void setFramework_front(String framework_front) {
        this.framework_front = framework_front;
    }

   

    public String getVersion_front() {
		return version_front;
	}

	public void setVersion_front(String version_front) {
		this.version_front = version_front;
	}

	public String getBack_language() {
        return back_language;
    }

    public void setBack_language(String back_language) {
        this.back_language = back_language;
    }

    public String getVersion_back() {
        return version_back;
    }

    public void setVersion_back(String version_back) {
        this.version_back = version_back;
    }

    public String getBack_group() {
        return back_group;
    }

    public void setBack_group(String back_group) {
        this.back_group = back_group;
    }

    public String getBack_artifact() {
        return back_artifact;
    }

    public void setBack_artifact(String back_artifact) {
        this.back_artifact = back_artifact;
    }

    public String getBack_description() {
        return back_description;
    }

    public void setBack_description(String back_description) {
        this.back_description = back_description;
    }

    public String getBack_packaging() {
        return back_packaging;
    }

    public void setBack_packaging(String back_packaging) {
        this.back_packaging = back_packaging;
    }

    public String getVersion_java() {
        return version_java;
    }

    public void setVersion_java(String version_java) {
        this.version_java = version_java;
    }

	public String getType_application() {
		return type_application;
	}

	public void setType_application(String type_application) {
		this.type_application = type_application;
	}
    
}
