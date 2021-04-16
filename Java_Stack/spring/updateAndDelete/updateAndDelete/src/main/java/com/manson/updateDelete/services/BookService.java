package com.manson.updateDelete.services;

import org.springframework.stereotype.Service;

import com.manson.updateDelete.models.Book;
import com.manson.updateDelete.repositories.BookRepository;

import java.util.List;
import java.util.Optional;

@Service
public class BookService {
	private final BookRepository bookRepository;
	
	public BookService(BookRepository bookRepository) {
		this.bookRepository = bookRepository;
	}
    // returns all the books
    public List<Book> allBooks() {
        return bookRepository.findAll();
    }
    // creates a book
    public Book createBook(Book b) {
        return bookRepository.save(b);
    }
    // retrieves a book
    public Book findBook(Long id) {
        Optional<Book> optionalBook = bookRepository.findById(id);
        if(optionalBook.isPresent()) {
            return optionalBook.get();
        } else {
            return null;
        }
    }
    
    public Book updateBook(Long id, String title, String description, String language, Integer pages ) {
    	Book toUpdate = this.bookRepository.findById(id).orElse(null);
    	if(toUpdate == null) {
    		return null;
    	}
    	else {
    		toUpdate.setTitle(title);
    		toUpdate.setDescription(description);
    		toUpdate.setLanguage(language);
    		toUpdate.setnumberOfPages(pages);
    		return this.bookRepository.save(toUpdate);
    	}
    }
    
    public void deleteBook(Long id) {
    	this.bookRepository.deleteById(id);
   }
}
