// 3. Kiểm tra mảng chứa ít nhất một phần tử thỏa mãn điều kiện
// Bài tập:
// Viết hàm kiểm tra xem trong một mảng các số 
// có ít nhất một số là số nguyên tố không.

function isPrime(num: number) {

    let flag = true

    if (num < 2) {
        return flag = false

    } else if (num == 2) {
        return flag = true;
    }

    else if (num % 2 == 0) {
        return flag = false;
    }

    else {
        // lặp từ 3 tới n-1 với bước nhảy là 2 (i+=2)
        for (let i = 3; i < Math.sqrt(num); i += 2) {
            if (num % i == 0) {
                return flag = false;
            }
        }
    }

    return true
}

function checkAtLeastOne(primeNumbers: number[]) {
    const filterNumber = primeNumbers.some(isPrime)

    return filterNumber
}


console.log("kiem tra it nhat 1 so nguyen to", checkAtLeastOne([2, 3, 10, 12, 13, 15, 20]))
console.log("kiem tra it nhat 1 so nguyen to", checkAtLeastOne([4, 6, 12, 15, 20])) 
