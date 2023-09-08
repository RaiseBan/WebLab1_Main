//
// function addToTable() {
//     let output = '';
//     let table = document.getElementById("table_out");
//     let cookie_params = Cookies.get("input_data");
//     if (cookie_params !== undefined && cookie_params !== ""){
//         let array = cookie_params.split("/");
//         console.log(array);
//         for (let i = 0; i < array.length - 1; i++){
//             console.log(array[i]);
//             let values = array[i].split(";");
//             output += "<tr>";
//             for (let j = 0; j < values.length; j++){
//                 console.log(values[j]);
//                 output += "<td>";
//                 output += values[j];
//                 output += "</td>";
//             }
//             output += "</tr>";
//         }
//         table.innerHTML = output;
//     }
// }
// addToTable();

function addToTable() {
    let table = document.getElementById("table_out");
    let cookie_params = Cookies.get("input_data");

    if (cookie_params !== undefined && cookie_params !== ""){
        let array = cookie_params.split("/");
        console.log(array);

        // Очистить таблицу перед добавлением новых данных
        while (table.firstChild) {
            table.removeChild(table.firstChild);
        }

        for (let i = 0; i < array.length - 1; i++){
            console.log(array[i]);
            let values = array[i].split(";");
            let row = document.createElement("tr"); // Создаем новую строку
            for (let j = 0; j < values.length; j++){
                console.log(values[j]);
                let cell = document.createElement("td"); // Создаем новую ячейку
                cell.textContent = values[j]; // Устанавливаем текст ячейки
                row.appendChild(cell); // Добавляем ячейку к строку
            }
            table.appendChild(row); // Добавляем строку к таблице
        }
    }
}

addToTable();
