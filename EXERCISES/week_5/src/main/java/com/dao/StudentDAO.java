package com.dao;

import com.connection.DBConnection;
import com.model.Student;

import java.sql.*;
import java.util.ArrayList;
import java.util.List;

public class StudentDAO {

    // 1. Lấy danh sách tất cả sinh viên
    public List<Student> selectAllStudents() {
        List<Student> students = new ArrayList<>();
        String sql = "SELECT * FROM students";

        // Kết nối vào CSDL và truy vấn dùng khối try-catch để phòng báo lỗi
        try (Connection conn = DBConnection.getConnection(); PreparedStatement ps = conn.prepareStatement(sql); ResultSet rs = ps.executeQuery()) {
            while (rs.next()) {
                String id = rs.getString("studentID");
                String name = rs.getString("name");
                int age = rs.getInt("age");
                String email = rs.getString("email");
                students.add(new Student(id, name, age, email)); // Thêm dữ liệu vào danh sách
            }
        } catch (SQLException e) {
            e.printStackTrace();
        }
        return students;    // Trả về danh sách sinh viên
    }

    // 2. Thêm sinh viên mới
    public boolean insertStudent(Student student) {
        String sql = "INSERT INTO students (studentID, name, age, email) VALUES (?, ?, ?, ?)";
        boolean rowInserted = false;

        try (Connection conn = DBConnection.getConnection(); PreparedStatement ps = conn.prepareStatement(sql)) {
            ps.setString(1, student.getStudentID());
            ps.setString(2, student.getName());
            ps.setInt(3, student.getAge());
            ps.setString(4, student.getEmail());

            rowInserted = ps.executeUpdate() > 0;
        } catch (SQLException e) {
            e.printStackTrace();
        }
        return rowInserted;
    }

    // 3. Cập nhật thông tin sinh viên
    public boolean updateStudent(Student student) {
        String sql = "UPDATE students SET name = ?, age = ?, email = ? WHERE studentID = ?";
        boolean rowUpdated = false;

        try (Connection conn = DBConnection.getConnection(); PreparedStatement ps = conn.prepareStatement(sql)) {
            ps.setString(1, student.getName());
            ps.setInt(2, student.getAge());
            ps.setString(3, student.getEmail());
            ps.setString(4, student.getStudentID());

            rowUpdated = ps.executeUpdate() > 0;
        } catch (SQLException e) {
            e.printStackTrace();
        }
        return rowUpdated;
    }

    // 4. Xóa sinh viên theo ID
    public boolean deleteStudent(String studentID) {
        String sql = "DELETE FROM students WHERE studentID = ?";
        boolean rowDeleted = false;

        try (Connection conn = DBConnection.getConnection(); PreparedStatement ps = conn.prepareStatement(sql)) {
            ps.setString(1, studentID);
            rowDeleted = ps.executeUpdate() > 0;
        } catch (SQLException e) {
            e.printStackTrace();
        }
        return rowDeleted;
    }

    // 5. Lấy thông tin 1 sinh viên cụ thể (Dùng khi bấm "Sửa" để đổ dữ liệu vào Form)
    public Student selectStudent(String studentID) {
        Student student = null;
        String sql = "SELECT * FROM students WHERE studentID = ?";

        try (Connection conn = DBConnection.getConnection(); PreparedStatement ps = conn.prepareStatement(sql)) {
            ps.setString(1, studentID);
            try (ResultSet rs = ps.executeQuery()) {
                if (rs.next()) {
                    String name = rs.getString("name");
                    int age = rs.getInt("age");
                    String email = rs.getString("email");
                    student = new Student(studentID, name, age, email);
                }
            }
        } catch (SQLException e) {
            e.printStackTrace();
        }
        return student;
    }
}