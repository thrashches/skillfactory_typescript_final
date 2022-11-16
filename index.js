"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
// Create a "close" button and append it to each list item
const myNodelist = document.getElementsByTagName("li");
let i;
for (i = 0; i < myNodelist.length; i++) {
    let span = document.createElement("span");
    let txt = document.createTextNode("\u00D7");
    span.className = "close";
    span.appendChild(txt);
    myNodelist[i].appendChild(span);
}
// Click on a close button to hide the current list item
const close = document.getElementsByClassName("close");
for (i = 0; i < close.length; i++) {
    let closeBtn = close[i];
    closeBtn.addEventListener('click', () => {
        const div = closeBtn.parentElement;
        if (div) {
            div.style.display = "none";
        }
    });
}
// Add a "checked" symbol when clicking on a list item
const list = document.querySelector('ul');
if (list) {
    list.addEventListener('click', function (ev) {
        let target = ev.target;
        if (target.tagName === 'LI') {
            target.classList.toggle('checked');
        }
    }, false);
}
// Create a new list item when clicking on the "Add" button
function newElement() {
    const li = document.createElement("li");
    const input = document.getElementById("myInput");
    const inputValue = input.value;
    let t = document.createTextNode(inputValue);
    li.appendChild(t);
    const myUl = document.getElementById("myUL");
    if (inputValue === '') {
        alert("You must write something!");
    }
    else {
        if (myUl) {
            myUl.appendChild(li);
        }
    }
    // const input = document.getElementById("myInput");
    if (!input) {
        return;
    }
    let span = document.createElement("SPAN");
    let txt = document.createTextNode("\u00D7");
    span.className = "close";
    span.appendChild(txt);
    li.appendChild(span);
    for (i = 0; i < close.length; i++) {
        const closeBtn = close[i];
        closeBtn.addEventListener('click', () => {
            let div = closeBtn.parentElement;
            if (div) {
                div.style.display = "none";
            }
        });
    }
}
