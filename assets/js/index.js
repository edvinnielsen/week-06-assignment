const btnAdd = document.querySelector("#add-solve");
const btnSub = document.querySelector("#subtract-solve");
const btnMlt = document.querySelector("#multiply-solve");
const btnDiv = document.querySelector("#divide-solve");

const numAdd1 = document.querySelector("#add-a");
const numAdd2 = document.querySelector("#add-b");
const numSub1 = document.querySelector("#subtract-a");;
const numSub2 = document.querySelector("#subtract-b");;
const numMlt1 = document.querySelector("#multiply-a");
const numMlt2 = document.querySelector("#multiply-b");
const numDiv1 = document.querySelector("#divide-a");
const numDiv2 = document.querySelector("#divide-b");

const resAdd = document.querySelector("#add-result");
const resSub = document.querySelector("#subtract-result");
const resMlt = document.querySelector("#multiply-result");
const resDiv = document.querySelector("#divide-result");


function add() {
    const result = numAdd1.valueAsNumber + numAdd2.valueAsNumber;
    resAdd.value = result;
}

function sub() {
    const result = numSub1.valueAsNumber - numSub2.valueAsNumber;
    resSub.value = result;
}

function mlt() {
    const result = numMlt1.valueAsNumber * numMlt2.valueAsNumber;
    console.log(result)
    resMlt.value = result;
}

function div() {
    const result = numDiv1.valueAsNumber / numDiv2.valueAsNumber;
    resDiv.value = result;
}


btnAdd.addEventListener("click", add);
btnSub.addEventListener("click", sub);
btnMlt.addEventListener("click", mlt);
btnDiv.addEventListener("click", div);
