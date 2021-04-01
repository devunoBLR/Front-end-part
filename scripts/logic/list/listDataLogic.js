export function fillEmptyCatalogWithDataOnPage(list, data) {
    for (let note of data) {
        let li = document.createElement('li');
        li.id = note.id;
        list.append(li);
        let span = document.createElement('span');
        span.innerText = note.title;
        li.appendChild(span);
    }
}

export function fillEmptyCatalogWithDataOnPageToDelete(list, data) {
    let temp = 1;
    for (let note of data) {

        let li = document.createElement('li');
        li.className = "asdf";
        li.id = note.id;
        list.append(li);
        let span = document.createElement('span');
        let button = document.createElement('button');
        span.innerText = note.title;
        li.appendChild(span);
        button.innerText = "Удалить";
        button.id = temp.toString();
        li.append(button);
        temp++;
    }
}

export function fillEmptyCatalogWithDataOnPageToEdit(list, data) {
    let temp = 1;
    for (let note of data) {

        let li = document.createElement('li');
        li.className = "asdf";
        li.id = note.id;
        list.append(li);
        let span = document.createElement('span');
        let button = document.createElement('button');
        span.innerText = note.title;
        li.appendChild(span);
        button.innerText = "Изменить";
        button.id = temp.toString();
        li.append(button);
        temp++;
    }
}
