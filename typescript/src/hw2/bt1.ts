// 1. Xử lý dữ liệu đa cấp trong object

// Bài tập:
// Cho một object chứa thông tin nested, 
// viết hàm lấy giá trị của targetKey nếu tất cả các cấp đều tồn tại.
// Nếu bất kỳ cấp nào không tồn tại, trả về giá trị mặc định.


type dataProps = {
    user: {
        profile: {
            settings: {
                theme: string
            }
        }
    }
}

const data = {
    user: {
        profile: {
            settings: {
                theme: 'dark',
            },
        },
    },
};

function getTargetValue(data: dataProps) {

    let defaultValue = 13

    if (data.user) {
        if (data.user.profile) {
            if (data.user.profile.settings) {
                if (data.user.profile.settings.theme) {
                    return data.user.profile.settings.theme
                }
            }
        }
    }

    return defaultValue
}



console.log("getTagetValue: ", getTargetValue(data));