let main = document.getElementById('main');
let colum = document.getElementById('colum');
let row = document.getElementById('row');
let table = document.getElementById('table');
let itemOne;
let itemTwo;


row.addEventListener('input',inputs);
colum.addEventListener('input',inputs);



function inputs(){
    crateTable(colum.value,row.value);
    
}


function crateTable(colum,row){
   for(let i = 0 ; i < colum.length ; i++){
        
    itemOne = document.createElement('th');


    itemOne.innerHTML = `Colum ${colum[i]}`;


    table.appendChild(itemOne);
    }

   for(let i = 0 ; i < row.length ; i++){
        
    itemTwo = document.createElement('tr');

    itemTwo.innerHTML = `Row ${row[i]}`;

    table.appendChild(itemTwo);
    }
}

