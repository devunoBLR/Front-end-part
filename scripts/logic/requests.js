export async function doSimpleRequestWithBody(method = 'POST', url = '', data = {}) {
    let response = await fetch(url, {
        method: method,
        headers: {
            'Accept': 'application/json',
            'Content-Type': 'application/json',
        },
        body: JSON.stringify(data),
    });

    return {
        status: response.status,
        body: null
    };
}

export async function doSimpleRequestNoBody(method = 'GET', url = '') {
    console.log("4");
    let response = await fetch(url, {
        method: method,
        headers: {
            'Accept': 'application/json',
            'Content-Type': 'application/json',
        },
    });
    if (method === 'GET') {
        return {
            status: response.status,
            body: await response.json()
        };
    } else if (method === 'DELETE') {
        return {
            status: response.status,
            body: null
        };
    }
}

export async function doAuthRequest(data) {
    console.log("lol1");
    const url = 'http://127.0.0.1:3000/admin/admin';
    const method = 'POST';

    let response = await doSimpleRequestWithBody(method, url, data);
    return response.status;
}

export async function updateDatabase(data){
    const url = 'http://127.0.0.1:3000/catalog/updateDatabase';
    const method = 'POST';
    let response = await doSimpleRequestWithBody(method,url, data);
    return response.status;
}

export async function inrertDatabase1(data){
    const url = 'http://127.0.0.1:3000/catalog/insertDatabase1';
    const method = 'POST';
    let response = await doSimpleRequestWithBody(method,url, data);
    return response.status;
}

export async function getTitlesFromCatalog() {
    console.log("3");
    const url = 'http://127.0.0.1:3000/catalog/getTitles';
    const method = 'GET';

    return await doSimpleRequestNoBody(method, url);
}

export async function getFullInfo(id) {
    let url = 'http://127.0.0.1:3000/catalog/getFullInfo/' + id.toString();
    const method = 'GET';
    return await doSimpleRequestNoBody(method, url);
}

export async function getGenres(id) {
    let url = 'http://127.0.0.1:3000/catalog/getGenres/';
    const method = 'GET';

    return await doSimpleRequestNoBody(method, url);
}

export async function deleteNote(id){
    let url = 'http://127.0.0.1:3000/catalog/deleteNote/' + id.toString();
    const method = "DELETE";
    return await doSimpleRequestNoBody(method, url);
}
