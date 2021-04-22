package com.manson.dojoandninjas.models;

import javax.persistence.Entity;
import javax.persistence.FetchType;
import javax.persistence.GeneratedValue;
import javax.persistence.GenerationType;
import javax.persistence.Id;
import javax.persistence.JoinColumn;
import javax.persistence.ManyToOne;
import javax.persistence.Table;
import javax.validation.constraints.Min;
import javax.validation.constraints.NotEmpty;


@Entity
@Table(name="ninjas")
public class Ninja {

	@Id
	@GeneratedValue(strategy = GenerationType.IDENTITY)
	private Long id;
	
	@NotEmpty(message="Please give your ninja a first name")
	private String firstName;
	
	@NotEmpty(message="Please give your ninja a last name")
	private String lastName;
	
	@Min(value=1, message="Please give your ninja a age")
	private Integer age;
	
	@ManyToOne(fetch = FetchType.LAZY)
	@JoinColumn(name="dojo_id")
	private Dojo dojo;
	
	public Ninja() { }

	public Ninja(@NotEmpty(message = "Please give your ninja a first name") String firstName,
			@NotEmpty(message = "Please give your ninja a last name") String lastName,
			@NotEmpty(message = "Please give your ninja a age") Integer age) {
		super();
		this.firstName = firstName;
		this.lastName = lastName;
		this.age = age;
	}

	public Long getId() {
		return id;
	}

	public void setId(Long id) {
		this.id = id;
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

	public Integer getAge() {
		return age;
	}

	public void setAge(Integer age) {
		this.age = age;
	}

	public Dojo getDojo() {
		return dojo;
	}

	public void setDojo(Dojo dojo) {
		this.dojo = dojo;
	}
	
	
}
