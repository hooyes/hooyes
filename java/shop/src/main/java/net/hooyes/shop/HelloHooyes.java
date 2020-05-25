package net.hooyes.shop;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.RestController;
import org.springframework.jdbc.core.JdbcTemplate;

@RestController
public class HelloHooyes {
	
	@Autowired
    JdbcTemplate jdbcTemplate;
	
	@GetMapping("/data")
	public String data() {
		String sql = "select name from Products where id=1";
		String name = jdbcTemplate.queryForObject(sql,String.class);
		return name;
	}
	
	
}