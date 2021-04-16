package com.manson.updateDelete.models;

import java.util.Date;

import javax.persistence.Column;
import javax.persistence.Entity;
import javax.persistence.GeneratedValue;
import javax.persistence.GenerationType;
import javax.persistence.Id;
import javax.persistence.PrePersist;
import javax.persistence.PreUpdate;
import javax.persistence.Table;
import javax.validation.constraints.Min;
import javax.validation.constraints.Size;

import org.springframework.format.annotation.DateTimeFormat;

import com.sun.istack.NotNull;
@Entity
@Table(name="books")
public class Book {
    @Id
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    private Long id;
    @NotNull
    @Size(min = 5, max = 200)
    private String title;
    @NotNull
    @Size(min = 5, max = 200)
    private String description;
    @NotNull
    @Size(min = 3, max = 40)
    private String language;
    @NotNull
    @Min(100)
    private Integer numberOfPages;
   
    @Column(updatable=false)
    @DateTimeFormat(pattern="yyyy-MM-dd")
    private Date createdAt;
    @DateTimeFormat(pattern="yyyy-MM-dd")
    private Date updatedAt;
    
    public Book() {
    	
    }
    
    public Long getId() {
    	return id;
    	
    }
    
    public void setId(Long id) {
    	this.id = id;
    }
    
    public String getTitle() {
    	return title;
  
    }
    
    public void setTitle(String title) {
    	this.title = title;
    }
    
    public String getDescription() {
    	return description;
    }
    
    public void setDescription(String description) {
    	this.description = description;
    }
    
    public String getLanguage() {
    	return language;
    }
    
    public void setLanguage(String language) {
    	this.language = language;
    }
    
    public Integer getnumberOfPages() {
    	return numberOfPages;
    }
    
    public void setnumberOfPages(Integer numberOfPages) {
    	this.numberOfPages = numberOfPages;
    }
    
    
    
    
    
    
    
    
    
    
    public Book(String title, String description, String language, Integer numberOfPages) {
    	this.id = id;
    	this.title = title;
    	this.description = description;
    	this.language = language;
    	this.numberOfPages = numberOfPages;
    }
    public Book(String title, String desc, String lang, int pages) {
        this.title = title;
        this.description = desc;
        this.language = lang;
        this.numberOfPages = pages;
    }
    
    
    @PrePersist
    protected void onCreate(){
        this.createdAt = new Date();
    }
    @PreUpdate
    protected void onUpdate(){
        this.updatedAt = new Date();
    }
}


//@Entity: represents an entity model for our application
//@Table: sets this as a table in the database
//@Id: sets this as the primary key
//@GeneratedValue: sets this as an auto-incrementing value
//@Size adds validation that the column must be in the specified range
//@Min adds validation that the column must be at least the specified value
//@NotNull adds validation that the column must be null
//@PrePersist runs the method right before the object is created
//@PreUpdate runs a method when the object is modified