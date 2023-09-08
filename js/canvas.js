canvas = document.getElementById("canvas");
ctx = canvas.getContext("2d");
//
ctx.clearRect(0, 0, 1000, 1000);
//
// ctx.moveTo(canvas.width / 2, 0);
// ctx.closePath();
// ctx.stroke();
//x: 500
//y: 500
//center = 250
// - 100

let widthCenter = canvas.width / 2;
let heightCenter = canvas.height / 2;
let topY = heightCenter - 125;
let bottomY = heightCenter + 125;
let leftX = widthCenter - 125;
let rightX = widthCenter + 125;

draw();
//рисуем квадрат
function drawPoint(){
    if ( Math.abs(userInputY) > userInputR || Math.abs(userInputX) > userInputR){
        alert("выход за границы графика");
        draw();
    }
    else{
        draw();

        ctx.fillStyle = "red";
        ctx.beginPath();
        // ctx.moveTo(widthCenter, heightCenter);
        console.log(userInputX, userInputY, userInputR);
        ctx.arc(widthCenter + 100 * userInputX / userInputR, heightCenter - 100 * parseInt(userInputY) / userInputR, 3, 0, 2 * Math.PI);        ctx.closePath();
        ctx.fill();

    }
}
function draw() {

    ctx.clearRect(0, 0, 1000, 1000);

    ctx.beginPath();
    ctx.fillStyle = "rgba(91,95,201,1)";
    ctx.fillRect(widthCenter, heightCenter, 50, 100);

    ctx.moveTo(widthCenter, heightCenter);
    ctx.arc(widthCenter, heightCenter, 50, Math.PI,  -Math.PI/2);
    ctx.fill(); // заливаем фигуру
// треугольник
    ctx.beginPath();
    ctx.moveTo(widthCenter, heightCenter); // первая точка
    ctx.lineTo(widthCenter, heightCenter + 50); // вторая точка
    ctx.lineTo(widthCenter - 100, heightCenter); // третья точка
    ctx.fill();


    ctx.fillStyle = "black"
    ctx.beginPath();
    ctx.moveTo(widthCenter, heightCenter); // начальная точка пути
// ctx.fillRect(widthCenter, heightCenter, 5, 5);
// линия x
    ctx.lineTo(widthCenter + 125, heightCenter); // добавляем линию
    ctx.moveTo(widthCenter, heightCenter); // начальная точка пути
    ctx.lineTo(widthCenter - 125, heightCenter); // добавляем линию

// //линия y
    ctx.moveTo(widthCenter, heightCenter); // начальная точка пути
    ctx.lineTo(widthCenter, heightCenter + 125); // добавляем линию
    ctx.moveTo(widthCenter, heightCenter); // начальная точка пути
    ctx.lineTo(widthCenter, heightCenter - 125); // добавляем линию


//стрелочка для y
    ctx.moveTo(widthCenter, heightCenter - 125);
    ctx.lineTo(widthCenter - 5, heightCenter - 120);
    ctx.moveTo(widthCenter, heightCenter - 125);
    ctx.lineTo(widthCenter + 5, heightCenter - 120);
    ctx.fillText('Y', widthCenter, heightCenter - 125);

//стрелочка для X
    ctx.moveTo(widthCenter + 125, heightCenter);
    ctx.lineTo(widthCenter + 120, heightCenter - 5);
    ctx.moveTo(widthCenter + 125, heightCenter);
    ctx.lineTo(widthCenter + 120, heightCenter + 5);
// линия x, засечка R/2
    ctx.moveTo(widthCenter + 50, heightCenter - 5);
    ctx.lineTo(widthCenter + 50, heightCenter + 5);
    ctx.fillText(-1 * userInputR / 2, widthCenter + 50, heightCenter - 8);
// линия x, засечка R
    ctx.moveTo(widthCenter + 100, heightCenter - 5);
    ctx.lineTo(widthCenter + 100, heightCenter + 5);
    ctx.fillText(-1 * userInputR, widthCenter + 100, heightCenter - 8);
// перемещаемся обратно в центр
    ctx.moveTo(widthCenter, heightCenter);
// линия x, засечка -R/2
    ctx.moveTo(widthCenter - 50, heightCenter - 5);
    ctx.lineTo(widthCenter - 50, heightCenter + 5);
    ctx.fillText(-1 * userInputR / 2, widthCenter - 50, heightCenter - 8);
// линия x, засечка -R
    ctx.moveTo(widthCenter - 100, heightCenter - 5);
    ctx.lineTo(widthCenter - 100, heightCenter + 5);
    ctx.fillText(-1 * userInputR, widthCenter - 100, heightCenter - 8);

//линия y, засечка R/2
    ctx.moveTo(widthCenter, heightCenter);
    ctx.moveTo(widthCenter - 5, heightCenter - 50);
    ctx.lineTo(widthCenter + 5, heightCenter - 50);
    ctx.fillText(userInputR / 2, widthCenter + 10, heightCenter - 45);
//линия y, засечка R
    ctx.moveTo(widthCenter - 5, heightCenter - 100);
    ctx.lineTo(widthCenter + 5, heightCenter - 100);
    ctx.fillText(userInputR, widthCenter + 10, heightCenter - 95);
//
    ctx.moveTo(widthCenter, heightCenter);
//линия y, засечка -R/2
    ctx.moveTo(widthCenter - 5, heightCenter + 50);
    ctx.lineTo(widthCenter + 5, heightCenter + 50);
    ctx.fillText(-1 * userInputR / 2, widthCenter + 10, heightCenter + 55);
//линия y, засечка -R
    ctx.moveTo(widthCenter - 5, heightCenter + 100);
    ctx.lineTo(widthCenter + 5, heightCenter + 100);
    ctx.fillText(-1 * userInputR, widthCenter + 10, heightCenter + 105);


    ctx.strokeStyle = "black"; // устанавливаем цвет контура
    ctx.stroke(); // рисуем контур пути
    ctx.closePath();

}


