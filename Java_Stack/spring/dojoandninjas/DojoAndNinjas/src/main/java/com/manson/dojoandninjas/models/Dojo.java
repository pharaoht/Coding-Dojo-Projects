package com.manson.dojoandninjas.models;

import java.util.List;
import javax.persistence.Entity;
import javax.persistence.FetchType;
import javax.persistence.GeneratedValue;
import javax.persistence.GenerationType;
import javax.persistence.Id;
import javax.persistence.OneToMany;
import javax.persistence.Table;
import javax.validation.constraints.NotEmpty;


@Entity
@Table(name="dojos")
public class Dojo {

	@Id
	@GeneratedValue(strategy = GenerationType.IDENTITY)
	private Long id;
	
	@NotEmpty(message="Please give your Dojo a name")
	private String name;
	
	//Creating one to many
	@OneToMany(mappedBy="dojo", fetch = FetchType.LAZY)
	private List<Ninja> ninjas;
	
	public Dojo() {
		
	}
	
	public Dojo(@NotEmpty(message = "Name your Dojo") String name) {
		super();
		this.name = name;
	}

	public Long getId() {
		return id;
	}

	public void setId(Long id) {
		this.id = id;
	}

	public String getName() {
		return name;
	}

	public void setName(String name) {
		this.name = name;
	}

	public List<Ninja> getNinjas() {
		return ninjas;
	}

	public void setNinjas(List<Ninja> ninjas) {
		this.ninjas = ninjas;
	}
}
