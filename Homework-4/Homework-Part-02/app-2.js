const fiveNumbers = [1, 2, 3, 4, 5];


function sumOfNumbers(num){ return console.log((num[0] + num[1] + num[2] + num[3] + num[4])) };



// BONUS 

function validateNumber(){
   let res = fiveNumbers.every(function(number) {return typeof number === 'number';});

   if(res) 
        sumOfNumbers(fiveNumbers);

   else 
        console.log('ERROR! is not a number...');
}

validateNumber();












