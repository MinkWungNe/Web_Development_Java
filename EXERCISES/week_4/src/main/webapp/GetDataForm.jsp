<%@ page language="java" contentType="text/html; charset=UTF-8" pageEncoding="UTF-8" isELIgnored="false" %>

<!DOCTYPE html>

<html>
    <head>
        <title>Registration Form</title>
        <link rel="stylesheet" type="text/css" href="${pageContext.request.contextPath}/css/style.css">
    </head>
    <body>
        <%  
            request.setCharacterEncoding("UTF-8");
            // Change body background color
            if (session.getAttribute("color") != null) {
                out.println("<script>");
                out.println("document.body.style.backgroundColor = '" + session.getAttribute("color") + "';");
                out.println("</script>");
            }

            // Get student information from session and display it
            String name = (String) request.getParameter("name");
            String lastname = (String) request.getParameter("lastname");
            String id = (String) request.getParameter("id");

            if (name != null && lastname != null && id != null) {
                out.println("<script>");
                out.println("document.getElementById('name').value = '" + session.getAttribute("name") + "';");
                out.println("document.getElementById('lastname').value = '" + session.getAttribute("lastname") + "';");
                out.println("document.getElementById('id').value = '" + session.getAttribute("id") + "';");
                out.println("</script>");
            }
        %>
        <div class="container">
            <div class="main">
                <div class="header-wrapper">
                    <div class="header">
                        <a class="back-button" href="index.jsp">&#8592</a>
                        <h1>Registration Form</h1>
                    </div>
                </div>

                <form class="dataform" action="" method="POST">
                    <div class="dataform-item">
                        <label for="name">First Name:</label>   
                        <input type="text" id="name" name="name" required>
                    </div>

                    <div class="dataform-item">
                        <label for="lastname">Last Name:</label>
                        <input type="text" id="lastname" name="lastname" required>
                    </div>
                    
                    <div class="dataform-item">
                        <label for="id">Student ID:</label>
                        <input type="id" id="id" name="id" required>
                    </div>

                    <div class="dataform-item" style="justify-content: center;">
                        <input class="button" type="submit" value="Submit">
                        <input class="button" type="reset" value="Reset">
                    </div>
                    

                    <p>This form is created by the student of DHV</p>
                    <p>We are studying the Web App course</p>

                </form>
                
                <div class="output">
                    <h2>Result</h2>
                    <p>Name: <%= ((name != null) ? name : "") + " " + ((lastname != null) ? lastname : "") %></p>
                    <p>Student ID: <%= (id != null) ? id : "" %></p>
                </div>
            </div>
        </div>
    </body>
</html>