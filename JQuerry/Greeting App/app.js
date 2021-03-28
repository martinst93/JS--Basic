let input = $("#input-field");
let btn = $("btn");

$("#btn").click(function(){
    $("p").first().text(`Hello There ${input.val()}`);
});