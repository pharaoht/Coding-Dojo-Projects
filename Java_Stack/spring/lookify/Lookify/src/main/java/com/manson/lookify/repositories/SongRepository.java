package com.manson.lookify.repositories;

import java.util.List;
import org.springframework.data.repository.CrudRepository;
import com.manson.lookify.models.Song;
import org.springframework.stereotype.Repository;

@Repository
public interface SongRepository extends CrudRepository<Song, Long>{
	List<Song> findAll();
//	 // this method finds books with descriptions containing the search string
	 List<Song> findByArtistNameContaining(String search);
//	 // this method counts how many titles contain a certain string
//	 Long countByTitleContaining(String search);
//	 // this method deletes a book that starts with a specific title
//	 Long deleteByTitleStartingWith(String search);
	 
	 List<Song> findByArtistNameLike(String name);
	 
	 List<Song> findTop3ByRatingAsc();
}
