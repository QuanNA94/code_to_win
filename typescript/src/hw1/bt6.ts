

// --- Bài 6: Tìm giá trị đầu tiên không rỗng ---
// Viết một hàm trả về giá trị đầu tiên không phải null hoặc undefined từ một danh sách các giá trị.


// dinh nghia kieu du lieu tra ve cua ham (number)
function getFirstNotNull(arr: any[]): number {
    if (!Array.isArray(arr)) throw Error("")

    // nen return ve bien, khong nen return ve thuc thi ham (function execution) - tot maintain, read code, debug
    const firstNotNull = arr.find(val => (val !== null && val !== undefined))
    if (firstNotNull === undefined) throw Error("")

    return firstNotNull
}

const abc = getFirstNotNull([]); // number
console.log('abc :>> ', abc);

console.log("getFirstNotNull", getFirstNotNull([null, 1, "haha"]))
console.log("getFirstNotUndefined", getFirstNotNull([undefined, 1, "haha"]))


function xyz(): void {
    console.log(xyz) // return void
}