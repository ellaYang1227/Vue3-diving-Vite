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
        rules: value => {
            const pattern = /^(?=.*[0-9])(?=.*[a-zA-Z]).{8,}$/;
            return pattern.test(value) ? true : "密碼為必填，至少 8 碼以上英數混合";
        },
        isRequired: true,
        help: "密碼至少 8 碼以上英數混合"
    },
    userName: {
        name: "userName",
        label: "名字",
        type: "text",
        as: "input",
        rules: "required|max:10",
        isRequired: true
    },
    userImg: {
        name: "userImg",
        label: "大頭照",
        type: "file",
        as: "input",
        rules: "image",
        isRequired: false
    },
    uploadImg: {
        name: "uploadImg",
        label: "上傳照片",
        type: "file",
        as: "input",
        accept: "image/*",
        rules: "required|image|size:1024",
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
    }
};
