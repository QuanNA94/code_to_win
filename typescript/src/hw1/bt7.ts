// Bài 7: Kiểm tra quyền truy cập
// Cho một đối tượng người dùng với các quyền:
// Viết một hàm kiểm tra xem người dùng có full quyền truy cập hay không.

function hasAccess(user: { isAdmin: boolean, isEditor: boolean, isViewer: boolean }): string {
    if (!user) {
        return "Access denied";
    }

    const { isAdmin, isEditor, isViewer } = user;
    const hasPermission = isAdmin || (isEditor && isViewer) ? "Access granted" : "Access denied";

    return hasPermission;
}


console.log(hasAccess({ isAdmin: false, isEditor: true, isViewer: true })); // "Access granted"
console.log(hasAccess({ isAdmin: false, isEditor: false, isViewer: false })); // "Access denied"