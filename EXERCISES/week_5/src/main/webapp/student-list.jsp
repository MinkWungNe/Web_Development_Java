<%@ page language="java" contentType="text/html; charset=UTF-8" pageEncoding="UTF-8"%>
<%@ page import="java.util.List" %>
<%@ page import="com.model.*" %>
<!DOCTYPE html>
<html>
<head>
    <meta charset="UTF-8">
    <title>Quản lý sinh viên</title>
    <!-- Em dùng thử thư viện bootstrap 5 cho bài này -->
    <link href="https://cdn.jsdelivr.net/npm/bootstrap@5.3.0/dist/css/bootstrap.min.css" rel="stylesheet">
</head>
<body class="bg-light">
    <div class="container mt-5">
        <div class="card shadow">
            <div class="card-header bg-primary text-white d-flex justify-content-between align-items-center">
                <h3 class="mb-0">Danh Sách Sinh Viên</h3>
                <a href="<%= request.getContextPath() %>/new" class="btn btn-success">Thêm Sinh Viên Mới</a>
            </div>
            <div class="card-body">
                <table class="table table-striped table-hover align-middle">
                    <thead class="table-dark">
                        <tr>
                            <th>Mã SV</th>
                            <th>Họ và Tên</th>
                            <th>Tuổi</th>
                            <th>Email</th>
                            <th>Hành động</th>
                        </tr>
                    </thead>
                    <tbody>
                        <%
                            // Lấy List từ Servlet truyền sang qua Attribute
                            List<Student> listStudent = (List<Student>) request.getAttribute("listStudent");
                            
                            if (listStudent != null && !listStudent.isEmpty()) {
                                for (Student student : listStudent) {
                        %>
                                    <tr>
                                        <td><strong><%= student.getStudentID() %></strong></td>
                                        <td><%= student.getName() %></td>
                                        <td><%= student.getAge() %></td>
                                        <td><%= student.getEmail() %></td>
                                        <td>
                                            <a href="<%= request.getContextPath() %>/edit?id=<%= student.getStudentID() %>" class="btn btn-sm btn-warning">Sửa</a>
                                            <a href="<%= request.getContextPath() %>/delete?id=<%= student.getStudentID() %>" 
                                               class="btn btn-sm btn-danger" 
                                               onclick="return confirm('Bạn có chắc chắn muốn xóa sinh viên này?');">Xóa</a>
                                        </td>
                                    </tr>
                        <%
                                }
                            } else {
                        %>
                                <tr>
                                    <td colspan="5" class="text-center text-muted">Chưa có dữ liệu sinh viên nào.</td>
                                </tr>
                        <%
                            }
                        %>
                    </tbody>
                </table>
            </div>
        </div>
    </div>
</body>
</html>