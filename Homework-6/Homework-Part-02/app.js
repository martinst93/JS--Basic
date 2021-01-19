function makeList() {
    
    let array = [1,5,3,6,7,9];
    let sum = 0;


    let listContainer = document.createElement('div');

    let listElement = document.createElement('ul');

    let sumContainer = document.createElement('div');
    
    let numberOfListItems = array.length;
    let listItem;

    // Add it to the page
    document.getElementsByTagName('body')[0].appendChild(listContainer);
    listContainer.appendChild(listElement);
    listContainer.appendChild(sumContainer);
    
    

    for (let i = 0; i < numberOfListItems; i++) {
        // create an li for each number
        listItem = document.createElement('li');
        
        // Add the number to li 
        listItem.innerHTML = array[i];
        
        // Add listItem to the listElement
        listElement.appendChild(listItem);
        
        sum += array[i]
    }
    // Add the sum under the list
    sumContainer.innerHTML += `The sum is ${sum}`;
       
}


makeList();


