package com.example.demo.repository;

import com.example.demo.model.FrontBackBean;
import org.springframework.data.mongodb.repository.MongoRepository;

public interface FrontBackRepository extends MongoRepository<FrontBackBean, Long> {
}
