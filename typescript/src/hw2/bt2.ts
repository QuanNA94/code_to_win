// 2. Đếm giá trị hợp lệ trong mảng

// Bài tập:
// Cho một mảng chứa các giá trị hỗn hợp (null, undefined, số, chuỗi, object), 
// viết hàm đếm số lượng các giá trị hợp lệ (truthy values).


function countValidNumber(values: any[]) {
    const result = values.filter(value => Boolean(value)).length

    return result
}
const values = [0, 1, '', 'hello', null, undefined, {}, []];

console.log('countValidNumber :>> ', countValidNumber(values));