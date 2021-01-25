btn.addEventListener('click', function(e){
    e.preventDefault();
    animal.speak();
});


let animal = {

    input : input = document.getElementById('input'),
    par : par = document.getElementById('par'),
    body : body = document.getElementById('body'),
    btn : btn = document.getElementById('btn'),
    result : result = document.getElementById('par'),

    name : 'Mia',
    kind : 'Labrador',
    speak : function () {
    
        result.innerText += `${this.name} the ${this.kind} says ${input.value}`;
    }
}
