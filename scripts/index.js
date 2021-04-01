import '../styles/style.scss';
import '../styles/authPage.scss';
import '../styles/AdminPage.scss';
import '../styles/createPagee.scss';
// import '../styles/mainAdminPageHeader.scss';
// import '../styles/menuListDisplay.scss';
// import '../styles/notePageBlocks.scss';
// import '../styles/hoovers/deleteHoover.scss';
// import '../styles/hoovers/editHoover.scss';

import {mainPageLogic} from './pages/mainPageLogic';
import {authPageLogic} from './pages/authPageLogic';
import {adminPageLogic} from './pages/adminPageLogic';
import {adminCatalogLogic} from './pages/adminCatalogLogic';
import {openNoteLogic} from './pages/openNoteLogic';
import {deleteNote} from './pages/deleteNoteLogic';
import {createPageLogic} from "./pages/createPageLogic";
import {editNote} from "./pages/editNote";
import {editionNote} from "./pages/editionNote";

function bootstrapApp() {
    const path = window.location.pathname;
    console.log(path);
    switch (path) {
        case '/': { //index page
            mainPageLogic();
            break;
        }
        case '/authPage.html': {
            authPageLogic();
            break;
        }
        case '/admin.html': {
            adminPageLogic();
            break;
        }
        case '/catalog.html': {
            adminCatalogLogic();
            break;
        }
        case '/createPage.html': {
            createPageLogic();
            break;
        }
        case '/openNote.html':{
            openNoteLogic();
            break;
        }
        case '/deleteNote.html':{
            deleteNote();
            break;
        }
        case '/editionPage.html':{
            editNote();
            break;
        }
        case '/editionPageEnd.html':{
            editionNote();
            break;
        }
        default: {
            console.log('');
        }
    }
}

bootstrapApp();