export function catalogEditButton(e){
    let button = e.target.closest("button");
    let id = button.id;
    document.location.href = "/editionPageEnd.html?id=" + id;
}