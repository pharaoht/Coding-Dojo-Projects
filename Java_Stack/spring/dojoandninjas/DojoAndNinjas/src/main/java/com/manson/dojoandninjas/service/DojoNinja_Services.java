package com.manson.dojoandninjas.service;

import java.util.List;
import java.util.Optional;

import org.springframework.stereotype.Service;

import com.manson.dojoandninjas.models.Dojo;
import com.manson.dojoandninjas.models.Ninja;
import com.manson.dojoandninjas.repository.dojorepository;
import com.manson.dojoandninjas.repository.ninjarepository;

@Service
public class DojoNinja_Services {
	private dojorepository dojorepo;
	private ninjarepository ninjarepo;
	
	public DojoNinja_Services(dojorepository dojorepo, ninjarepository ninjarepo) {
		super();
		this.dojorepo = dojorepo;
		this.ninjarepo = ninjarepo;
	}
	
	//create dojo
	public Dojo create(Dojo newDojo) {
		return dojorepo.save(newDojo);
	}
	//create student
	public Ninja create(Ninja newNinja) {
		return ninjarepo.save(newNinja);
	}
	//display dojos
	public List<Dojo> getAllDojos(){
		return (List<Dojo>) dojorepo.findAll();
	}
	//display students
	public List<Ninja> getAllNinjas(){
		return (List<Ninja>) ninjarepo.findAll();
	}
	
	//display one dojo
	public Dojo getDojo(Long id) {
		Optional<Dojo> optionalDojo = this.dojorepo.findById(id);
		if(optionalDojo.isPresent()) {
			return optionalDojo.get();
		}else {
			return null;
		}
	}
	
}
