package com.controller;

import com.dao.StudentDAO;
import com.model.Student;

import java.sql.SQLException;
import javax.servlet.RequestDispatcher;
import javax.servlet.ServletException;
import javax.servlet.annotation.WebServlet;
import javax.servlet.http.HttpServlet;
import javax.servlet.http.HttpServletRequest;
import javax.servlet.http.HttpServletResponse;
import java.io.IOException;
import java.util.List;

@WebServlet("/") // Bắt mọi request gửi lên server
public class StudentServlet extends HttpServlet {
    private static final long serialVersionUID = 1L;
    private StudentDAO studentDAO;

    public void init() {
        studentDAO = new StudentDAO();
    }

    protected void doPost(HttpServletRequest request, HttpServletResponse response) throws ServletException, IOException {
        // Đặt encoding UTF-8 để không bị lỗi tiếng Việt khi submit form
        request.setCharacterEncoding("UTF-8");
        doGet(request, response);
    }

    protected void doGet(HttpServletRequest request, HttpServletResponse response) throws ServletException, IOException {
        String action = request.getServletPath();

        try {
            // Cài đặt mặc định để danh sách hiển thị khi truy cập vào 'localhost:8080/week_5/'
            if (action == null || action.equals("/") || action.equals("") || action.equals("/list")) {
                listStudents(request, response);
            }
            switch (action) {
                case "/new":
                    showNewForm(request, response);
                    break;
                case "/insert":
                    insertStudent(request, response);
                    break;
                case "/delete":
                    deleteStudent(request, response);
                    break;
                case "/edit":
                    showEditForm(request, response);
                    break;
                case "/update":
                    updateStudent(request, response);
                    break;
                default:
                    listStudents(request, response);
                    break;
            }
        } catch (Exception ex) {
            throw new ServletException(ex);
        }
    }

    // Hiển thị danh sách sinh viên
    private void listStudents(HttpServletRequest request, HttpServletResponse response) throws SQLException, IOException, ServletException {
        List<Student> listStudent = studentDAO.selectAllStudents();
        request.setAttribute("listStudent", listStudent);
        RequestDispatcher dispatcher = request.getRequestDispatcher("student-list.jsp");
        dispatcher.forward(request, response);
    }

    // Hiển thị form Thêm mới
    private void showNewForm(HttpServletRequest request, HttpServletResponse response) throws ServletException, IOException {
        RequestDispatcher dispatcher = request.getRequestDispatcher("student-form.jsp");
        dispatcher.forward(request, response);
    }

    // Hiển thị form Sửa (Có đổ dữ liệu cũ của SV đó ra form)
    private void showEditForm(HttpServletRequest request, HttpServletResponse response) throws SQLException, ServletException, IOException {
        String id = request.getParameter("id");
        Student existingStudent = studentDAO.selectStudent(id);
        RequestDispatcher dispatcher = request.getRequestDispatcher("student-form.jsp");
        request.setAttribute("student", existingStudent);
        dispatcher.forward(request, response);
    }

    // Xử lý logic Thêm sinh viên
    private void insertStudent(HttpServletRequest request, HttpServletResponse response) throws SQLException, IOException {
        String studentID = request.getParameter("studentID");
        String name = request.getParameter("name");
        int age = Integer.parseInt(request.getParameter("age"));
        String email = request.getParameter("email");

        Student newStudent = new Student(studentID, name, age, email);
        studentDAO.insertStudent(newStudent);
        response.sendRedirect("list");
    }

    // Xử lý logic Cập nhật sinh viên
    private void updateStudent(HttpServletRequest request, HttpServletResponse response) throws SQLException, IOException {
        String studentID = request.getParameter("studentID");
        String name = request.getParameter("name");
        int age = Integer.parseInt(request.getParameter("age"));
        String email = request.getParameter("email");

        Student student = new Student(studentID, name, age, email);
        studentDAO.updateStudent(student);
        response.sendRedirect("list");
    }

    // Xử lý logic Xóa sinh viên
    private void deleteStudent(HttpServletRequest request, HttpServletResponse response) throws SQLException, IOException {
        String id = request.getParameter("id");
        studentDAO.deleteStudent(id);
        response.sendRedirect("list");
    }
}