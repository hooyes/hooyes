import java.io.*;
import javax.servlet.*;
import javax.servlet.http.*;
public class HelloHooyes extends HttpServlet {
   protected void doGet(HttpServletRequest req, HttpServletResponse res)
      throws ServletException, IOException {
      res.getWriter().append("Hello Hooyes!");
   }

   protected void doPost(HttpServletRequest req, HttpServletResponse res)
      throws ServletException, IOException {
      res.getWriter().append("Welcome to https://hooyes.net/p/first-servlet");
   }
}
