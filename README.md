# Web Development with Java

This repository contains coursework, weekly exercises, and laboratory assignments for the Java Web Development course at Hung Vuong University (DHV). The curriculum spans frontend foundational technologies (HTML5, CSS3, JavaScript) to full-stack Java web application development using Jakarta EE/Java EE standards, Java Servlets, JSP (JavaServer Pages), JDBC, and MySQL.

---

## Table of Contents

- [Overview](#overview)
- [Repository Structure](#repository-structure)
- [Modules and Weekly Curriculum](#modules-and-weekly-curriculum)
  - [Frontend Development (Weeks 1 to 3)](#frontend-development-weeks-1-to-3)
  - [Java Web and Servlet/JSP (Weeks 4 and 5)](#java-web-and-servletjsp-weeks-4-and-5)
  - [Laboratory Projects](#laboratory-projects)
- [Technologies and Tools](#technologies-and-tools)
- [Prerequisites](#prerequisites)
- [Environment Setup and Configuration](#environment-setup-and-configuration)
  - [1. Database Configuration (Week 5)](#1-database-configuration-week-5)
  - [2. Database Connection Credentials](#2-database-connection-credentials)
  - [3. Apache Tomcat Deployment](#3-apache-tomcat-deployment)
- [Related Projects](#related-projects)
- [License](#license)

---

## Overview

The repository provides a structured progression from static web page design to dynamic, database-driven Java web applications. It serves as a practical reference for:
- Semantic HTML and responsive CSS design without external UI frameworks.
- Client-side DOM manipulation, interactive animations, and form validation using vanilla JavaScript.
- Dynamic web generation with JavaServer Pages (JSP) and expression language.
- MVC (Model-View-Controller) architectural pattern implementation using Java Servlets.
- Relational database connectivity and CRUD operations through Java Database Connectivity (JDBC) and MySQL.

---

## Repository Structure

`
Web_Development_Java/
├── EXERCISES/
│   ├── week_1/
│   │   └── RegistrationForm.html
│   ├── week_2/
│   │   ├── schoolPage.html
│   │   └── assets/
│   │       ├── css/
│   │       ├── font/
│   │       └── image/
│   ├── week_3/
│   │   ├── bt_1/
│   │   │   ├── equation.html
│   │   │   ├── calc.js
│   │   │   └── styles.css
│   │   └── bt_2/
│   │       ├── schoolPage2.html
│   │       └── assets/
│   ├── week_4/
│   │   ├── pom.xml
│   │   ├── README.md
│   │   └── src/main/webapp/
│   │       ├── calculator.jsp
│   │       ├── change_color.jsp
│   │       ├── GetDataForm.jsp
│   │       ├── index.jsp
│   │       └── WEB-INF/web.xml
│   └── week_5/
│       ├── pom.xml
│       ├── README.md
│       ├── DatabaseScript.sql
│       └── src/main/
│           ├── java/com/
│           │   ├── connection/DBConnection.java
│           │   ├── controller/StudentServlet.java
│           │   ├── dao/StudentDAO.java
│           │   └── model/Student.java
│           └── webapp/
│               ├── student-form.jsp
│               ├── student-list.jsp
│               └── WEB-INF/web.xml
└── LABS/
    ├── README.md
    └── dhv_web_java1/
        ├── pom.xml
        └── src/main/webapp/
            ├── index.jsp
            └── WEB-INF/web.xml
`

---

## Modules and Weekly Curriculum

### Frontend Development (Weeks 1 to 3)

- **Week 1: HTML5 Forms and Structure**
  - Path: EXERCISES/week_1/
  - Focus: Semantic HTML markup, form controls, input attributes, and accessibility basics.
  - Deliverable: Student registration form (RegistrationForm.html).

- **Week 2: Advanced CSS Layouts and Web Typography**
  - Path: EXERCISES/week_2/
  - Focus: Multi-section university portal landing page, modular CSS stylesheets (_header.css, _footer.css, section_*.css), flexbox/grid layouts, and custom web fonts (Montserrat, Unbounded).
  - Deliverable: University home page clone (schoolPage.html).

- **Week 3: JavaScript Programming and Dynamic UI**
  - Path: EXERCISES/week_3/
  - Exercises:
    - **Exercise 1 (t_1/)**: Quadratic equation solver (equation.html, calc.js) demonstrating form handling, math logic, and DOM manipulation.
    - **Exercise 2 (t_2/)**: Interactive university landing page (schoolPage2.html) equipped with client-side features:
      - Count-up metric counters (count_up_effect.js)
      - Scroll-reveal animations (scroll_reveal_effect.js)
      - Dynamic banner slider and carousels (slider.js)
      - Responsive UI transitions (UI_Effect.js)

---

### Java Web and Servlet/JSP (Weeks 4 and 5)

- **Week 4: Maven Web Application and JSP Basics**
  - Path: EXERCISES/week_4/
  - Focus: Apache Maven build tool integration, Java EE web application structure, and JSP development.
  - Key Components:
    - calculator.jsp: Server-side arithmetic processing.
    - change_color.jsp: Dynamic styling via request parameters.
    - GetDataForm.jsp: Handling and displaying HTTP form submissions.
    - index.jsp: Navigation entry point.

- **Week 5: MVC Student Management System (Servlet, JSP, JDBC, MySQL)**
  - Path: EXERCISES/week_5/
  - Focus: Full-stack CRUD web application utilizing the Model-View-Controller (MVC) architectural pattern and DAO (Data Access Object) design pattern.
  - Key Components:
    - DatabaseScript.sql: MySQL database schema definition and sample data population.
    - com.model.Student: Data transfer and entity model.
    - com.dao.StudentDAO: Data access layer executing prepared SQL statements for CRUD actions.
    - com.connection.DBConnection: Centralized JDBC connection management.
    - com.controller.StudentServlet: Front controller routing requests (/, /new, /insert, /edit, /update, /delete).
    - student-list.jsp & student-form.jsp: User interface views for presenting and managing student records.

---

### Laboratory Projects

- **Path**: LABS/
- **Lab 1 (LABS/dhv_web_java1)**: Standard Maven archetype web application configured with Java 21, Servlet API 4.0.1, JSP API 2.3.3, JUnit 5, and the Tomcat 7 Maven plugin for rapid local deployment.

---

## Technologies and Tools

- **Languages & Frameworks**: Java 17 / Java 21, HTML5, CSS3, JavaScript (ES6+), JSP, Java Servlets (Java EE / Jakarta EE).
- **Database**: MySQL 8.x, JDBC (MySQL Connector/J 8.0.33).
- **Build & Dependency Management**: Apache Maven 3.x.
- **Application Server**: Apache Tomcat 9.x.
- **Development Environment**: Visual Studio Code / IntelliJ IDEA / Eclipse.
- **IDE Extensions**: Community Server Connector (for Tomcat management within VS Code).

---

## Prerequisites

Ensure the following tools are installed and configured on your workstation:
1. **Java Development Kit (JDK)**: JDK 17 or JDK 21. Verify with:
   `ash
   java -version
   `
2. **Apache Maven**: Version 3.8 or newer. Verify with:
   `ash
   mvn -version
   `
3. **Apache Tomcat**: Version 9.0.x (standalone or integrated via IDE plugin).
4. **MySQL Server & MySQL Workbench**: Version 8.0.x.

---

## Environment Setup and Configuration

### 1. Database Configuration (Week 5)

1. Start your local MySQL service.
2. Open MySQL Workbench (or your preferred database client) and execute the setup script:
   `sql
   -- Located at EXERCISES/week_5/DatabaseScript.sql
   CREATE DATABASE IF NOT EXISTS student_db;
   USE student_db;

   CREATE TABLE IF NOT EXISTS students (
       studentID VARCHAR(20) NOT NULL PRIMARY KEY,
       name VARCHAR(100) NOT NULL,
       age INT,
       email VARCHAR(100)
   );
   `

### 2. Database Connection Credentials

Update your database credentials in EXERCISES/week_5/src/main/java/com/connection/DBConnection.java:
`java
private static final String URL = "jdbc:mysql://localhost:3306/student_db";
private static final String USER = "root";
private static final String PASSWORD = "your_mysql_password";
`

### 3. Apache Tomcat Deployment

#### Option A: Building and Deploying WAR file via IDE / Community Server Connector
1. Open the project in Visual Studio Code.
2. Navigate to the module directory (e.g., EXERCISES/week_5):
   `ash
   cd EXERCISES/week_5
   mvn clean package
   `
3. In VS Code, open the **Servers** panel under the Explorer view.
4. Add or select your Apache Tomcat 9 instance.
5. Right-click the server and choose **Add Deployment** -> **File** -> Select 	arget/week_5.war.
6. Right-click the server and select **Publish Server (Full)**, then **Start Server**.
7. Access the application in your browser at:
   `
   http://localhost:8080/week_5/
   `

#### Option B: Running with Tomcat Maven Plugin (Lab Modules)
For lab modules configured with the Tomcat Maven plugin (such as LABS/dhv_web_java1):
`ash
cd LABS/dhv_web_java1
mvn tomcat7:run
`
Access the application at http://localhost:8080/.

---

## Related Projects

- **Course Group Project**: [HuynhVanChi/lib-manager-web](https://github.com/HuynhVanChi/lib-manager-web)
  A comprehensive Library Management Web Application developed collaboratively as the final group project for this course.

---

## License

This repository is maintained for educational purposes as part of the Web Development curriculum at Van Hien University (DHV).
