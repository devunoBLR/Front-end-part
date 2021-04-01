import {returnPage} from '../handlers/authPage/returnPage';
import {authPageHandler} from '../handlers/authPage/authPageHandler';

export function authPageLogic() {
    console.log("authPageLogic");
    const closeButton = document.getElementById("returnButton");
    closeButton.addEventListener('click', returnPage);

    const loginButton = document.getElementById("formAuth");
    loginButton.addEventListener("submit", authPageHandler);
}