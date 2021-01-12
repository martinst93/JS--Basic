


// function inPut(parametar){
        
//         if(typeof parametar === "object"){
//             let result = parametar;
//             console.log(`the parametar ${parametar} is an object `);
//             return result;
//         }
//         else if(typeof parametar === "boolean"){
//             let result = parametar;
//             console.log(`the parametar ${parametar} is a boolean `);
//             return result;
//         }
//         else if(typeof parametar === "number"){
//             let result = parametar;
//             console.log(`the parametar ${parametar} is a number`);
//             return result;
//         }
//         else if(typeof parametar === "string"){
//             let result = parametar;
//             console.log(`the parametar ${parametar} is a string`);
//             return result;
//         }
//         else(typeof parametar === "undefined")
//             let result = parametar;
//             console.log(`the parametar ${parametar} is undefined`);
//             return result;
        

// }




// let result1=inPut({});
// console.log(result1);
// let result2=inPut(true);
// console.log(result2);
// let result3=inPut(6);
// console.log(result3);
// let result4=inPut("yes");
// console.log(result4);
// let result5=inPut();
// console.log(result5);


function nameOfTypes(a) {
    let result = `This input is of type - ${typeof a}`;
    console.log(result);
    return result;
}

nameOfTypes(Object());
nameOfTypes(false);
nameOfTypes(1994);
nameOfTypes('Martin');
nameOfTypes();