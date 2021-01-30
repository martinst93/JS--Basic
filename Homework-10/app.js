let btn = $("#btn");
let btnTwo = $("#btn2");

// Ajax call with JQuery
btn.click(function(){
    $.ajax({
        method : "GET",
        url: "https://pokeapi.co/api/v2/pokemon/ditto",
        success: function(print){
            console.log(print);
            console.log(print.moves);
            console.log(print.sprites);
        },
        error: function (){
            console.log("Something went wrong!");
        }
    })
});

// Ajax call with Fetch method
btnTwo.click(function(){
   fetch("https://gorest.co.in/public-api/users")
    .then(function(res){
        return res.text();
    })
    .then(function(data){
        let dataParse = JSON.parse(data);
        console.log(dataParse);
        for(let object of dataParse.data){
            console.log(object.gender);
            console.log(object.name);
            console.log(object.email);
        }
    })
    .catch(function(err){
        console.log(err);
    })

}); 