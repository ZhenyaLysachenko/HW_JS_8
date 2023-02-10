// 1 DOM – це деревоподібне відтворення веб-сайту, у вигляді об'єктів, вкладених один в одного. 
//     Таке дерево потрібне для правильного відображення сайту 
//     та внесення змін на сторінках за допомогою JavaScript
// 2   innerHtml повертає весь текст, включаючи HTML-теги, що містяться в елементі.
//     innerText повертає весь текст, який міститься в елементі та у всіх його дочірніх елементах 
//     к звичайний текст без будь-якого форматування.
// 3  getElementsByClassName() - звернення до всіх елементів з однаковою назвою классу;
//     getElementsByTagName() - звернення до всіх елементів з однаковою назвою тегу;
//     querySelector() - шукає та повертає перший елемент, що задовольняє даному CSS-селектору;
//     querySelectorAll() - повертає всі елементи, що задовольняють даномму CSS-селектору.
// getElementById() - звернення до елементу за унікальнім id;
//     getElementsByName() - пошук серед елементів з атрибутом name, повертає список всіх елементів.







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

