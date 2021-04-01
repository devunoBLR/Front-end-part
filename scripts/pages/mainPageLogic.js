import {loginClick} from '../handlers/loginClickHandler';
import {SearchElem} from '../handlers/searchListHandler';
import { getListHandler } from '../handlers/catalog/getListHandler';
import { catalogNavigationHandler } from '../handlers/catalog/navigationHandler';

export function mainPageLogic() {
    console.log('WebPack: It is main page logic');

    //login
    const form = document.getElementById('log__link');
    form.addEventListener('click', loginClick);
    //list synchronization
    console.log("1");
    document.addEventListener('DOMContentLoaded', getListHandler);
    //list searching
    const searchInput = document.getElementById('search');
    searchInput.addEventListener('keyup', SearchElem);
    //list navigation
    const list = document.getElementById('myUL');
    list.addEventListener('click', catalogNavigationHandler);
}



