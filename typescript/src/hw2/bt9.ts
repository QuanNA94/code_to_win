// 9. Cấu trúc điều kiện lồng ghép phức tạp
// Bài tập:
// Viết hàm xác định trạng thái của một đơn hàng:

// Nếu trạng thái là cancelled, trả về "Order Cancelled".
// Nếu trạng thái là shipped, trả về "Order Shipped".
// Nếu trạng thái là processing, trả về "Order Processing".
// Nếu không có trạng thái, trả về "Unknown Status".

function checkOrderStatus(status: string) {
    let result = ""
    switch (status) {
        case "cancelled": {
            result = "Order Cancelled"
            break
        }
        case "shipped": {
            result = "Order Shipped"
            break
        }
        case "processing": {
            result = "Order Processing"
            break
        }
        default: {
            result = "Unknown Status"
        }
    }
    return result

}

console.log("xác định trạng thái của một đơn hàng: ", checkOrderStatus("cancelled"))
console.log("xác định trạng thái của một đơn hàng: ", checkOrderStatus("shipped"))
console.log("xác định trạng thái của một đơn hàng: ", checkOrderStatus("processing"))
console.log("xác định trạng thái của một đơn hàng: ", checkOrderStatus(""))

