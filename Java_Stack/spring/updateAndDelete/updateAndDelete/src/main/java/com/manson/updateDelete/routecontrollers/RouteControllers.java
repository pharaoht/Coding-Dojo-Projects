package com.manson.updateDelete.routecontrollers;

import java.util.List;

import javax.validation.Valid;

import org.springframework.stereotype.Controller;
import org.springframework.ui.Model;
import org.springframework.validation.BindingResult;
import org.springframework.web.bind.annotation.ModelAttribute;
import org.springframework.web.bind.annotation.PathVariable;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RequestMethod;

import com.manson.updateDelete.models.Book;
import com.manson.updateDelete.services.BookService;

@Controller
public class RouteControllers {
	private final BookService bookService;
	
	public RouteControllers(BookService bookService) {
		this.bookService = bookService;
	}
	
	@RequestMapping("/books")
	public String index(Model model) {
		List<Book> books = bookService.allBooks();
		model.addAttribute("books", books);
		return "index.jsp";
		
	}
	
	@RequestMapping("/books/new")
	public String newBook(@ModelAttribute("book") Book book) {
		return "new.jsp";
	}
	
	@RequestMapping(value="/books", method=RequestMethod.POST)
	public String create(@Valid @ModelAttribute("book") Book book, BindingResult result) {
		if(result.hasErrors()) {
			return "new.jsp";
		}
		else {
			bookService.createBook(book);
			return "redirect:/books";
		}
	}
	
	@RequestMapping(value="/books/{id}")
	public String showOneBook(@PathVariable("id") Long id, Model model) {
		Book book = this.bookService.findBook(id);
		model.addAttribute("book", book);
		return "show.jsp";
	}
	

}
