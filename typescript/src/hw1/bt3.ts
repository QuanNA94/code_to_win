

// --- Bài 3: Kiểm tra đăng nhập ---
// Viết một hàm kiểm tra xem một người dùng có thể đăng nhập không dựa vào 2 điều kiện:
// Tên người dùng không được null hoặc rỗng.
// Mật khẩu phải dài ít nhất 6 ký tự.

// các lệnh return phải return về cùng 1 kiểu dữ liệu
// ưu tiên kiểm tra các giá trị không hợp lệ đầu tiên
// Rút gọn hàm

function validateUser(username: string | undefined | null, password: string) {
    const isValidValue = username === null || username === "" // isValidValue: ten bien = (toan tu/ phep gan) gia tri
    // isValidValue: statement
    // expression: username === null || username === "" - chua doan kiem tra trong do, 
    // nhan bat ky kieu du lieu nao bao gom value nguyen thuy, obj, array, declare func
    return isValidValue && password.length >= 6 ? "login success" : "login fail"
}

const username = null;
const password = "Kakalo";

console.log("check user logging: ", validateUser(username, password))
