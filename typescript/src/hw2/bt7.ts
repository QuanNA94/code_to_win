// 7. Tìm giá trị đầu tiên thỏa mãn điều kiện
// Bài tập:
// Viết hàm tìm giá trị đầu tiên trong mảng là số chẵn lớn hơn 10. Nếu không có, trả về null.

function findFirstValue(arr: number[]) {
    return arr.find(num => num % 2 === 0 && num > 10)

}

console.log("gia tri dau tien la so chan > 10: ", findFirstValue([11, 54, 63, 71]))