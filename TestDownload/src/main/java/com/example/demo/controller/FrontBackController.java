package com.example.demo.controller;

import com.example.demo.exeption.ResourceNotFoundException;
import com.example.demo.model.BackInfoBean;
import com.example.demo.model.FrontBackBean;
import com.example.demo.model.FrontInfoBean;
import com.example.demo.repository.FrontBackRepository;
import com.example.demo.service.SequenceGeneratorService;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.*;

import java.util.List;

import javax.validation.Valid;

@CrossOrigin(origins = "http://localhost:4200")
@RestController
@RequestMapping("/api/v1")
public class FrontBackController {
    @Autowired
    private FrontBackRepository applicationRepository;

    @Autowired
    private SequenceGeneratorService sequenceGeneratorService;
    
    @GetMapping("/list-app")
    public List<FrontBackBean> getAllApps() {
  		return applicationRepository.findAll();
  	}
    @PostMapping("/app")
    public FrontBackBean createApplication(@Valid @RequestBody FrontBackBean app) {

        app.setDependencies("web,lombok,devtools");
        app.setVersion_java("1.8");
        try
        {

            Process p = Runtime.getRuntime().exec( "cmd.exe /k /C:/Program Files/nodejs/nodevars.bat/ & cd c:/applications/front_back & mkdir "+app.getNom_projet()+" & cd "+app.getNom_projet()+" & ng new "+app.getNom_projet()+" --routing true --style scss &  cd c:/applications/"+app.getNom_projet() + " && ng g c home  && ng g c login & exit");
            java.io.BufferedReader out = new java.io.BufferedReader( new java.io.InputStreamReader( p.getInputStream() ) );

        }
        catch ( Exception e )
        {

        }
        try
        {
            System.out.println(app.getNom_projet()+" "+app.getBack_group()+" "+app.getBack_artifact()+" "+app.getBack_description()+" "+app.getBack_packaging()+" "+app.getVersion_java()+" "+app.getDependencies()+" front_back");
            Process p = Runtime.getRuntime().exec( "cmd.exe /c goFull.bat "+app.getNom_projet()+" "+app.getBack_group()+" "+app.getBack_artifact()+" "+app.getBack_description()+" "+app.getBack_packaging()+" "+app.getVersion_java()+" "+app.getDependencies());

            java.io.BufferedReader out = new java.io.BufferedReader( new java.io.InputStreamReader( p.getInputStream() ) );


        }
        catch ( Exception e )
        {

        }
        app.setId_application(sequenceGeneratorService.generateSequence(BackInfoBean.SEQUENCE_NAME));
        return applicationRepository.save(app);
    }
    
    
    
@GetMapping("/app/{id_application}")
	
    public ResponseEntity<FrontBackBean> DownloadApplication(@PathVariable(value = "id_application") Long fullId)
			throws ResourceNotFoundException {
    	FrontBackBean app = applicationRepository.findById(fullId)
    			.orElseThrow(() -> new ResourceNotFoundException("front not found for this id :: " + fullId));
    	  app.setDependencies("web,lombok,devtools");
          app.setVersion_java("1.8");
          try
          {

              Process p = Runtime.getRuntime().exec( "cmd.exe /k /C:/Program Files/nodejs/nodevars.bat/ & cd c:/applications/front_back & mkdir "+app.getNom_projet()+" & cd "+app.getNom_projet()+" & ng new "+app.getNom_projet()+" --routing true --style scss &  cd c:/applications/"+app.getNom_projet() + " && ng g c home  && ng g c login & exit");
              java.io.BufferedReader out = new java.io.BufferedReader( new java.io.InputStreamReader( p.getInputStream() ) );

          }
          catch ( Exception e )
          {e.printStackTrace();}
          try
          {
              System.out.println(app.getNom_projet()+" "+app.getBack_group()+" "+app.getBack_artifact()+" "+app.getBack_description()+" "+app.getBack_packaging()+" "+app.getVersion_java()+" "+app.getDependencies()+" front_back");
              Process p = Runtime.getRuntime().exec( "cmd.exe /c goFull.bat "+app.getNom_projet()+" "+app.getBack_group()+" "+app.getBack_artifact()+" "+app.getBack_description()+" "+app.getBack_packaging()+" "+app.getVersion_java()+" "+app.getDependencies());

              java.io.BufferedReader out = new java.io.BufferedReader( new java.io.InputStreamReader( p.getInputStream() ) );


          }
          catch ( Exception e )
          {e.printStackTrace();}
          app.setId_application(sequenceGeneratorService.generateSequence(BackInfoBean.SEQUENCE_NAME));
        
		     return ResponseEntity.ok().body(app);     
    }
		       
}
