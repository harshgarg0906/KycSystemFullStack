package com.example.demo;

import java.util.ArrayList;
import java.util.List;

import javax.annotation.PostConstruct;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.boot.SpringApplication;
import org.springframework.boot.autoconfigure.SpringBootApplication;
import org.springframework.cloud.netflix.eureka.EnableEurekaClient;

import com.example.demo.model.KYC;
import com.example.demo.repository.KycRepository;

@SpringBootApplication
@EnableEurekaClient
public class SpringKycApplication {

	@Autowired
	KycRepository kycRepository;
	public static void main(String[] args) {
		SpringApplication.run(SpringKycApplication.class, args);
	}
	
	
	@PostConstruct
	public void initialData()
	{
		List<KYC> listData=new ArrayList<>();
		listData.add(new KYC(2,"Rahul","Garg","rahul@gmail.com",63437468,"afsah","sdg"));
		listData.add(new KYC(3,"Raj","Garg","rahul@gmail.com",63437468,"afsah","sdg"));
		listData.add(new KYC(4,"Akash","Garg","rahul@gmail.com",63437468,"afsah","sdg"));
		kycRepository.saveAll(listData);
	}

}
