import {tempest} from "../logic/list/returnRequereFullInfo";
import {goBackindex} from "../handlers/notePage/notePage";
import {editPage} from "../handlers/adminPage/editPage";

export async function editionNote(){
    const urlParam = new URL(window.location.href.toString());
    let temp = urlParam.searchParams.get('id');
    console.log(temp);
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
    let Biography = document.getElementById("1");
    let action = document.getElementById("2");
    let detective = document.getElementById("3");
    let Dramma = document.getElementById("4");
    let comedy = document.getElementById("5");
    let cartoon = document.getElementById("6");
    let musicle = document.getElementById("7");
    let thriller = document.getElementById("8");
    let horror = document.getElementById("9");
    let fantasy = document.getElementById("10");
    let arr = body[0].gengres;
    console.log(arr);
    if (arr === "Biography") {
        Biography.checked = true;
    }
    if (arr === "action") {
        action.checked = true;
    }
    if (arr === "detective") {
        detective.checked = true;
    }
    if (arr === "Dramma") {
        Dramma.checked = true;
    }
    if (arr === "comedy") {
        comedy.checked = true;
    }
    if (arr === "cartoon") {
        cartoon.checked = true;
    }
    if (arr === "musicle") {
        musicle.checked = true;
    }
    if (arr === "thriller") {
        thriller.checked = true;
    }
    if (arr === "horror") {
        horror.checked = true;
    }
    if (arr === "fantasy") {
        fantasy.checked = true;
    }
    let edit = document.getElementById('sendDates');
    edit.addEventListener('submit', editPage);
    let button = document.getElementById('ret');
    button.addEventListener('click', goBackindex);
}