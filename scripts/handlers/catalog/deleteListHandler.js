import {getTitlesFromCatalog} from "../../logic/requests";
import {
    fillEmptyCatalogWithDataOnPageToDelete,
    fillEmptyCatalogWithDataOnPageToEdit
} from "../../logic/list/listDataLogic";

export async function getListHandlerToDelete(){
    console.log("2");
    let list = document.getElementById('myUL');
    let result = await getTitlesFromCatalog();
    if (result.status === 200){
        let body = result.body;
        list.innerHTML = '';
        await fillEmptyCatalogWithDataOnPageToDelete(list, body);
    }
}

export async function getListHandlerToEdit(){
    console.log("2");
    let list = document.getElementById('myUL');
    let result = await getTitlesFromCatalog();
    if (result.status === 200){
        let body = result.body;
        list.innerHTML = '';
        await fillEmptyCatalogWithDataOnPageToEdit(list, body);
    }
}