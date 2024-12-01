// Bài 7: Kiểm tra quyền truy cập
// Cho một đối tượng người dùng với các quyền:
// Viết một hàm kiểm tra xem người dùng có full quyền truy cập hay không.

function hasAccess(user: { isAdmin: boolean, isEditor: boolean, isViewer: boolean }) {
    const { isAdmin, isEditor, isViewer } = user

    if (!user) return;

    if (!isAdmin) {
        if (isEditor && isViewer) {
            return true
        }
        return false
    }
}


console.log(hasAccess({ isAdmin: false, isEditor: true, isViewer: true })); // "Access granted"
console.log(hasAccess({ isAdmin: false, isEditor: false, isViewer: false })); // "Access denied"