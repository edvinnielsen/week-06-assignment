const addButton = document.querySelector("#add-solve");
const subButton = document.querySelector("#subtract-solve");
const multButton = document.querySelector("#multiply-solve");
const divButton = document.querySelector("#divide-solve");

const addNum1 = document.querySelector("#add-a");
const addNum2 = document.querySelector("#add-b");
const subNum1 = document.querySelector("#subtract-a");;
const subNum2 = document.querySelector("#subtract-b");;
const multNum1 = document.querySelector("#multiply-a");
const multNum2 = document.querySelector("#multiply-b");
const divNum1 = document.querySelector("#divide-a");
const divNum2 = document.querySelector("#divide-b");

const addResult = document.querySelector("#add-result");
const subResult = document.querySelector("#subtract-result");
const multResult = document.querySelector("#multiply-result");
const divResult = document.querySelector("#divide-result");


function add() {
    const result = addNum1.valueAsNumber + addNum2.valueAsNumber;
    addResult.value = result;
}

function sub() {
    const result = subNum1.valueAsNumber + subNum2.valueAsNumber;
    subResult.value = result;
}

function mult() {
    const result = multNum1.valueAsNumber + multNum2.valueAsNumber;
    console.log(result)
    multResult.value = result;
}

function div() {
    const result = divNum1.valueAsNumber + divNum2.valueAsNumber;
    divResult.value = result;
}

addButton.addEventListener("click", add);
subButton.addEventListener("click", sub);
multButton.addEventListener("click", mult);
divButton.addEventListener("click", div);


