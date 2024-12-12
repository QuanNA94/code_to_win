
// Rút gọn(gợi ý: chỉ dùng && ||, không dùng ternary operator)

// --- Bài 4: Kiểm tra nhiều điều kiện ---
// Viết một hàm kiểm tra xem một số có là số chẵn hoặc nằm trong khoảng [50, 100] hay không.
namespace br4 {
    function kiemTraSoChan(num: number) {
        return num % 2 === 0 || (num >= 50 && num <= 100)
    }

    console.log("kiem tra so chan: ", kiemTraSoChan(10))
}