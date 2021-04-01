import {getTitlesFromCatalog} from "../../logic/requests";
import {fillEmptyCatalogWithDataOnPage} from "../../logic/list/listDataLogic";

export async function getListHandler() {
    console.log("2");
    let list = document.getElementById('myUL');
    let result = await getTitlesFromCatalog();
    if (result.status === 200){
        let body = result.body;
        list.innerHTML = '';
        await fillEmptyCatalogWithDataOnPage(list, body);
    }
}
