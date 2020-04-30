function encode() {
    var text = document.getElementById("text");
    text.value = encodeURI(text.value);
}

function decode() {
    var text = document.getElementById("text");
    text.value = decodeURI(text.value);
}

function encodeComponent() {
    var text = document.getElementById("text");
    text.value = encodeURIComponent(text.value);
}

function decodeComponent() {
    var text = document.getElementById("text");
    text.value = decodeURIComponent(text.value);
}
