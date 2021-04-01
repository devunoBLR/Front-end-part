import {doAuthRequest} from "../../logic/requests";

const validAuthForm = require("../../../scripts/logic/validators/authPageValidator");

export async function authHandler(data) {
    let status = await doAuthRequest(data);
    console.log(status);
    console.log('');
    if (status === 200) {
        document.location.href = "/admin.html";
    } else if (status === 401) {
        alert("Проверьте введенные данные");
    }
}

export async function authPageHandler(e) {
    e.preventDefault();
    e.stopImmediatePropagation();

    const authPageLogin = document.getElementById("login");
    const authPagePassword = document.getElementById("password");
    const data = {
        username: authPageLogin.value,
        password: authPagePassword.value,
    };
    const correctData = validAuthForm.checkValidationFromLoginForm(data);
    if (correctData === 0) {
        alert("Поля обязательны для заполнения");
    } else if (correctData === 1) {
        alert("Проверьте введенные данные, длина login от 3 до 20 символов. Буквы латинского алфавита и цифры");
    } else if (correctData === 2) {
        alert("Проверьте введенные данные, длина password от 3 до 20 символов. Буквы латинского алфавита и цифры");
    } else if (correctData === 3) {
        alert("Логин и пароль введены неверно");
    } else if (correctData === -1){
        await authHandler(data);
    }
}
