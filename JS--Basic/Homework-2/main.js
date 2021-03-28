let year = prompt("Please enter your year of birth!");
console.log(typeof year === "number");
let sum = (year - 4)%12;



if ((sum === 0 )){

    alert("Your sign is a Rat");

}else if((sum === 1)){

    alert("Your sign is an Ox");

}else if((sum === 2)){

    alert("Your sign is a Tiger");

}else if((sum === 3)){

    alert("Your sign is a Rabbit");

}else if((sum === 4)){

    alert("Your sign is a Dragon");

}else if((sum === 5)){

    alert("Your sign is a Snake");

}else if((sum === 6)){

    alert("Your sign is a Horse");

}else if((sum === 7)){

    alert("Your sign is a Goat");

}else if((sum === 8)){

    alert("Your sign is a Monkey");

}else if((sum === 9)){

    alert("Your sign is a Rooster");

}else if((sum === 10)){

    alert("Your sign is a Dog");

}else if((sum === 11)){

    alert("Your sign is a Pig");

}else{
    
    alert("That value is not possible");

}




