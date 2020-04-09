package com.example.demo.controller;

import java.nio.file.Files;
import java.nio.file.Path;
import java.nio.file.Paths;
import java.util.List;

import javax.servlet.ServletContext;
import javax.validation.Valid;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.core.io.ByteArrayResource;
import org.springframework.http.HttpHeaders;
import org.springframework.http.MediaType;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.CrossOrigin;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PathVariable;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;

import com.example.demo.exeption.ResourceNotFoundException;
import com.example.demo.model.BackInfoBean;
import com.example.demo.repository.BackRepository;
import com.example.demo.service.SequenceGeneratorService;

@CrossOrigin(origins = "http://localhost:4200")
@RestController
@RequestMapping("/api/v1")

public class BackController {
    @Autowired
    private BackRepository backRepository;

    @Autowired
    private SequenceGeneratorService sequenceGeneratorService;

    
    @GetMapping("/list-back")
    public List<BackInfoBean> getAllbacks() {
  	return backRepository.findAll();
  }
    
    @PostMapping("/back")
    public BackInfoBean createBack(@Valid @RequestBody BackInfoBean back) {
        back.setDependencies("web,lombok,devtools");
        back.setVersion_java("1.8");
 
        back.setId_back(sequenceGeneratorService.generateSequence(BackInfoBean.SEQUENCE_NAME));
        return backRepository.save(back);

    }
    
    @GetMapping("/wlc-page/{id_back}")
   
    public ResponseEntity<BackInfoBean> DownloadBack(@PathVariable(value = "id_back") Long backId)
			
    
    	throws ResourceNotFoundException {
    	
    	BackInfoBean back = backRepository.findById(backId)
    			.orElseThrow(() -> new ResourceNotFoundException("front not found for this id :: " + backId));
    	try
		        {
    		
		       	back.setDependencies("web,lombok,devtools");
		        back.setVersion_java("1.8");
		            System.out.println(back.getId_back()+" "+back.getNom_projet()+" "+back.getGroup()+" "+back.getArtifact()+" "+back.getDescription()+" "+back.getPackaging()+" "+back.getVersion_java()+" "+back.getDependencies());
		            Process p = Runtime.getRuntime().exec( "cmd.exe /c go.bat "+back.getNom_projet()+" "+back.getGroup()+" "+back.getArtifact()+" "+back.getDescription()+" "+back.getPackaging()+" "+back.getVersion_java()+" "+back.getDependencies());

		            java.io.BufferedReader out = new java.io.BufferedReader( new java.io.InputStreamReader( p.getInputStream() ) );

		        }
		        catch ( Exception e )
		        {e.printStackTrace();}
    	
		       return ResponseEntity.ok().body(back);     
    }
		     
}