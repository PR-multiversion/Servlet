import java.io.*;
import javax.servlet.*;
import javax.servlet.http.*;
public class Helloservlet extends HttpServlet {
  public void doGet(HttpServletRequest request, HttpServletResponse response) throws ServletException, IOException {
    response.setContentType("text/html");
    String name = request.getParameter("username");
    PrintWriter out = response.getWriter();
    HttpSession session = request.getSession();
    Integer count = (Integer) session.getAttribute("count");
    if (count == null) {
        count = 0;
    }
    count++;
    session.setAttribute("count", count);
    
    out.print("<html><head><title>Home</title> <style> body{height: 100vh; display: flex;justify-content: center;align-items: center; flex-direction: column}div{ display: flex; justify-content: center;align-items: center;gap: 10px}</style></head><body>");
    out.print("<div><h1>Hey, <h3>"+name+"</h3></h1></div>");
    out.println("<h2>You have visited this page " + count + " times.<h2>");
    out.println("</body></html>");
  }
}