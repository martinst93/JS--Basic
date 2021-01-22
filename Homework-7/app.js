let tableWrapper = document.getElementById('wrapper');
let rows = document.getElementById('rows');
let columns = document.getElementById('columns');
let counter1 = 1;
let counter2 = 1;

columns.addEventListener('input',populateTable);
rows.addEventListener('input',populateTable);


function populateTable() {
    table.innerHTML = '';
    let tbody = document.createElement('tbody');
    let child = tbody.children;
    for (let r = 0; r < rows.value; r++) {
        tbody.innerHTML += '<tr></tr>';
        for (let c = 0; c < columns.value; c++) {
            child[r].innerHTML += `<td>Rows ${counter1} Columns ${counter2}</td>`;

            counter2++;
        }
        counter1++;
        counter2 = 1;
    }

    table.append(tbody);
};

