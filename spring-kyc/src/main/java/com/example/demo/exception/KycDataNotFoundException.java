package com.example.demo.exception;

public class KycDataNotFoundException extends RuntimeException {
	
	String message;

	public KycDataNotFoundException(String message) {
		this.message = message;
	}

	@Override
	public String toString() {
		return "KycDataNotFoundException [message=" + message + "]";
	}
	
	

}
