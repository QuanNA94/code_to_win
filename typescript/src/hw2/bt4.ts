// 4. Kiểm tra tất cả các giá trị trong mảng thỏa mãn điều kiện
// Bài tập:
// Viết hàm kiểm tra xem tất cả các giá trị trong mảng đều là số chẵn hay không.

function kiemTraSoChan(arr: number[]) {
    return arr.every(num => num % 2 === 0)
}

console.log("kiem tra tat ca gia tri trong mang deu la so chan: ", kiemTraSoChan([2, 4, 6, 8]))
console.log("kiem tra tat ca gia tri trong mang deu la so chan: ", kiemTraSoChan([2, 3, 6, 8]))
