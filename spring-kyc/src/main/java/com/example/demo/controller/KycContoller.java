package com.example.demo.controller;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PatchMapping;
import org.springframework.web.bind.annotation.PathVariable;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RequestParam;
import org.springframework.web.bind.annotation.RestController;

import com.example.demo.exception.KycDataNotFoundException;
import com.example.demo.model.KYC;
import com.example.demo.service.KycService;

@RestController
public class KycContoller {

	@Autowired
	KycService kycService;
	
	
	@GetMapping("/data")
	public KYC  getDataByAdharandName(@RequestParam("firstName") String firstName,@RequestParam("adharId") String adharId) throws KycDataNotFoundException
	{
		System.out.println(firstName);
		System.out.println(adharId);
//		int data1=Integer.parseInt(adharId);
		double data=Double.parseDouble(adharId);
		KYC kycData=kycService.findByFirstNameAndAdharId(firstName, data);
		if(kycData==null)
		{
			throw new KycDataNotFoundException("data not found");
		}
//		return new ResponseEntity (kycData,HttpStatus.FOUND);
//	return new ResponseEntity (dataVa,HttpStatus.FOUND);
		return kycData;

	}
	
	@PostMapping("/data")
	public ResponseEntity<KYC> insertData(@RequestBody KYC kycData)
	{
		System.out.println("in the controo");
		System.out.println(kycData);
		System.out.println(kycData.getAadharId());
		this.kycService.saveKycData(kycData);
		return new ResponseEntity<>(kycData,HttpStatus.CREATED);
	}
	
	@PatchMapping("/data")
	public ResponseEntity<KYC> updateData(@RequestBody KYC kycData)
	{
		System.out.println("in the patchmapping");
		KYC kycDataUpdated=kycService.updateKycDetail(kycData);
		System.out.println(kycDataUpdated);
		return new ResponseEntity<KYC>(kycDataUpdated,HttpStatus.ACCEPTED);
	}
}
