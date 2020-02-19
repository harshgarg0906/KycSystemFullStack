package com.example.demo.model;

import javax.persistence.Entity;
import javax.persistence.Id;


@Entity
public class KYC {

	@Id
	double aadharId;
	String firstName;
	String lastName;
	String emailId;
	double phoneNumber;
	String profileImageUrl;
	String aadharUrl;

	
	public KYC()
	{
		
	}


	public KYC(double aadharId,String firstName, String lastName, String emailId, double phoneNumber, String profileImageUrl,
			String aadharUrl) {
		this.aadharId=aadharId;
		this.firstName = firstName;
		this.lastName = lastName;
		this.emailId = emailId;
		this.phoneNumber = phoneNumber;
		this.profileImageUrl = profileImageUrl;
		this.aadharUrl = aadharUrl;
	}


	
	public double getAadharId() {
		return aadharId;
	}


	public void setAadharId(double adharId) {
		this.aadharId = adharId;
	}


	public String getFirstName() {
		return firstName;
	}


	public void setFirstName(String firstName) {
		this.firstName = firstName;
	}


	public String getLastName() {
		return lastName;
	}


	public void setLastName(String lastName) {
		this.lastName = lastName;
	}


	public String getEmailId() {
		return emailId;
	}


	public void setEmailId(String emailId) {
		this.emailId = emailId;
	}


	public double getPhoneNumber() {
		return phoneNumber;
	}


	public void setPhoneNumber(double phoneNumber) {
		this.phoneNumber = phoneNumber;
	}


	public String getProfileImageUrl() {
		return profileImageUrl;
	}


	public void setProfileImageUrl(String profileImageUrl) {
		this.profileImageUrl = profileImageUrl;
	}


	public String getAadharUrl() {
		return aadharUrl;
	}


	public void setAadharUrl(String aadharUrl) {
		this.aadharUrl = aadharUrl;
	}


	@Override
	public String toString() {
		return "KYC [firstName=" + firstName + ", lastName=" + lastName + ", emailId=" + emailId + ", phoneNumber="
				+ phoneNumber + ", profileImageUrl=" + profileImageUrl + ", adharUrl=" + aadharUrl + "]";
	}
	
	
	
	
}
