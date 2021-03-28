let btn = document.getElementById('btn');


const allBooks = {
main: document.getElementById('main'),
input: document.getElementById('input-field'),
print: document.getElementById('print'),

title :  ['The History of Tom Jones','Pride and Prejudice','The Red','Le Pere','David Copperfield'],
author : ['Henry Fielding','Jane Austen','Black by Stendhal','Honore de Balzac','Charles Dickens.'],
readingStatus : [true,false,true, false,true],
printTitleAndAuthor : function(){
        
    if(this.input.value === 'The History of Tom Jones' && this.readingStatus[0] === true ) {
        this.print.innerHTML += `You have read ${this.title[0]} - by ${this.author[0]}`;
    }
        else if(this.readingStatus[0] === false){
        this.print.innerHTML += `You must read ${this.title[0]} - by ${this.author[0]}!`;
    }
        else if(this.input.value === 'Pride and Prejudice' && this.readingStatus[1] === false ) {
        this.print.innerHTML += `You have read ${this.title[1]} - by ${this.author[1]}`;
    }
        else if(this.readingStatus[1] === true){
        this.print.innerHTML += `You must read ${this.title[1]} - by ${this.author[1]}!`;
    }
    if(this.input.value === 'The Red' && this.readingStatus[2] === true ) {
        this.print.innerHTML += `You have read ${this.title[2]} - by ${this.author[2]}`;
    }
        else if(this.readingStatus[2] === false){
        this.print.innerHTML += `You must read ${this.title[2]} - by ${this.author[2]}!`;
    }
    if(this.input.value === 'Le Pere' && this.readingStatus[3] === false ) {
        this.print.innerHTML += `You have read ${this.title[3]} - by ${this.author[3]}`;
    }
        else if(this.readingStatus[3] === false){
        this.print.innerHTML += `You must read ${this.title[3]} - by ${this.author[3]}!`;
    }
    if(this.input.value === 'David Copperfield' && this.readingStatus[4] === false ) {
        this.print.innerHTML += `You have read ${this.title[4]} - by ${this.author[4]}`;
    }
        else if (this.readingStatus[4] === true){
        this.print.innerHTML += `You must read ${this.title[4]} - by ${this.author[4]}!`;
    }
}

};


btn.addEventListener('click',function(e){
e.preventDefault();
allBooks.printTitleAndAuthor();
});