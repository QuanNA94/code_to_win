namespace bt1 {
    // --- Bài 2: Kiểm tra giá trị null hoặc undefined ---
    // Viết một hàm trả về một giá trị mặc định nếu giá trị đầu vào là null hoặc undefined.

    // nullish coalescing operator
    function isCheck(value: number | undefined | null, defaultValue: string) {

        return value ?? defaultValue ?? "abc"
        // [trả về] [giá trị đầu tiên khác null và undefined].

        // if (value !== null && value !== undefined) {
        //     return value
        // }
        // if (defaultValue !== null && defaultValue !== undefined) {
        //     return defaultValue
        // }
        // return "abc"

    }

    const value = 22
    const defaultValue = "haha";


    console.log("check value null | undefined return defaultValue", isCheck(value, defaultValue))
}
