<%@ page language="java" contentType="text/html; charset=UTF-8" pageEncoding="UTF-8" isELIgnored="false" %>
<html>
<head>
    <title>Week 4</title>
    <link rel="stylesheet" type="text/css" href="${pageContext.request.contextPath}/css/style.css">
</head>

<body>
    <%  
        // Change body background color
        if (session.getAttribute("color") != null) {
            out.println("<script>");
            out.println("document.body.style.backgroundColor = '" + session.getAttribute("color") + "';");
            out.println("</script>");
        }
    %>

    <div class="container">
        <div class="main">
            <h1>Bài tập tuần 4</h1>
            <ul>
                <li><a href="calculator.jsp">Bài tập 1: Simple Calculator</a></li>
                <li><a href="change_color.jsp">Bài tập 2: Đổi màu nền</a></li>
                <li><a href="GetDataForm.jsp">Bài tập 3: Get Data Form</a></li>
            </ul>
        </div>
    </div>
</body>
</html>
