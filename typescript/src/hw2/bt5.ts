// 5. Chuỗi điều kiện phức tạp trong form validation
// Bài tập:
// Viết hàm validate thông tin đăng ký với các điều kiện sau:

// Email không được rỗng và phải chứa ký tự @.
// Mật khẩu phải có độ dài ít nhất 8 ký tự.
// Nếu có trường age, giá trị phải lớn hơn hoặc bằng 18.

function validateRegisterInfo(username: string, password: string, age: number) {
    const isValid = username.trim().includes("@")
    const verifyPass = password.length <= 8
    const verifyAge = age >= 18

    return isValid && verifyPass && verifyAge
}

console.log("validate Register Info: ", validateRegisterInfo("quan@123", "quanna12", 20))
console.log("validate Register Info: ", validateRegisterInfo(" quan@123 ", "quanna12", 20))
console.log("validate Register Info: ", validateRegisterInfo("quan123", "quanna12", 20))
console.log("validate Register Info: ", validateRegisterInfo("quan@123", "quanna12", 18))


