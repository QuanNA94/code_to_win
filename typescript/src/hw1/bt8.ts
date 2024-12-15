// Bài 8: Toán tử lồng nhau
// Viết một hàm kiểm tra xem một số có thỏa mãn các điều kiện sau:
// Lớn hơn 0 và là số lẻ.
// Hoặc là bội số của 10.

function validateNumber(num: number) : boolean {

    const isPositiveAndOdd  = (num > 0 && num % 2 !== 0) 
    const isMultipleOfTen = num % 10 === 0;

    const isValid = isPositiveAndOdd || isMultipleOfTen

    return isValid;
}

console.log("check number satisfy conditions:", validateNumber(12))