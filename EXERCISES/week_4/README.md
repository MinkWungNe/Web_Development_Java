# Thông tin
- Đây là folder dự án Java Project - Maven Web Application
- Làm trên VSCode
- Chạy bằng server tomcat thông qua extension 'Community Server Connector'

## Cách setup để chạy
- Trên máy cần cài đặt `Apache Tomcat` và `Apache Maven`.
  + Cài đặt và giải nén `Apache Tomcat` --> Vào '..\apache-tomcat-9.0.118\conf\tomcat-users.xml' để cấu hình user. (Xem youtube).
  + Cài đặt và giải nén `Apache Maven` --> Cấu hình ..\apache-maven-3.9.16\bin' vào PATH.
- Trên VSCode cần cài đặt extension `Comminity Server Connector`.
  + Trên cửa sổ Explorer trong VSCode, mở mục 'SERVERS' 
  + Chuột phải vào Community Server Connector 
  + Chọn 'Create New Server' 
  + Chọn 'No, user server on disk'
  + Chọn đường dẫn tới folder `Apache Tomcat` 
  + Bấm 'Finish' 
  + Chuột phải vào cái server tomcat vừa tạo (trong mục SERVERS) 
  + Chọn 'Add Deployment' 
  + Chọn 'Exploded' 
  + Chọn thư mục '..\src\main\webapp' trong folder này. --> XONG
- Chuột phải vào server tomcat --> Bấm Start Server --> Mở trình duyệt vào `localhost:8080\webapp`.