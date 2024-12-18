
# 1. Cấu trúc dữ liệu và giải thuật

# 2. Hyper Text Markup Language (HTML)
- **Ngôn ngữ định dạng đánh dấu siêu văn bản**.
- Không phải là ngôn ngữ lập trình.

# 3. Ngôn ngữ lập trình (Programming Languages)
- **Các ngôn ngữ phổ biến**: JavaScript, Java, Python, C, C#, C++, TypeScript, Flutter.

# 4. Library
- **ReactJS**.

# 5. Framework
- **.NET**: Framework được xây dựng từ C#.
- **NestJS**: Framework được xây dựng từ JavaScript.
- **NextJS**: Framework được xây dựng từ JavaScript.

# 6. `package.json`
- Quản lý file, môi trường dựa trên **NodeJS**.
- **Lưu ý**: Dự án cần **NodeJS** để chạy.

# 7. NodeJS là gì? (All-in-One)
- **Nền tảng** (platform) và **môi trường** (environment) chạy **run-time** cho JavaScript.
- Biên dịch (compile) JavaScript thành mã máy (machine code).

# 8. npm là gì? (Node Package Manager)
- Công cụ để tạo và quản lý (cài đặt, xóa, ...) các thư viện NodeJS.
- **npm registry**:
  - Tìm kiếm và tải thư viện (ví dụ: React) từ registry về thư mục `node_modules`.
  - Nếu không tìm thấy, sẽ báo lỗi.

# 9. npx là gì?
- **npx**: Công cụ thực thi các lệnh trực tiếp mà không cần cài đặt toàn cục.
- Ví dụ:
  - `npm i -g create-react-app`: Gửi request và cài đặt **local**.
  - `npx create-react-app`: Gửi request lên **npm registry**, thực thi trực tiếp mà không cần cài cục bộ.

# 10. Không được commit `node_modules`
- Thư mục này cần được **refresh liên tục** mỗi lần chạy dự án.

# 11. `package-lock.json`
- Ghi nhận các version và dependency của tất cả các package được cài trong `node_modules`.
- Khi chạy `npm install`:
  - Nếu có `package-lock.json`: Dựa vào file này để cài đặt chính xác version.
  - Nếu không có: Hệ thống sẽ tự sinh ra file này sau khi cài đặt.

---

## Một số lưu ý lập trình:
- Các lệnh `return` phải trả về cùng một kiểu dữ liệu.
- **Ưu tiên kiểm tra giá trị không hợp lệ đầu tiên**.
- Rút gọn hàm khi có thể.
- **Tên hàm nên bắt đầu bằng động từ**.

### Nullish Coalescing Operator (`??`)
- **Toán tử hai ngôi**: Trả về giá trị đầu tiên khác `null` hoặc `undefined`.
- Ví dụ:  
  ```javascript
  const username = null;
  const displayName = username ?? "Guest"; // Trả về "Guest"

- <mark>return</mark>: tra ve gia tri & cung la lenh ket thuc ham

- const: kieu khai bao bien || scope khai bao.

 const isValidValue = username === null || username === "" // isValidValue: ten bien = (toan tu/ phep gan) gia tri
    // isValidValue: statemen

- priority implement: && > || 

- return; -> return undefined
- 1 ham k return -> return undefined 

