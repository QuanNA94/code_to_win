// --- Bài 1: Kiểm tra tính hợp lệ của một số ---
// Viết một hàm kiểm tra xem một số có nằm trong khoảng [10, 20] hay không.

function checkedNumber(num: number) {
    return (num >= 10 && num <= 20)
}

console.log("checkNumber", checkedNumber(9));
