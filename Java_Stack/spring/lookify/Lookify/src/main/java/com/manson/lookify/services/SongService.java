package com.manson.lookify.services;
import java.util.List;
import java.util.Optional;

import org.springframework.stereotype.Service;

import com.manson.lookify.models.Song;
import com.manson.lookify.repositories.SongRepository;

@Service
public class SongService {
	private final SongRepository songrepository;
	
	public SongService(SongRepository songrepository) {
		this.songrepository = songrepository;
	}
	
	//return all the songs
	public List<Song> allSongs(){
		return songrepository.findAll();
	}
	
	//addSong
	public Song addSong(Song s) {
		return songrepository.save(s);
	}
	
	//find song
	public Song findSong(Long id) {
		Optional<Song> optionalsong = songrepository.findById(id);
		if(optionalsong.isPresent()) {
			return optionalsong.get();
		}else {
			return null;
		}
	}
	
	//delete song
	public void deleteSong(Long id) {
		this.songrepository.deleteById(id);
	}
	
	public List<Song> findByartistName(String name){
		return songrepository.findByArtistNameLike("%"+name+"%");
	}
	
	public List<Song> findTop3(){
		return songrepository.findTop3ByRatingAsc();
	}
}
