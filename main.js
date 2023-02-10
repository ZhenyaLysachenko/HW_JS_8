const paragraphs = document.querySelectorAll('p');
paragraphs.forEach((el) => {
    el.style.backgroundColor = '#ff0000';
});

const startElement = document.getElementById('optionsList');
console.log(startElement);
const parent = startElement.parentNode;
console.log(parent);
if (startElement.hasChildNodes()) {
    let childrens = startElement.childNodes;
    for (let i = 0; i < childrens.length; ++i) {
        console.log(
            `Node ${i + 1} - name: ${startElement.childNodes[i].nodeName}, type: ${
                startElement.childNodes[i].nodeType
            }`
        );
    }
}
const element = document.getElementsByClassName('testParagraph');
console.log(element);
const newElement = document.getElementById('testParagraph');
newElement.innerText = 'This is a paragraph';

let mainHeaderItemsLi = document.querySelector('.main-header').querySelectorAll('li');
console.log(mainHeaderItemsLi);
for (let i = 0; i < mainHeaderItemsLi.length; i++) {
    mainHeaderItemsLi[i].className = 'nav-item';
}

const elemSectionTitle = document.querySelectorAll(".section-title");
for (let elem of elemSectionTitle) {
    elem.classList.remove("section-title");
}

