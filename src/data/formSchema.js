export default {
    email: {
        label: "Email",
        type: "email",
        as: "input",
        rules: "email|required",
        isRequired: true
    },
    password: {
        label: "密碼",
        type: "password",
        as: "password",
        rules: value => {
            const pattern = /^(?=.*[0-9])(?=.*[a-zA-Z]).{8,}$/;
            return pattern.test(value) ? true : "必填欄位，密碼需至少 8 碼以上，並英數混合";
        },
        isRequired: true,
        help: "密碼需至少 8 碼以上，並英數混合"
    },
    userName: {
        label: "名字",
        type: "text",
        as: "input",
        rules: "required|max:10",
        isRequired: true
    },
    userImg: {
        label: "大頭照",
        type: "file",
        as: "input",
        rules: "image",
        isRequired: false
    },
    certificateLevel: {
        label: "潛水證照等級",
        type: "checkbox",
        as: "input",
        rules: "required",
        isRequired: true
    },
    isNitrox: {
        label: "擁有高氧證照",
        type: "radio",
        as: "input",
        rules: "required",
        isRequired: true
    },
    cylinderTotal: {
        label: "潛水支數",
        as: "select",
        rules: "",
        isRequired: false
    }
};
