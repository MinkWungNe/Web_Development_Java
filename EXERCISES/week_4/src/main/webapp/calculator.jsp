<%@ page language="java" contentType="text/html; charset=UTF-8" pageEncoding="UTF-8" isELIgnored="false" %>
<!DOCTYPE html>
<html>
<head>
    <title>Simple Calculator</title>
    <link rel="stylesheet" type="text/css" href="${pageContext.request.contextPath}/css/style.css">
</head>
<body>
    <%! 
    private float calculate(float num1, float num2, String operator) {
        switch (operator) {
            case "add":
                return num1 + num2;
            case "subtract":
                return num1 - num2;
            case "multiply":
                return num1 * num2;
            case "divide":
                if (num2 == 0) return 0;
                return num1 / num2;
            default:
                return 0;
        }
    }
    %>

    <!-- LẤY DỮ LIỆU -->
    <%
        request.setCharacterEncoding("UTF-8");
        
        String num1Str = request.getParameter("num1");
        String num2Str = request.getParameter("num2");
        String op = request.getParameter("operator");
        String resultStr = ""; // Chuỗi này dùng để in kết quả ra giao diện
        
        // Kiểm tra nếu form đã được submit chưa (các tham số không bị null)
        if (num1Str != null && num2Str != null && op != null) {
            try {
                float n1 = Float.parseFloat(num1Str);
                float n2 = Float.parseFloat(num2Str);
                
                // Xử lý riêng bẫy chia cho 0 để thông báo cho đẹp
                if ("divide".equals(op) && n2 == 0) {
                    resultStr = "Không thể chia cho số 0!";
                } else {
                    float res = calculate(n1, n2, op);
                    resultStr = "Kết quả: " + res;
                }
            } catch (NumberFormatException e) {
                resultStr = "Vui lòng nhập số hợp lệ!";
            }
        }
    %>

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
            <div class="header-wrapper">
                <div class="header">
                    <a class="back-button" href="index.jsp">&#8592</a>
                    <h1>Simple Calculator</h1>
                </div>
            </div>
            <form class="calculator" action="" method="POST">  <!-- để action="" là để khi bấm submit thì nó sẽ tự gửi dữ liệu cho chính nó -->
                <div class="calculator-item">
                    <span> Number a:</span>
                    <input type="number" step="any" name="num1" placeholder="Enter first number" value="<%= (num1Str != null) ? num1Str : "" %>" required>
                </div>
                
                <div class="calculator-item">
                    <span> Number a:</span>
                    <input type="number" step="any" name="num2" placeholder="Enter second number" value="<%= (num2Str != null) ? num2Str : "" %>" required>
                </div>

                <div class="calculator-item">
                    <span>Operator:</span>
                    <select name="operator">
                        <option value="add"      <%= "add".equals(op)      ? "selected" : "" %>    >Addition</option>
                        <option value="subtract" <%= "subtract".equals(op) ? "selected" : "" %>    >Subtraction</option>
                        <option value="multiply" <%= "multiply".equals(op) ? "selected" : "" %>    >Multiplication</option>
                        <option value="divide"   <%= "divide".equals(op)   ? "selected" : "" %>    >Division</option>
                        <!-- 
                            <%= "add".equals(op)      ? "selected" : "" %>
                            Nghĩa là:
                            - Kiểm tra xem "add" có bằng biến op lây từ trên [LẤY DỮ LIỆU] (bằng cách lấy lựa chọn từ danh sách option này)
                            - Nếu lượt trước khi bấm tính toán có chọn toán tử này thì sẽ gán 'selected' vào thẻ option để HTML render là đang chọn cái này.
                            - Nếu không phải thì để rỗng, HTML sẽ render lựa chọn đầu tiên (theo mặc định là vậy)
                        -->
                    </select>
                </div>

                <div class="calculator-button">
                    <button type="submit">Calculate</button>
                </div>
            </form>

            <% if (!resultStr.isEmpty()) { %>
                <h2 class="result"><%= resultStr %></h2>
            <% } %>
            
            <br>
            
        </div>
    </div>
</body>
</html>