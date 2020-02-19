package com.example.demo.repository;

import org.springframework.data.jpa.repository.JpaRepository;

import com.example.demo.model.KYC;

public interface KycRepository extends JpaRepository<KYC, Double>{

	public KYC findByFirstNameAndAadharId(String firstName,double adharId);
	public KYC findById(double adharId);
}
