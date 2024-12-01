
// --- Bài 5: Gán giá trị với toán tử && ---
// Viết một hàm lấy giá trị cuối cùng nếu tất cả các điều kiện đều đúng.

function allTrue(condition1: boolean, condition2: boolean, condition3: boolean) {
    return condition1 && condition2 && condition3
}

console.log("allTrue", allTrue(true, true, true))
console.log("allTrue", allTrue(true, false, true))