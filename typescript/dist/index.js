"use strict";
// --- Bài 1: Kiểm tra tính hợp lệ của một số ---
// Viết một hàm kiểm tra xem một số có nằm trong khoảng [10, 20] hay không.
function checkNumber(num) {
    if (10 <= num && num <= 20) {
        return true;
    }
    return false;
}
const num = 21;
console.log(checkNumber(num));
// --- Bài 2: Kiểm tra giá trị null hoặc undefined ---
// Viết một hàm trả về một giá trị mặc định nếu giá trị đầu vào là null hoặc undefined.
// --- Bài 3: Kiểm tra đăng nhập ---
// Viết một hàm kiểm tra xem một người dùng có thể đăng nhập không dựa vào 2 điều kiện:
// Tên người dùng không được null hoặc rỗng.
// Mật khẩu phải dài ít nhất 6 ký tự.
// --- Bài 4: Kiểm tra nhiều điều kiện ---
// Viết một hàm kiểm tra xem một số có là số chẵn hoặc nằm trong khoảng [50, 100] hay không.
// --- Bài 5: Gán giá trị với toán tử && ---
// Viết một hàm lấy giá trị cuối cùng nếu tất cả các điều kiện đều đúng.
// --- Bài 6: Tìm giá trị đầu tiên không rỗng ---
// Viết một hàm trả về giá trị đầu tiên không phải null hoặc undefined từ một danh sách các giá trị.
// Bài 7: Kiểm tra quyền truy cập
// Cho một đối tượng người dùng với các quyền:
// Bài 8: Toán tử lồng nhau
// Viết một hàm kiểm tra xem một số có thỏa mãn các điều kiện sau:
// Lớn hơn 0 và là số lẻ.
// Hoặc là bội số của 10.
// Bài 9: Tính giá trị dựa trên nhiều điều kiện
// Viết một hàm kiểm tra trạng thái đơn hàng:
// Nếu isPaid là true và isDelivered là true, trả về "Order complete".
// Nếu chỉ isPaid là true, trả về "Pending delivery".
// Nếu không, trả về "Pending payment".
// Bài 10: Điều kiện lồng ghép
// Viết một hàm kiểm tra tính hợp lệ của một đối tượng với các điều kiện phức tạp:
// Có name không rỗng.
// Có age từ 18 đến 60.
// Là admin hoặc editor.
