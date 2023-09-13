// let input = document.getElementById().
let button = document.getElementById("sendButton");
let flag = false;
let userInputY = 0;
let userInputX = 0;
let userInputR = 2;

function selectR () {
    userInputR = document.getElementById("select-r")
        .options[document.getElementById("select-r")
        .options.selectedIndex].value;
    console.log("r" + userInputR);
    document.getElementById("label-r").innerText = "r = " + userInputR;
    draw();
}
function set_X(id){
    userInputX = parseInt(document.getElementById(id).value);
    document.getElementById("label-x").innerText = "x = " + userInputX;
    console.log("x" + userInputX);

}

function checkY (){
    userInputY = document.getElementById("input-y");
    if(isNaN(userInputY.value) || userInputY.value === ''){

        flag = false
        Toastify({
            text: "ну не, не подходит чиселко",
            duration: 2000,
            style:{
                background: "grey"
            }
        }).showToast();
    }else{
        if (userInputY.value > -3 && userInputY.value <= 3){
            flag = true;
            document.getElementById("label-y").innerText = "y = " + userInputY.value;
            userInputY = userInputY.value;
            console.log("y" + userInputY);
        }else{
            flag = false
            Toastify({
                text: "Значение Y не валидно (-3; 3)",
                duration: 2000,
                style:{
                    background: "grey"
                }
            }).showToast();
        }
    }

}
button.onclick = function (event){
    event.preventDefault();
    checkY();
    if (flag){
        sendData();
    }

}