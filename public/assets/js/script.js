const URL = '/';
let one = document.querySelector("#one");
let two = document.querySelector("#two");
let three = document.querySelector("#three");
let four = document.querySelector("#four");
let five = document.querySelector("#five");
let six = document.querySelector("#six");
let seven = document.querySelector("#seven");
let eight = document.querySelector("#eight");
one.onclick = function () {
    document.location.href = URL+"Berck";
}
two.onclick = function () {
    document.location.href = URL+"Arras";
}
three.onclick = function () {
    document.location.href = URL+"Amiens";
}
four.onclick = function () {
    document.location.href = URL+"Dunkerque";
}
five.onclick = function () {
    document.location.href = URL+"Lens";
}
six.onclick = function () {
    document.location.href = URL+"Lille";
}
seven.onclick = function () {
    document.location.href = URL+"Cambrai";
}
eight.onclick = function () {
    document.location.href = URL+"Calais";
}

let container = document.querySelector(".container");
let cover = document.querySelector(".cover");
let btn = document.getElementById("spin");
let number = Math.ceil(Math.random() * 1000);

btn.onclick = function () {
    btn.onclick = function () {
        let part = Math.round(number / 45) % 8;
        const pieces = cover.querySelectorAll('div.hidden');
        const pieceSelected = pieces[part];
        setTimeout(function () {
            pieceSelected.setAttribute('id', 'selected');
        }, 5000);

        container.style.transform = "rotate(-" + number + "deg)";
        number += Math.ceil(Math.random() * 1000);
    }
}
