package com.manson.dojoandninjas.repository;

import java.util.List;
import org.springframework.data.repository.CrudRepository;
import org.springframework.stereotype.Repository;
import com.manson.dojoandninjas.models.Ninja;

@Repository
public interface ninjarepository extends CrudRepository<Ninja, Long> {
	List<Ninja> findAll();
}
