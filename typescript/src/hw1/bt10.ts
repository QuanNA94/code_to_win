// Bài 10: Điều kiện lồng ghép
// Viết một hàm kiểm tra tính hợp lệ của một đối tượng với các điều kiện phức tạp:
// Có name không rỗng.
// Có age từ 18 đến 60.
// Là admin hoặc editor.

function validateProfileUser(userProfile: { name: string, age: number, role: string }) : string {

    const { name, age, role } = userProfile

    const isValidName = name.trim() !== "";
    const isValidAge = age >= 18 && age <= 60
    const isValidRole = role === "admin" || role === "editor"


    if (!isValidName) {
        return "Name cannot null";
    }

    if (!isValidAge) {
        return "Having age from 18 to 60";
    }

    if (!isValidRole) {
        return "role must be admin or editor";
    }

    return "valid user";
}


console.log("case 1: ", validateProfileUser({ name: "Quan", age: 17, role: "admin" }))
console.log("case 2: ", validateProfileUser({ name: " ", age: 30, role: "viewer" }))
console.log("case 3: ", validateProfileUser({ name: "Quan", age: 30, role: "editor" }))
