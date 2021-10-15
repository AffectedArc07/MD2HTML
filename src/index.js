import marked from "marked";

export function render(source_file, target_div) {
    let XHTTP = new XMLHttpRequest();
    XHTTP.open("GET", source_file, false);
    XHTTP.send(null);
    let markdown = marked(XHTTP.responseText);
    document.getElementById(target_div).innerHTML = markdown;
}