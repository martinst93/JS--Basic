let userNameRegister = document.getElementById('userName');
let userPassRegister = document.getElementById('userPass');
let myBtnRegister = document.getElementById('myBtn');

let oldUserName = document.getElementById('oldUserName');
let oldUserPass = document.getElementById('oldUserPass');
let myBtnLogin = document.getElementById('myBtn2');

let userNameDataBase = [];

function NewUser(username,password,isAdmin){
    this.username = username;
    this.password = password;
    this.isAdmin = isAdmin || false;
};

function registerUser(username,password,isAdmin){
    let newUser = new NewUser(username,password,isAdmin);

    console.log(newUser);
    userNameDataBase.push(newUser);
};


myBtnRegister.addEventListener('click',function(){
    registerUser(userNameRegister.value,userPassRegister.value,false);
    if(userNameRegister.value == null || userNameRegister.value == ""){
        alert('Name cant be blank');
        return false;
    }else if(userNameRegister.value.length < 6){
        alert('There should be more then 6 characters');
        return false;
    }else if(userPassRegister.value.length < 6){
        alert('There should be more then 6 characters in the password');
        return false;
    }
    
});

myBtnLogin.addEventListener('click',function(){

    for(let i = 0 ; i < userNameDataBase.length ; i++ ){
        if( oldUserName.value.length != userNameDataBase[i]){
            alert('You need to register first');
            return false;
    }else if(oldUserPass.value.length < 6){
        alert('There should be more then 6 characters');
        return false;
    }
} 
console.log(userNameDataBase);
});



