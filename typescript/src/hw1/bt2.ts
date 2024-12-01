// --- Bài 2: Kiểm tra giá trị null hoặc undefined ---
// Viết một hàm trả về một giá trị mặc định nếu giá trị đầu vào là null hoặc undefined.

// nullish coalescing operator

function checkedValue(value: string | number | undefined | null) {
    let defaultValue = 13;

    return value ?? defaultValue
}

const value = 22

console.log("check value null | undefined return defaultValue", checkedValue(value))