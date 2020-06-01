package net.hooyes.login;


import org.springframework.stereotype.Controller;
import org.springframework.web.bind.annotation.GetMapping;

@Controller
public class HooyesController {
	
	
	@GetMapping("/")
    public String home() {
		return "hooyes";
	}
	
	@GetMapping("/login")
    public String login() {
		return "login";
	}
	
}
