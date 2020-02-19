package com.example.demo.service;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import com.example.demo.exception.KycDataNotFoundException;
import com.example.demo.model.KYC;
import com.example.demo.repository.KycRepository;

//import com.example.demo.repository.KycRepository;

@Service
public class KycService {

	KycRepository kycRepository;
	
	@Autowired
	public KycService(KycRepository kycRepository)
	{
		this.kycRepository=kycRepository;
	}
	
	public void saveKycData(KYC kycData)
	{
		System.out.println("in the service");
	      this.kycRepository.save(kycData);
	}
	public KYC findByFirstNameAndAdharId(String firstName,double adharId) throws KycDataNotFoundException
	{	
		KYC kycDatabase=kycRepository.findByFirstNameAndAadharId(firstName, adharId);
		if(kycDatabase==null)
		{
			throw new KycDataNotFoundException("kyc data is not found");
		}
		System.out.println(kycDatabase);
		return kycDatabase;
	}
	
	public KYC updateKycDetail(KYC updatedData)throws KycDataNotFoundException
	{
		double adharId=updatedData.getAadharId();
		KYC databaseData=kycRepository.findById(adharId);
		System.out.println("fetch data");
		if(databaseData==null)
		{
			throw new KycDataNotFoundException("data not found");
		}
		System.out.println(databaseData);
		databaseData.setAadharUrl(updatedData.getAadharUrl());
		databaseData.setEmailId(updatedData.getEmailId());
		databaseData.setFirstName(updatedData.getFirstName());
		databaseData.setPhoneNumber(updatedData.getPhoneNumber());
		databaseData.setProfileImageUrl(updatedData.getProfileImageUrl());
		databaseData.setLastName(updatedData.getLastName());
		System.out.println("updated data");
		System.out.println(databaseData);
		kycRepository.save(databaseData);
		return databaseData;
	}
}
