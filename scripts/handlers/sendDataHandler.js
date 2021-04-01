import {getTitlesFromCatalog, inrertDatabase1} from "../logic/requests";

const validSendForm = require('../logic/validators/sendDataValidator');

export async function sendDate(data) {
    let status = await inrertDatabase1(data);
    console.log(status);
    console.log('');
    if (status === 200) {
        document.location.href = "/admin.html";
    } else if (status === 401) {
        alert("Проверьте введенные данные");
    }
}

export async function sendDataHandler(e) {
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
    let result = await getTitlesFromCatalog();
    console.log(result.body.length);
    const data = {
        id: result.body.length + 1,
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
        case(3): {
            alert("Проверьте описание");
            break;
        }
        case(-1):{
            await sendDate(data);
            break;
        }
    }
}