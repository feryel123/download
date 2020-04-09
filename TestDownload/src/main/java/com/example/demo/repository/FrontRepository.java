package com.example.demo.repository;

import com.example.demo.model.FrontInfoBean;
import org.springframework.data.mongodb.repository.MongoRepository;

public interface FrontRepository extends MongoRepository<FrontInfoBean, Long> {
}
