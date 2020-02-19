package com.example.demo.exception;

import java.util.Date;

import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.ControllerAdvice;
import org.springframework.web.bind.annotation.ExceptionHandler;
import org.springframework.web.bind.annotation.RestController;
import org.springframework.web.context.request.WebRequest;
import org.springframework.web.servlet.mvc.method.annotation.ResponseEntityExceptionHandler;

@ControllerAdvice
@RestController
public class CustomizedResponseEntityExceptionHandler extends ResponseEntityExceptionHandler {
	
	@ExceptionHandler(KycDataNotFoundException.class)
	public  ResponseEntity<Object> handleExceptionForController(Exception ex, WebRequest request)
	{
		ExceptionRespo exceptionRespo=new ExceptionRespo(new Date(), "data not found", request.getDescription(false));
		
		return new ResponseEntity<Object>(exceptionRespo,HttpStatus.NOT_FOUND);
	}

}
