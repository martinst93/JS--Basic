let input = prompt('Type 1 if you want to convert dog to human years, type 2 for vice versa');
let chosen = parseInt(input);

switch(chosen) {
    case 1:
        let inputOne = prompt('Enter dog years: ');
        let dogYears = parseInt(inputOne);
    
        function yearConversion(){
            let result = dogYears * 7;
            return result;
        }

        console.log(`your dog has ${yearConversion()} human years`);
        break;
    
    case 2:
        let inputTwo = prompt("Enter your years: ");
        let humanYears = parseInt(inputTwo);

        function yearConversionToHuman(){
            let result = humanYears / 7;
            return result.toFixed(1);
        }
        console.log(`you have ${yearConversionToHuman()} dog years`);
        break;

    default:
        console.log('ERROR! Please enter number only!')
        break;
}



