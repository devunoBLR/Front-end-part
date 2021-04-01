import {getListHandlerToDelete, getListHandlerToEdit} from "../handlers/catalog/deleteListHandler";
import {goBack} from "../handlers/adminPage/goBackFromCatalog/goBack";
import {catalogEditButton} from "../handlers/editHandler";

export  function editNote(){
    document.addEventListener('DOMContentLoaded', getListHandlerToEdit);
    const list = document.getElementById('myUL');
    list.addEventListener('click', catalogEditButton);
    const returnB = document.getElementById("log__link");
    returnB.addEventListener('click', goBack);
}