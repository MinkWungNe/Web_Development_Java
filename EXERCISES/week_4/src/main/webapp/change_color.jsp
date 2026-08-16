<%@ page language="java" contentType="text/html; charset=UTF-8" pageEncoding="UTF-8" isELIgnored="false" %>
<!DOCTYPE html>
<html>
<head>
    <title>Đổi màu nền</title>
    <link rel="stylesheet" type="text/css" href="${pageContext.request.contextPath}/css/style.css">
</head>
<body>
    <% 
        request.setCharacterEncoding("UTF-8");
        
        String color = request.getParameter("color");
        
        if (color != null) {
            session.setAttribute("color", color);
        }

        // Change body background color
        if (session.getAttribute("color") != null) {
            out.println("<script>");
            out.println("document.body.style.backgroundColor = '" + session.getAttribute("color") + "';");
            out.println("</script>");
        }
    %>

    <div class="container">
        <div class="main">
            <div class="header-wrapper">
                <div class="header">
                    <a class="back-button" href="index.jsp">&#8592</a>
                    <h1>Đổi màu nền</h1>
                </div>
            </div>  

            <form class="change-color" action="" method="POST">
                <button type="submit" value="red" name="color">Red</button>
                <button type="submit" value="blue" name="color">Blue</button>
                <button type="submit" value="green" name="color">Green</button>
                <button type="submit" value="pink" name="color">Pink</button>
                <button type="submit" value="yellow" name="color">Yellow</button>
            </form>
        </div>
    </div>
</body>
</html>