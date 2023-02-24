export default {
    email: {
        name: "email",
        label: "Email",
        type: "email",
        as: "input",
        rules: "email|required",
        isRequired: true
    },
    password: {
        name: "password",
        label: "密碼",
        type: "password",
        as: "password",
        rules: {
            required: "required",
            full: value => {
                const pattern = /^(?=.*[0-9])(?=.*[a-zA-Z]).{8,}$/;
                return pattern.test(value) ? true : "密碼為必填，至少 8 碼以上英數混合";
            }
        },
        isRequired: true,
        help: "密碼為 8 碼以上英數混合"
    },
    userName: {
        name: "userName",
        label: "名字",
        type: "text",
        as: "input",
        rules: "required|max:10",
        isRequired: true
    },
    uploadImg: {
        name: "uploadImg",
        label: "上傳照片",
        type: "file",
        as: "input",
        accept: "image/*",
        rules: {
            required: "required|image|size:1024",
            noRequired: "image|size:1024"
        },
        isRequired: true
    },
    certificateLevel: {
        name: "certificateLevel",
        label: "潛水證照等級",
        type: "checkbox",
        as: "input",
        rules: "required",
        isRequired: true
    },
    isNitrox: {
        name: "isNitrox",
        label: "擁有高氧證照",
        type: "radio",
        as: "input",
        rules: "required",
        isRequired: true,
        options: [0, 1]
    },
    cylinderTotal: {
        name: "cylinderTotal",
        label: "潛水支數",
        as: "select",
        rules: "",
        isRequired: false
    },
    activity: {
        title: {
            name: "title",
            label: "活動名稱",
            type: "text",
            as: "input",
            rules: "required|max:25",
            isRequired: true
        },
        features: {
            name: "features",
            label: "活動特點",
            as: "textarea",
            rules: "required",
            isRequired: true
        },
        content: {
            name: "content",
            label: "活動內容",
            as: "textarea",
            rules: "required",
            isRequired: true
        },
        startDate: {
            name: "startDate",
            label: "出發日期",
            type: "date",
            as: "input",
            rules: "required|confirmedStartDate:@結束日期",
            isRequired: true
        },
        endDate: {
            name: "endDate",
            label: "結束日期",
            type: "date",
            as: "input",
            rules: "required|confirmedEndDate:@出發日期",
            isRequired: true
        },
        orderExpiryDate: {
            name: "orderExpiryDate",
            label: "報名截止日期",
            type: "date",
            as: "input",
            rules: value => {
                console.log(value)
                // 需小於出發、結束日期
                const pattern = /^(?=.*[0-9])(?=.*[a-zA-Z]).{8,}$/;
                return pattern.test(value) ? true : "報名截止日期不能比出發、結束日期晚";
            },
            isRequired: true,
            help: "需比出發日期"
        },
        locationId: {
            name: "location",
            label: "活動地點",
            as: "select",
            rules: "required",
            isRequired: true
        },
        maxOrderTotal: {
            name: "maxOrderTotal",
            label: "報名人數上限",
            type: "number",
            as: "input",
            rules: "required|integer|between: [1, 100]",
            isRequired: true
        },
        cost: {
            name: "cost",
            label: "每人費用(NT$)",
            type: "number",
            as: "input",
            rules: "required|integer|between: [1, 100]",
            isRequired: true
        },
        certificateLevel: {
            name: "certificateLevel",
            label: "潛水證照等級",
            as: "select",
            rules: "required",
            isRequired: true
        },
        tags: {
            name: "tags",
            label: "標籤(最多 5 個)",
            type: "checkbox",
            as: "input",
            rules: "",
            isRequired: false
        },
    }
    
};
