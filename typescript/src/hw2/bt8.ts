// Gán giá trị mặc định theo điều kiện
// Bài tập:
// Viết hàm gán giá trị mặc định cho các thuộc tính còn thiếu trong một object.

function addMoreProperty(obj: {}, address: {}) {
    return { ...obj, ...address }
}

const obj = {
    name: "Quan",
    age: 30
}

const defaultValue = { adress: "B1 Truong Sa" }


console.log("gán giá trị mặc định cho các thuộc tính còn thiếu trong một object: ", addMoreProperty(obj, defaultValue))