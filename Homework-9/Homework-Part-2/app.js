let textInput = $("#text-input");
let colorInput = $("#color-input");
let messages = $("#message");


$("#btn").click(function(){

if(!( textInput.val())){
    messages.text(`Please add some text in the input field!`);
}
else{
    $("body").first().html(`<header><h1>${textInput.val()} and the color is : ${colorInput.val()}</h1></header>`);
}

});