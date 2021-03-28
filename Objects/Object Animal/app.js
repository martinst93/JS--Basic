let inputName = document.getElementById('input-name');
let inputKind = document.getElementById('input-kind');
let inputSpeaks = document.getElementById('input-speaks');
let btn = document.getElementById('btn');
let result = document.getElementById('result');

let animal = {
    name : inputName,
    kind : inputKind,
    speak : inputSpeaks,
    method : function () {
    }
}

btn.addEventListener('click', function(e){
    e.preventDefault();
    inputName.value === animal.name;
    inputKind.value === animal.kind;
    inputSpeaks.value === animal.speak;
    result.innerText += animal.method();
});