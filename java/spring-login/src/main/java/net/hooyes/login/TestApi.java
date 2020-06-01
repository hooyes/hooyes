package net.hooyes.login;



import org.springframework.security.crypto.bcrypt.BCryptPasswordEncoder;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PathVariable;
import org.springframework.web.bind.annotation.RestController;

@RestController
public class TestApi {
	
	@GetMapping("/hash/{str}")
    public String hash(@PathVariable String str) {
		
		return new BCryptPasswordEncoder().encode(str);
	}
}
