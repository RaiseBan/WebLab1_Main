// let input = document.getElementById().
let button = document.getElementById("sendButton");
let flag = false;
let userInputY = 0;
let userInputX = 0;
let userInputR = 1;

function selectR () {
    userInputR = document.getElementById("select-r")
        .options[document.getElementById("select-r")
        .options.selectedIndex].value;
    document.getElementById("label-r").innerText = "r = " + userInputR;
    draw();
}
function set_X(id){
    userInputX = document.getElementById(id).value;
    document.getElementById("label-x").innerText = "x = " + userInputX;

}

function checkY (){
    userInputY = document.getElementById("input-y");
    if(!/^-?\d{1}(\.|,)?\d*$/i.test(userInputY.value)){

        flag = false
        alert("мужик, ну не подходит чиселко")
        alert(userInputY.value);
    }else{
        let temp = userInputY.value.replace(/,/, ".")
        if (temp >= -5 && temp <= 5){
            flag = true;
            document.getElementById("label-y").innerText = "y = " + temp;
            userInputY = userInputY.value;
        }else{
            flag = false
            alert("Значение Y не валидно");
        }
    }

}
button.onclick = function (){
    checkY();
    if (flag){
        sendData();
    }

}