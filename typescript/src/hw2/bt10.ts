// 10. Xử lý tập hợp phức tạp
// Bài tập:
// Cho một tập hợp các đối tượng user, viết hàm trả về danh sách người dùng hợp lệ với các điều kiện:

// Có age lớn hơn hoặc bằng 18.
// Có email chứa ký tự @.

type UserProps = {
    name: string,
    age: number,
    email: string
}

function getValidateUser(userProfile: UserProps[]) {

    return userProfile.filter(user => user.age >= 18 && user.email.includes("@"))

}

const userProfile = [
    {
        name: "Quan Nguyen",
        age: 30,
        email: "quannguyen@gmail.com"
    },
    {
        name: "Lan Pham",
        age: 25,
        email: "lanphamgmail.com"
    },
    {
        name: "Minh Tran",
        age: 12,
        email: "minhtran@gmail.com"
    }
];

console.log("hàm trả về danh sách người dùng hợp lệ: ", getValidateUser(userProfile))