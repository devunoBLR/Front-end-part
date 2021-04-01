import {getFullInfo} from "../../logic/requests";

export  function catalogNavigationHandler(e){
    let li = e.target.closest('li');
    console.log(li);
    let id = li.id;
    console.log(id);
    document.location.href = '/openNote.html' + '?id=' + id;
}
