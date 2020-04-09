package com.example.demo.controller;

import java.io.File;
import java.io.FileInputStream;
import java.io.FileNotFoundException;
import java.io.IOException;
import java.io.InputStream;
import java.util.List;

import javax.validation.Valid;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.CrossOrigin;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PathVariable;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RequestParam;
import org.springframework.web.bind.annotation.RestController;

import com.example.demo.exeption.ResourceNotFoundException;
import com.example.demo.model.FrontInfoBean;
import com.example.demo.repository.FrontRepository;
import com.example.demo.service.SequenceGeneratorService;

@CrossOrigin(origins = "http://localhost:4200")
@RestController
@RequestMapping("/api/v1")
public class FrontController {


    @Autowired
    private FrontRepository frontRepository;

    @Autowired
    private SequenceGeneratorService sequenceGeneratorService;

    /*@Autowired
    private ServletContext servletContext;
    
    private static final String DIRECTORY = "C:/applications";
    private static final String DEFAULT_FILE_NAME = "java-tutorial.zip";*/
    
 
    // Get List Front//
   
    @GetMapping("/wlc-page")
    
    public List<FrontInfoBean> getAllfronts() {
  		return frontRepository.findAll();
  	}
    
    
    // Download Front with ID //
    
    @GetMapping("/front/{id}")
	
    public ResponseEntity<FrontInfoBean> DownloadFront(@PathVariable(value = "id") Long frontId  )
			throws ResourceNotFoundException {
    	
    	
    	
    	FrontInfoBean front = frontRepository.findById(frontId)
    			.orElseThrow(() -> new ResourceNotFoundException("front not found for this id :: " + frontId));
    	
  
		       try {
		    	   
		    	   Process p = Runtime.getRuntime().exec( "cmd.exe /k /C:/Program Files/nodejs/nodevars.bat/  & ng new "+front.getNom_projet()+" & ng new "+front.getNom_projet()+" --routing true --style scss &  cd c:/applications/"+front.getNom_projet() + " && ng g c home  && ng g c login   & exit");
			         java.io.BufferedReader out = new java.io.BufferedReader( new java.io.InputStreamReader( p.getInputStream() ) );
		    	   
			
		       
		    	 	
	        }
	     
	     catch ( Exception e )
	     {} 
		        return ResponseEntity.ok().body(front);     
    }
		      
    
    
    
    /*  FileOutputStream fos = new FileOutputStream("s.zip");
	    ZipOutputStream zipOut = new ZipOutputStream(fos);
	    File fileToZip = new File(sourceFile);

	    zipFile(fileToZip, fileToZip.getName(), zipOut);
	    zipOut.close();
	    fos.close();



/* MediaType mediaType = MediaTypeUtils.getMediaTypeForFileName(this.servletContext, "demo.zip");
System.out.println("fileName: " + "demo.zip");
System.out.println("mediaType: " + mediaType);

Path path = Paths.get(DIRECTORY + "/" + DEFAULT_FILE_NAME);
byte[] data = Files.readAllBytes(path);
ByteArrayResource resource = new ByteArrayResource(data);
// return ResponseEntity.ok().header(HttpHeaders.CONTENT_DISPOSITION, "attachment;filename=" + path.getFileName().toString()).contentType(mediaType).contentLength(data.length).body(resource);*/

   /* private static void zipFile(File fileToZip, String fileName, ZipOutputStream zipOut) throws IOException {
        if (fileToZip.isHidden()) {
            return;
        }
        if (fileToZip.isDirectory()) {
            if (fileName.endsWith("/")) {
                zipOut.putNextEntry(new ZipEntry(fileName));
                zipOut.closeEntry();
            } else {
                zipOut.putNextEntry(new ZipEntry(fileName + "/"));
                zipOut.closeEntry();
            }
            File[] children = fileToZip.listFiles();
            for (File childFile : children) {
                zipFile(childFile, fileName + "/" + childFile.getName(), zipOut);
            }
            return;
        }
        FileInputStream fis = new FileInputStream(fileToZip);
        ZipEntry zipEntry = new ZipEntry(fileName);
        zipOut.putNextEntry(zipEntry);
        byte[] bytes = new byte[1024];
        int length;
        while ((length = fis.read(bytes)) >= 0) {
            zipOut.write(bytes, 0, length);
        }
        fis.close();
    }*/


    // Add Front Application to mongodb //
    @PostMapping("/front")
    public FrontInfoBean createFront(@Valid @RequestBody FrontInfoBean front) {
    	 front.setId(sequenceGeneratorService.generateSequence(FrontInfoBean.SEQUENCE_NAME));
    	    try
		       
   	     {
   	         Process p = Runtime.getRuntime().exec( "cmd.exe /k /C:/Program Files/nodejs/nodevars.bat/ & cd c:/applications/front & ng new "+front.getNom_projet()+" --routing true --style scss &  cd c:/applications/"+front.getNom_projet() + " && ng g c home  && ng g c login & exit");
   	         java.io.BufferedReader out = new java.io.BufferedReader( new java.io.InputStreamReader( p.getInputStream() ) );
   	    }
   	     
   	     catch ( Exception e )
   	     {} 
         return frontRepository.save(front); }
    
  
  


}
