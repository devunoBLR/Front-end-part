import {catalogDeleteButton} from "../handlers/deleteHandler";
import {getListHandlerToDelete} from "../handlers/catalog/deleteListHandler";
import {goBack} from "../handlers/adminPage/goBackFromCatalog/goBack";

export  function deleteNote(){

    const list = document.getElementById('myUL');
    list.addEventListener('click', catalogDeleteButton);
    const returnB = document.getElementById("log__link");
    returnB.addEventListener('click', goBack);
    document.addEventListener('DOMContentLoaded', getListHandlerToDelete);
}