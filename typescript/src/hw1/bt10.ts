// Bài 10: Điều kiện lồng ghép
// Viết một hàm kiểm tra tính hợp lệ của một đối tượng với các điều kiện phức tạp:
// Có name không rỗng.
// Có age từ 18 đến 60.
// Là admin hoặc editor.

function validateProfileUser(userProfile: { name: string, age: number, role: string }) {

    const { name, age, role } = userProfile

    if (name.trim() === "") {
        return "Name cannot null"
    }

    if (age < 18 || age > 60) {
        return "Having age from 18 to 60"
    }
    if (role !== "admin" && role !== "editor") {
        return "role must be admin or editor";
    }

    return "valid user"
}


console.log("case 1: ", validateProfileUser({ name: "Quan", age: 17, role: "admin" }))
console.log("case 2: ", validateProfileUser({ name: " ", age: 30, role: "viewer" }))
console.log("case 3: ", validateProfileUser({ name: "Quan", age: 30, role: "editor" }))
