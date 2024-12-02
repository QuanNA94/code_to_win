// 6. Điều kiện phụ thuộc giữa các thuộc tính
// Bài tập:
// Viết hàm kiểm tra xem một đối tượng có hợp lệ hay không với các quy tắc sau:

// Nếu isPremium là true, thì membershipId không được rỗng.
// Nếu isPremium là false, thì không cần kiểm tra membershipId.

function checkValidObject(isPremium: boolean) {
    const membershipId = "123"
    return (isPremium) ? membershipId.length > 0 : true

}

console.log("check valid object: ", checkValidObject(true))
console.log("check valid object: ", checkValidObject(false))
