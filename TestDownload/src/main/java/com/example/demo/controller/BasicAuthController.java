package com.example.demo.controller;

import com.example.demo.model.AuthentificationBean;
import org.springframework.web.bind.annotation.CrossOrigin;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;

@CrossOrigin(origins = "http://localhost:4200")
@RestController
@RequestMapping("/api/v1")
public class BasicAuthController {
    @GetMapping(path = "/basicauth")
    public AuthentificationBean basicauth(){
        return new AuthentificationBean("u re authentified !!");
    }

}