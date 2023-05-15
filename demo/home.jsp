<%@ page language="java" %>
<html>
    <head>
        <title>Home</title>
        <style>
            body{
                display: flex;
                justify-content: center;
                align-items: center;
                flex-direction: column;
            }
            div{
               font-size: 40px;
               margin: 20px;
               margin-top: 60px;
               display: flex;
               justify-content: center;
               align-items: center;
               font-weight: bold;
               background-color: aliceblue;
               padding: 10px;
               border-radius: 10px;
            }
            .name
            {
                background-color: white;
                font-size: 25px;
            }
            button{
                border: none;
                font-size: 20px;
                padding: 10px;
                width: 150px;
                background-color: dodgerblue;
                border-radius: 5px;
                font-weight: bold;
                cursor: pointer;
            }
        </style>
    </head>
    <body>
        <% String name = request.getParameter("username");
        out.println("<div>Welcome, <h1>"+name+"</h1></div>");
        %>
        <div class ="name"><span>Do you want to see this visit page count?</span></div>
        <form action="add">
            <input type="hidden" name="username" value=<%= name %>;
            <div class="btn"><button type="submit">Yes</button></div>
        </form>
    </body>
</html>