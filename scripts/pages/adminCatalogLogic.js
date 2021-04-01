import {goBack} from "../handlers/adminPage/goBackFromCatalog/goBack";
import {SearchElem} from "../handlers/searchListHandler";
import {getListHandler} from "../handlers/catalog/getListHandler";
import {catalogNavigationHandler} from "../handlers/catalog/navigationHandler";

export function adminCatalogLogic(){
    const backButton = document.getElementById("log__link");
    backButton.addEventListener('click', goBack);

    const searchInput = document.getElementById('search');
    searchInput.addEventListener('keyup', SearchElem);

    document.addEventListener('DOMContentLoaded', getListHandler);
    const list = document.getElementById('myUL');
    list.addEventListener('click', catalogNavigationHandler);
}