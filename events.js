// HOMEWORK

// 1. Створити сторінку на якій будемо відображати 
// базовий текст в span("Очікую на ввід даних"). 
// При натисканні alt + A, замість спана зявиться інпут з аналогічним текстом, 
// який тепер ви зможете відредагувати. 
// Далі коли ви натисните shift + S дані збережуться 
// і знов будуть відображатись як span. 
let spanElem = document.getElementById('spanValue');
let inputElem = document.getElementById('inputValue')

document.addEventListener('keydown', (event) => {
    if (event.code == 'KeyA' && event.altKey) {
        spanElem.style.display = 'none';
        inputElem.style.display = 'block';
    } else if (event.code == 'KeyS' && event.altKey) {
        spanElem.innerHTML = inputElem.value;
        spanElem.style.display = 'block';
        inputElem.style.display = 'none';
    }
})

// 2. Повісити івент лісенер на ресайз сторінки, 
// коли розмір сторінки буде менше 600px , 
// виводити лог ми векористовуємо мобільну версію, 
// при більшому розмірі сторінки - що ми використовуємо десктоп версію.
let windowSize = () => {
    let width = document.documentElement.clientWidth;
    let height = document.documentElement.clientHeight;
    document.getElementById("window").innerHTML = `Width: ${width},  Height: ${height}`;
    let result = (width > 600) ? 'We are using desktop version' : 'We are using phone version';
    console.log(result)
}
window.addEventListener("resize", windowSize);
windowSize();


// 3. Повісити івент на інпут, при зміні стану інпута
//  - виводити повідомленням зі значенням яке зараз є введено.

let changeFunction = value => {
    alert(value);
};


// // 4. При натисканні на кнопку альт+ о виводити модальне вікно на екран,
// // альт + с - закривати.
let modalWindow = document.getElementById('modal')
document.addEventListener('keydown', (event) => {
    if (event.altKey && event.code == 'KeyO') {
        modalWindow.style.display = 'block'
    } else if (event.altKey && event.code == "KeyC") {
        modalWindow.style.display = 'none'
    }
})








// // CLASSWORK

// //say hello
// let buttonEvent = () => alert("hello");
// document.getElementById("button1").onclick = buttonEvent;


// //calc sum
// function getInputValue() {
//     let first = document.getElementById("number1").value;
//     let second = document.getElementById("number2").value;
//     let sum = Number(first) + Number(second);
//     alert(sum);
// }

// let changeFunction = value => {
//     alert("I see you");
// };
// let submitFunction = () => {};