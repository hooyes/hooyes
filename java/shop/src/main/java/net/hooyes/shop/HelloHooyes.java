package net.hooyes.shop;

import net.hooyes.shop.Model.*;
import java.util.List;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PathVariable;
import org.springframework.web.bind.annotation.RestController;
import org.springframework.jdbc.core.JdbcTemplate;

@RestController
public class HelloHooyes {

	@Autowired
	JdbcTemplate jt;

	// 读取一个产品名称
	@GetMapping("/one")
	public String one() {
		String sql = "select name from Products where id = 1";
		String name = jt.queryForObject(sql, String.class);
		return name;
	}

	// 通过ID读取一个产口，返回JSON
	@GetMapping("/getById/{id}")
	public Products getbyId(@PathVariable Integer id) {
		String sql = "select id,name from Products where id= ?";
		return jt.queryForObject(sql, new Object[] { id },
				(rs, n) -> new Products(rs.getInt("id"), rs.getString("name")));
	}

	// 读取所有产品，返回JSON 列表
	@GetMapping("/getAll")
	public List<Products> getAll() {
		String sql = "select id,name from Products";
		return jt.query(sql, (rs, n) -> new Products(rs.getInt("id"), rs.getString("name")));
	}

}