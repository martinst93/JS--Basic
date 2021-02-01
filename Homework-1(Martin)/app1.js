let phone = 119.95;
let taxrate = 0.05;
let numberOfPhones = 30;
let fullTax = phone * taxrate ;

let fullPrice = numberOfPhones * phone + fullTax;

console.log('The price with tax for ' + numberOfPhones + ' phones is ' + fullPrice +'$');

