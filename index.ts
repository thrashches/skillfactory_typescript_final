export { };
// Create a "close" button and append it to each list item
const myNodelist: HTMLCollectionOf<Element> = document.getElementsByTagName("LI");

for (let i = 0; i < myNodelist.length; i++) {
  let span: HTMLElement = document.createElement("SPAN");
  let txt: Text = document.createTextNode("\u00D7");
  span.className = "close";
  span.appendChild(txt);
  myNodelist[i].appendChild(span);
}

// Click on a close button to hide the current list item
const close: HTMLCollectionOf<Element> = document.getElementsByClassName("close");

for (let i = 0; i < close.length; i++) {
  let closeBtn: Element = close[i];
  closeBtn.addEventListener('click', () => {
    const div: HTMLElement | null = closeBtn.parentElement;
    if (div) {
      div.style.display = "none";
    }

  }
}

// Add a "checked" symbol when clicking on a list item
const list: HTMLUListElement | null = document.querySelector('ul');
if (list) {
  list.addEventListener('click', function (ev) {
    let target: HTMLElement = <HTMLElement>ev.target;
    if (target.tagName === 'LI') {
      target.classList.toggle('checked');
    }
  }, false);
}
// Create a new list item when clicking on the "Add" button
function newElement() {
  const li: HTMLElement = document.createElement("li");
  const input: HTMLInputElement = <HTMLInputElement>document.getElementById("myInput");
  const inputValue: string = input.value;
  let t: Text = document.createTextNode(inputValue);
  li.appendChild(t);
  const myUl = document.getElementById("myUL");
  if (inputValue === '') {
    alert("You must write something!");
  } else {
    if (myUl) {
    myUl.appendChild(li);
    }
  }
  const input = document.getElementById("myInput");
  if (!input) {
    return
  }
  let span = document.createElement("SPAN");
  let txt = document.createTextNode("\u00D7");
  span.className = "close";
  span.appendChild(txt);
  li.appendChild(span);

  for (let i = 0; i < close.length; i++) {
    close[i].onclick = function () {
      let div = this.parentElement;
      div.style.display = "none";
    }
  }
}