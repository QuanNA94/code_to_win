// Rút gọn hàm chỉ dùng && và || (không dùng if else, không dùng toán tử 3 ngôi) 

// Bài 9: Tính giá trị dựa trên nhiều điều kiện
// Viết một hàm kiểm tra trạng thái đơn hàng:
// Nếu isPaid là true và isDelivered là true, trả về "Order complete".
// Nếu chỉ isPaid là true, trả về "Pending delivery".
// Nếu không, trả về "Pending payment".

function checkedOrderStatus(isPaid: boolean, isDelivered: boolean) : string {

    const status =  (isPaid && isDelivered) && "Oder complete" || isPaid && "Pending delivery" || "Pending payment"

    return status;
}

console.log(checkedOrderStatus(true, true));
console.log(checkedOrderStatus(true, false));
console.log(checkedOrderStatus(false, false));