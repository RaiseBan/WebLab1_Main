let cookies_data = '';
function sendData(){
    const xhr = new XMLHttpRequest();
    xhr.open("GET", "server.php?" + "x=" + userInputX + "&y=" + userInputY + "&r=" + userInputR);
    xhr.send();
    xhr.onreadystatechange = function (){
        if (xhr.readyState === XMLHttpRequest.DONE && xhr.status === 200){
            if (Cookies.get("input_data") !== undefined){
                cookies_data = Cookies.get("input_data");
            }
            cookies_data += phpResponse(xhr.responseText);
            Cookies.set("input_data", cookies_data);
            console.log(Cookies.get("input_data"));
            addToTable()
        }
    }
}
function phpResponse(answer){
    if (answer.split("/")[0].split(";")[0] ===""){
        alert("отправленные данные не корректны");
    }
    drawPoint();
    return answer;
}
