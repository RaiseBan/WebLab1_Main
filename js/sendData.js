
let localStorageData = '';

function sendData() {
    const xhr = new XMLHttpRequest();
    xhr.open("GET", "server.php?" + "x=" + userInputX + "&y=" + userInputY + "&r=" + userInputR);
    xhr.send();
    xhr.onreadystatechange = function() {
        if (xhr.readyState === XMLHttpRequest.DONE && xhr.status === 200) {
            if (localStorage.getItem("input_data") !== null) {
                localStorageData = localStorage.getItem("input_data");
            }
            localStorageData += phpResponse(xhr.responseText);
            localStorage.setItem("input_data", localStorageData);
            // console.log(localStorage.getItem("input_data"));
            addToTable();
        }
    };
}
function phpResponse(answer) {
    if (answer.split("/")[0].split(";")[0] === "") {
        Toastify({
            text: "Отправленные данные неверные",
            duration: 2000,
            style:{
                background: "grey"
            }
        }).showToast();
        return null;
    }else {
        drawPoint();
        return answer;
    }


}