CREATE DATABASE IF NOT EXISTS student_db ;
USE student_db;

DROP TABLE IF EXISTS students;

CREATE TABLE IF NOT EXISTS students (
    studentID VARCHAR(20) NOT NULL PRIMARY KEY,
    name VARCHAR(100) NOT NULL,
    age INT,
    email VARCHAR(100)
);

INSERT INTO  students (studentID, name, age, email) VALUES 
('SV001', 'Nguyen Van A', 20, 'anguyen@gmail.com'),
('SV002', 'Tran Thi B', 21, 'btran@gmail.com'),
('SV003', 'Nguyen Thi C', 21, 'thanh@gmail.com'),
('SV004', 'Tran Van D', 22, 'trvu@gmail.com');