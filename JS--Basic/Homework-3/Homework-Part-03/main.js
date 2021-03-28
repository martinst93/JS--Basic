function atm(){
    alert(`Please insert your card!`);
    prompt(`Please insert your PIN number!`); 

    let amount = 760000;
    let amountWi = prompt(`Please insert the amount you wish to withdraw!`);
    let amountLe = amount - amountWi;
    if(amountWi <= amount){
        alert(`You have withdrawn ${amountWi} $ and you have ${amountLe} $ left on your account!`);
    }else if(amountWi > amount){
        alert(`You don't have enough money in your account!`);
    } else {
        alert('Please insert a amount of cash only!');
    }
}

atm();










