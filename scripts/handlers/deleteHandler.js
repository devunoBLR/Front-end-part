import {deleteNote} from "../logic/requests";

export async function catalogDeleteButton(e){
    let button = e.target.closest("button");
    let id = button.id;
    let button1 = document.getElementById(id);
    console.log(id);
    await deleteNote(id);
    document.location.href = "/admin.html";
}