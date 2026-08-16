package com.model;

public class Student {
    private String studentID;
    private String name;
    private int age;
    private String email;

    // Constructor không tham số
    public Student() {}

    // Constructor đầy đủ tham số
    public Student(String studentID, String name, int age, String email) {
        this.studentID = studentID;
        this.name = name;
        this.age = age;
        this.email = email;
    }

    // Getters and Setters
    public String getStudentID() { return studentID; }
    public void setStudentID(String studentID) { this.studentID = studentID; }

    public String getName() { return name; }
    public void setName(String name) { this.name = name; }

    public int getAge() { return age; }
    public void setAge(int age) { this.age = age; }

    public String getEmail() { return email; }
    public void setEmail(String email) { this.email = email; }
}