<%@ page language="java" contentType="text/html; charset=UTF-8" pageEncoding="UTF-8"%>
<%@ page import="com.model.Student" %>
<!DOCTYPE html>
<html>
<head>
    <meta charset="UTF-8">
    <%
        Student student = (Student) request.getAttribute("student");
        String title = (student != null) ? "Cập Nhật Sinh Viên" : "Thêm Sinh Viên Mới";
    %>
    <title><%= title %></title>
    <link href="https://cdn.jsdelivr.net/npm/bootstrap@5.3.0/dist/css/bootstrap.min.css" rel="stylesheet">
</head>
<body class="bg-light">
    <div class="container mt-5" style="max-width: 600px;">
        <div class="card shadow">
            <div class="card-header bg-secondary text-white">
                <h4 class="mb-0"><%= title %></h4>
            </div>
            <div class="card-body">
                
                <form action='<%= request.getContextPath() %>/<%= (student != null) ? "update" : "insert" %>' method='post'>
                    
                    <div class="mb-3">
                        <label class="form-label">Mã sinh viên</label>
                        <input type="text" name="studentID" class="form-control" 
                               value='<%= (student != null) ? student.getStudentID() : "" %>' required 
                               <%= (student != null) ? "readonly style='background-color: #e9ecef;'" : "" %>>
                        <% if (student != null) { %>
                            <small class="text-muted">Không được phép sửa Mã sinh viên (Khóa chính).</small>
                        <% } %>
                    </div>

                    <div class="mb-3">
                        <label class="form-label">Họ tên sinh viên</label>
                        <input type="text" name="name" class="form-control" 
                               value='<%= (student != null) ? student.getName() : "" %>' required>
                    </div>

                    <div class="mb-3">
                        <label class="form-label">Tuổi</label>
                        <input type="number" name="age" class="form-control" 
                               value='<%= (student != null) ? student.getAge() : "" %>' min="1" max="100" required>
                    </div>

                    <div class="mb-3">
                        <label class="form-label">Email</label>
                        <input type="email" name="email" class="form-control" 
                               value='<%= (student != null) ? student.getEmail() : "" %>' required>
                    </div>

                    <div class="d-flex justify-content-between">
                        <a href="<%= request.getContextPath() %>/list" class="btn btn-outline-secondary">Quay lại</a>
                        <button type="submit" class="btn btn-primary">Lưu thông tin</button>
                    </div>
                </form>
                
            </div>
        </div>
    </div>
</body>
</html>