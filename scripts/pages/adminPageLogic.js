import {exitToStartPage} from "../handlers/adminPage/exitPage";
import {goToCatalog} from "../handlers/adminPage/goToCatalog";
import {goToCreatePage} from "../handlers/adminPage/CreatePage";
import {deleteNote} from "../handlers/adminPage/deleteNote";
import {editNote} from "../handlers/adminPage/editNote";


export function adminPageLogic() {
    const adminCatalog = document.getElementById("watchCatalog");
    adminCatalog.addEventListener('click', goToCatalog);

    const exitButton = document.getElementById("exitButton");
    exitButton.addEventListener('click', exitToStartPage);

    const createPage = document.getElementById("createPage");
    createPage.addEventListener('click', goToCreatePage);

    const deleteFromCatalog = document.getElementById("deleteFromCatalog");
    deleteFromCatalog.addEventListener('click', deleteNote);

    const editFromCatalog = document.getElementById('editPage');
    editFromCatalog.addEventListener('click', editNote);
}