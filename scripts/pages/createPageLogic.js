import {sendDataHandler} from "../handlers/sendDataHandler";

export function createPageLogic(){
    const sendData = document.getElementById('sendDates');
    sendData.addEventListener('submit', sendDataHandler);

    let ret = document.getElementById("ret");
    ret.addEventListener('click', goReturn);
}

function goReturn(){
    document.location.href = "/admin.html";
}
