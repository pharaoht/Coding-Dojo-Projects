package com.manson.dojoandninjas.repository;

import java.util.List;
import org.springframework.data.repository.CrudRepository;
import org.springframework.stereotype.Repository;
import com.manson.dojoandninjas.models.Dojo;

@Repository
public interface dojorepository extends CrudRepository<Dojo, Long> {

	List<Dojo> findAll();
}
