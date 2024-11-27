"use strict";
const num = 8;
// --- Bài 1: Kiểm tra tính hợp lệ của một số ---
// Viết một hàm kiểm tra xem một số có nằm trong khoảng [10, 20] hay không.
function checkedNumber(num) {
    return (num >= 10 && num <= 20) ? true : false;
}
console.log("checkNumber", checkedNumber(num));
// --- Bài 2: Kiểm tra giá trị null hoặc undefined ---
// Viết một hàm trả về một giá trị mặc định nếu giá trị đầu vào là null hoặc undefined.
function checkedValue(value) {
    let dafaultValue = 13;
    return value === null || value === undefined ? dafaultValue : value;
}
const value = undefined;
console.log("check value null | undefined return defaultValue", checkedValue(value));
// --- Bài 3: Kiểm tra đăng nhập ---
// Viết một hàm kiểm tra xem một người dùng có thể đăng nhập không dựa vào 2 điều kiện:
// Tên người dùng không được null hoặc rỗng.
// Mật khẩu phải dài ít nhất 6 ký tự.
function validateUser(username, password) {
    if (!username)
        return;
    if (username !== null && username.trim() !== "") {
        if (password.length >= 6) {
            return "logging success";
        }
    }
    return "logging fail";
}
const username = "quan";
const password = "Kakalos";
console.log("check user logging: ", validateUser(username, password));
// --- Bài 4: Kiểm tra nhiều điều kiện ---
// Viết một hàm kiểm tra xem một số có là số chẵn hoặc nằm trong khoảng [50, 100] hay không.
function kiemTraSoChan(num) {
    return num % 2 === 0 || (num >= 50 && num <= 100) ? true : false;
}
console.log("kiem tra so chan: ", kiemTraSoChan(num));
// --- Bài 5: Gán giá trị với toán tử && ---
// Viết một hàm lấy giá trị cuối cùng nếu tất cả các điều kiện đều đúng.
function allTrue(condition1, condition2, condition3) {
    return condition1 && condition2 && condition3;
}
console.log("allTrue", allTrue(true, true, true));
console.log("allTrue", allTrue(true, false, true));
// --- Bài 6: Tìm giá trị đầu tiên không rỗng ---
// Viết một hàm trả về giá trị đầu tiên không phải null hoặc undefined từ một danh sách các giá trị.
function getFirstNotNull(arr) {
    if (!Array.isArray(arr))
        return;
    return arr.find(val => (val !== null && val !== undefined));
}
console.log("getFirstNotNull", getFirstNotNull([null, 1, "haha"]));
console.log("getFirstNotUndefined", getFirstNotNull([undefined, 1, "haha"]));
// Bài 7: Kiểm tra quyền truy cập
// Cho một đối tượng người dùng với các quyền:
// Viết một hàm kiểm tra xem người dùng có full quyền truy cập hay không.
function hasAccess(user) {
    const { isAdmin, isEditor, isViewer } = user;
    if (!user)
        return;
    if (!isAdmin) {
        if (isEditor && isViewer) {
            return true;
        }
        return false;
    }
}
const user = { isAdmin: false, isEditor: true, isViewer: true };
console.log(hasAccess(user)); // "Access granted"
console.log(hasAccess({ isAdmin: false, isEditor: false, isViewer: false })); // "Access denied"
// Bài 8: Toán tử lồng nhau
// Viết một hàm kiểm tra xem một số có thỏa mãn các điều kiện sau:
// Lớn hơn 0 và là số lẻ.
// Hoặc là bội số của 10.
function validateNumber(num) {
    return (num > 0 && num % 2 !== 0) || num % 10 === 0;
}
console.log("check number satisfy conditions:", validateNumber(num));
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
