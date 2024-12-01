

// --- Bài 6: Tìm giá trị đầu tiên không rỗng ---
// Viết một hàm trả về giá trị đầu tiên không phải null hoặc undefined từ một danh sách các giá trị.

function getFirstNotNull(arr: any[]) {
    if (!Array.isArray(arr)) return;

    return arr.find(val => (val !== null && val !== undefined))
}

console.log("getFirstNotNull", getFirstNotNull([null, 1, "haha"]))
console.log("getFirstNotUndefined", getFirstNotNull([undefined, 1, "haha"]))