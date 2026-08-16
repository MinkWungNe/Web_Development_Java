# BÀI TẬP QUẢN LÝ SINH VIÊN (JSP - SERVLET - JDBC)

## Hướng dẫn cấu hình và chạy dự án
- Bài tập này làm trên VSCode.
- Dùng extension 'Community Server Connector' để chạy server tomcat.

### 1. Cấu hình Database (MySQL)
- Bước 1: Mở MySQL Workbench hoặc một công cụ quản lý MySQL bất kỳ.
- Bước 2: Import (chạy) file `DatabaseScript.sql` đính kèm trong thư mục gốc của dự án để tự động tạo Database và dữ liệu mẫu.

### 2. Cấu hình Source Code
- Nếu Port hoặc Password của MySQL trên máy thầy khác với mặc định, vui lòng cập nhật lại thông tin cấu hình tại file:
  `src/main/java/com/student/connection/DBConnection.java`
  
  ```java
  private static final String URL = "jdbc:mysql://localhost:3306/student_db";
  private static final String USER = "root";
  private static final String PASSWORD = "điền_password_của_thầy_cô";
  ```

### 3. Deploy lên server tomcat
- Cấu hình server tomcat: 
  + Trong cửa sổ `EXPLORER`, mở mục `SERVERS`, chuột phải `Create New Server`.
  + Dẫn tới đường dẫn chứa folder apache-tomcat đã cài trên máy và xác nhận.
  + Cứ để cài đặt mặc định và bấm Finish.
  + Chuột phải vào server mới tạo chọn `Add Deployment`.
  + Chọn `File`.
  + Dẫn tới thư mục `target` và chọn file có đuôi .war và xác nhận.
  + Chuột phải vào server chọn `Publish Server (Full)`.

- Truy cập vào trang:
  + Chuột phải vào server chọn `Start Server`.
  + Truy cập localhost/week_5/