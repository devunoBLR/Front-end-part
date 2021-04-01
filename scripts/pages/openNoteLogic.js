import {getFullInfo} from "../logic/requests";
import {tempest} from "../logic/list/returnRequereFullInfo";
import {goBackindex} from "../handlers/notePage/notePage";

export async function openNoteLogic(e) {
    const urlParam = new URL(window.location.href.toString());
    let temp = urlParam.searchParams.get('id');
    let data = await tempest(temp);
    let body = data.body;
    console.log(body[0]);
    let title = document.getElementById("name_input");
    title.value = body[0].title;
    let author = document.getElementById("author");
    author.value = body[0].author;
    let yearOut = document.getElementById("data_info");
    yearOut.value = body[0].dataOut;
    let about = document.getElementById("about");
    about.value = body[0].aboutt;
    let Biography = document.getElementById("Biography");
    let action = document.getElementById("action");
    let detective = document.getElementById("detective");
    let Dramma = document.getElementById("Dramma");
    let comedy = document.getElementById("comedy");
    let cartoon = document.getElementById("cartoon");
    let musicle = document.getElementById("musicle");
    let thriller = document.getElementById("thriller");
    let horror = document.getElementById("horror");
    let fantasy = document.getElementById("fantasy");
    let arr = body[0].gengres;
    console.log(arr);
    if (arr === "Biography") {
        Biography.checked = true;
        Biography.disabled = false;
    }
    if (arr === "action") {
        action.checked = true;
        action.disabled = false;
    }
    if (arr === "detective") {
        detective.checked = true;
        detective.disabled = false;
    }
    if (arr === "Dramma") {
        Dramma.checked = true;
        Dramma.disabled = false;
    }
    if (arr === "comedy") {
        comedy.checked = true;
        comedy.disabled = false;
    }
    if (arr === "cartoon") {
        cartoon.checked = true;
        cartoon.disabled = false;
    }
    if (arr === "musicle") {
        musicle.checked = true;
        musicle.disabled = false;
    }
    if (arr === "thriller") {
        thriller.checked = true;
        thriller.disabled = false;
    }
    if (arr === "horror") {
        horror.checked = true;
        horror.disabled = false;
    }
    if (arr === "fantasy") {
        fantasy.checked = true;
        fantasy.disabled = false;
    }
    let button = document.getElementById('returnBack');
    button.addEventListener('click', goBackindex);
}


