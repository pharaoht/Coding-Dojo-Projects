package com.manson.lookify.models;

import java.util.Date;

import javax.persistence.Column;
import javax.persistence.Entity;
import javax.persistence.GeneratedValue;
import javax.persistence.GenerationType;
import javax.persistence.Id;
import javax.persistence.PrePersist;
import javax.persistence.PreUpdate;
import javax.persistence.Table;
import javax.validation.constraints.Max;
import javax.validation.constraints.Min;
import javax.validation.constraints.Size;

import org.springframework.format.annotation.DateTimeFormat;

import com.sun.istack.NotNull;


@Entity
@Table(name="songs")
public class Song {
	@Id
	@GeneratedValue(strategy = GenerationType.IDENTITY)
	private Long id;
	
	@NotNull
	@Size(min = 3, max=300)
	private String songName;
	
	@NotNull
	@Size(min=3, max=100)
	private String artistName;
	
	@NotNull
	@Min(1)
	@Max(10)
	private Integer rating;
	
	@Column(updatable=false)
    @DateTimeFormat(pattern="yyyy-MM-dd")
    private Date createdAt;
	
    @DateTimeFormat(pattern="yyyy-MM-dd")
    private Date updatedAt;
    
    //constructor
    public Song() {
    	
    }
    
    public Song(String songName, String artistName, Integer rating ) {
    	this.songName = songName;
    	this.artistName = artistName;
    	this.rating = rating;
    }
    
    
    //getter
    public Long getId() {
    	return id;
    }
    //setter
    public void setId(Long id) {
    	this.id = id;
    }
    //getter
    public String getSongName() {
    	return songName;
    }
    //setter
    public void setSongName(String songName) {
    	this.songName = songName;
    }
	
    public String getArtistName() {
    	return artistName;
    }
    
    public void setArtistName(String artistName) {
    	this.artistName = artistName;
    }
    
    public Integer getRating() {
    	return rating;
    }
    
    public void setRating(Integer rating) {
    	this.rating = rating;
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
