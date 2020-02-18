function Activate(num, btn1, btn2) {
    if (num.value > 0) {
        btn1.disabled = false;
        btn2.disabled = false;
    } else {
        btn1.disabled = true;
        btn2.disabled = true;
        result.innerHTML = "";
    }
}

function Clear(num, result) {
    num.value = "";
    result.innerHTML = "";
    btn1.disabled = true;
    btn2.disabled = true;
}

function calculate(num1, result) {
    if (num1.value % 2 == 0) {
        result.innerHTML = "Четное";
    } else {
        result.innerHTML = "Не четное";
    }
}