import {sendDate} from "../sendDataHandler";
import {updateDatabase} from "../../logic/requests";
const validSendForm = require('../../logic/validators/sendDataValidator');

export async function editDate(data) {
    let status = await updateDatabase(data);
    console.log(status);
    console.log('');
    if (status === 200) {
        document.location.href = "/admin.html";
    } else if (status === 401) {
        alert("Проверьте введенные данные");
    }
}

export async function editPage(e){
    e.preventDefault();
    e.stopImmediatePropagation();

    const title = document.getElementById("name_input");
    const author = document.getElementById("author");
    const date = document.getElementById("data_info");
    const about = document.getElementById("about");
    const arr = document.getElementsByClassName('in');
    console.log(arr);
    let genre;
    let count = 0;
    for (let note of arr){
        if (note.checked){
            genre = note.id;
            break;
        }
        count++;
    }
    if (count === 10){
        alert("Выберите жанр");
    }
    const urlParam = new URL(window.location.href.toString());
    let temp = urlParam.searchParams.get('id');
    const data = {
        id: temp,
        title: title.value,
        author: author.value,
        date: date.value,
        about: about.value,
        genre: genre,
    };
    const correctData = validSendForm.checkValidationFromSendForm(data);
    switch (correctData){
        case(0): {
            alert("Измените название");
            break;
        }
        case(1): {
            alert("Режиссер введен некорректно");
            break;
        }
        case(2):{
            alert("Проверьте поле Год");
            break;
        }
        case(3):{
            alert("Проверьте описание");
            break;
        }
        case(4):{
            alert("Неверные данные");
            break;
        }
        case(-1):{
            await editDate(data);
            break;
        }
    }
}