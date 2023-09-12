
function addToTable() {
    let table = document.getElementById("table_out");
    let localStorageData = localStorage.getItem("input_data");

    if (localStorageData !== null && localStorageData !== "") {
        let array = localStorageData.split("/");
        console.log(array);

        // Очистить таблицу перед добавлением новых данных
        while (table.firstChild) {
            table.removeChild(table.firstChild);
        }

        for (let i = 0; i < array.length - 1; i++) {
            console.log(array[i]);
            let values = array[i].split(";");
            let row = document.createElement("tr"); // Создаем новую строку
            for (let j = 0; j < values.length; j++) {
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
